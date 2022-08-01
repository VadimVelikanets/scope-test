import React, {useState} from 'react';
import {useQuery} from "@apollo/client";
import {useFilterContext} from "../../context/FilterContext";
type InputWithAutoCompleteProps = {
    title: string,
    query: any,
    name: string,
    path: string,
    exclude?: boolean
}

function InputWithAutoComplete({
    title,
    query,
    name,
    path,
    exclude}: InputWithAutoCompleteProps): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();
    const [value, setValue] = useState('');
    const [isShowDropdown, setShowDropdown] = useState(false)
    const {data, refetch} = useQuery(query, {
        variables: {
            querystring: value
        }
    })

    const onChangeValue = (e: React.ChangeEvent) => {
        setValue(e.target.value)
        if(value.length > 1) {
            setShowDropdown(true)
            refetch()
        }
    }

    const onSelectValue = (item: string) => {
        setValue(item)
        setShowDropdown(false)
        setFilterData({...filterData, [item]: true})
    }

    return (
        <div className="relative mb-4">
            <span className="text-gray-600">{title}</span>
            <input type="text" className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                value={value}
                onChange={onChangeValue}
            />
            {isShowDropdown && (
                <div className="absolute top-18 left-0 z-10 bg-white py-2 shadow-lg rounded-md w-full h-[260px] overflow-y-auto border-gray-300 border-solid border">
                    {data?.[path]?.[name] && data?.[path]?.[name].map(item => (
                        <div className="cursor-pointer  py-2 px-4 hover:bg-slate-50"
                             onClick={() => onSelectValue((exclude ? '-' : '') + item)}
                             key={item}>
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default InputWithAutoComplete;