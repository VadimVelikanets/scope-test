import React, {useEffect, useMemo, useState} from 'react';
import UserItem from "./UserItem";
import {useQuery} from "@apollo/client";
import {FETCH_USERS} from "../../queries/fetchUsers";
import Spinner from "../Spinner";
import {useFilterContext} from "../../context/FilterContext";
import Pagination from "./Pagination";

function UserList(): JSX.Element {
    const {filterData, setFilterData, setTotalResults, totalResults} = useFilterContext();
    const [currentPage, setCurrentPage] = useState(0);

    const filterQueryString = useMemo(() => {
        if(filterData) return Object.keys(filterData).map(
            key => {
                if(filterData[key] === true) {
                    return key
                }
                return  key + ':' + filterData[key]
            }
        ).join(' ');
        return ""
    },[filterData, setFilterData])

    const { data, loading } = useQuery(FETCH_USERS, {
      variables: {
        fastSearch: false,
        page: currentPage,
        querystring: filterQueryString
      },
    });

    useEffect(() => {
        setTotalResults(data?.influencers?.num_total_results)
    }, [data, filterData, setFilterData, loading])

    useEffect(() => {
        setCurrentPage(0)
    }, [filterQueryString])

    const onChangeCurrentPage = (value: number) => {
        setCurrentPage(value)
    }

    if(loading) return <Spinner/>
    return (
        <div>
            <div>
                {data?.influencers?.influencers.map(item => (
                    <UserItem key={item?.id} item={item}/>
                ))}
                <Pagination currentPage={currentPage}
                            onChangeCurrentPage={onChangeCurrentPage}
                            totalResults={totalResults}
                />
            </div>
        </div>
    );
}

export default UserList;