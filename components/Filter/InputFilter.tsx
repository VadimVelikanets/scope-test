import React, {useState} from 'react';
import Image from "next/image";
import {useQuery} from "@apollo/client";
import {FETCH_AUTOCOMPLETE_USERNAME} from "../../queries/fetchAutocomplete";
import {useFilterContext} from "../../context/FilterContext";
function InputFilter(): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();
    const [value, setValue] = useState('');
    const clearField = () => {
        setValue('')
    }

    const {data} = useQuery(FETCH_AUTOCOMPLETE_USERNAME, {
        variables: {
            querystring: value
        }
    })

    const onSelectValue = (item: string) => {
        setValue('')
        setFilterData({...filterData, username: item?.ig_username})
    }

    return (
        <>
            <div className="relative mb-4">
                <span className="absolute top-[50%] left-2 translate-y-[-50%] h-[20px]">
                    <Image src="/assets/icons/search.svg"
                           loader={() => "/assets/icons/search.svg"}
                           width="20"
                           height="20"
                    />
                </span>
                <input type="text"
                       placeholder="Search"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       className="w-full py-2 px-8 rounded-md border-solid border-zinc-300 border-2 outline-none"
                />
                {value.length > 0 && (
                    <span className="absolute top-[50%] right-3 translate-y-[-50%] h-[20px] cursor-pointer"
                        onClick={clearField}
                    >
                        <Image src="/assets/icons/close-button.svg"
                               loader={() => "/assets/icons/close-button.svg"}
                               width="20"
                               height="20"
                        />
                    </span>
                )}
                {(value.length > 0 && data?.autocomplete?.influencers.length > 0) && (
                    <div className="absolute top-19 left-0 z-10 bg-white py-2 shadow-lg rounded-md w-full h-[260px] overflow-y-auto border-gray-300 border-solid border">
                        {data?.autocomplete?.influencers && data?.autocomplete?.influencers.map(item => (
                            <div className="cursor-pointer  py-2 px-4 hover:bg-slate-50 flex items-center"
                                 key={item.ig_username}
                                 onClick={() => onSelectValue(item)}
                            >
                                <Image src={item?.profile_pic_url}
                                       width="40"
                                       height="40"
                                       loader={() => item?.profile_pic_url}
                                       className="rounded-full object-cover"
                                />
                                <div className="ml-3">
                                    <div className="text-sm">{item.ig_username}</div>
                                    <div className="text-gray-600">{item.full_name}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </>
    );
}

export default InputFilter;