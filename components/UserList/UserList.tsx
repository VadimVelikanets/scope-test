import React, {useEffect, useMemo} from 'react';
import UserItem from "./UserItem";
import {useQuery} from "@apollo/client";
import {FETCH_USERS} from "../../queries/fetchUsers";
import Spinner from "../Spinner";
import {useFilterContext} from "../../context/FilterContext";

type UserListProps = {
    queryData: object | null
}

function UserList(): JSX.Element {
    const {filterData, setFilterData, setTotalResults} = useFilterContext();

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
        page: 0,
        querystring: filterQueryString
      },
    });

    useEffect(() => {
        setTotalResults(data?.influencers?.num_total_results)
    }, [data, filterData, setFilterData, loading])

    if(loading) return <Spinner/>
    return (
        <div>
            <div className="overflow-y-scroll"
                 style={{ height: 'calc(100vh - 275px)' }}>
                {data?.influencers?.influencers.map(item => (
                    <UserItem key={item?.id} item={item}/>
                ))}
            </div>
        </div>
    );
}

export default UserList;