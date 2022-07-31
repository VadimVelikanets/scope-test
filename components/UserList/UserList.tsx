import React, {useMemo} from 'react';
import UserItem from "./UserItem";
import {useQuery} from "@apollo/client";
import {FETCH_USERS} from "../../queries/fetchUsers";
import Spinner from "../Spinner";
import {useFilterContext} from "../../context/FilterContext";

type UserListProps = {
    queryData: object | null
}

function UserList(): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();

    const filterQueryString = useMemo(() => {
        if(filterData) return Object.keys(filterData).map(key => key + ':' + filterData[key]).join(' ');
        return ""
    },[filterData, setFilterData])

    const { data, loading, error } = useQuery(FETCH_USERS, {
      variables: {
        fastSearch: false,
        page: 0,
        querystring: filterQueryString
      },
    });

    if(loading) return <Spinner/>
    return (
        <div>
            <div>
                {data?.influencers?.influencers.map(item => (
                    <UserItem key={item?.id} item={item}/>
                ))}
            </div>
        </div>
    );
}

export default UserList;