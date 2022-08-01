import React, {useState} from 'react';
import Checkbox from "./Checkbox";
import {useFilterContext} from "../../context/FilterContext";
import InputWithAutoComplete from "./InputWithAutoComplete";
import {FETCH_AUTOCOMPLETE_HASHTAG, FETCH_AUTOCOMPLETE_MENTION} from "../../queries/fetchAutocomplete";
import Input from "./Input";
import {getCountry} from "../../helpers";

function ExcludeMenu(): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();
    const [country, setCountry] = useState('');
    const [countryList, setCountryList] = useState([]);

    const onChangeCountry = (e: React.ChangeEvent) => {
        setCountry(e.target.value)
        if(country.length > 1) {
            const list = getCountry(country)
            setCountryList(list)
        } else {
            setCountryList([])
        }
    }

    const onSelectCountry = (item: string) => {
        setCountry(item)
        setCountryList([])
        setFilterData({...filterData, nationality: '-' + item})
    }

    return (
        <div>
            <Checkbox  checked={filterData?.new === "yes"}
                       param="new"
                       value="yes"
                       label="Seen by Company"

            />
            <Checkbox  checked={filterData?.demographics === "no"}
                       param="demographics"
                       value="no"
                       label="Demographics"
            />
            <Checkbox  checked={filterData?.tiktok === "no"}
                       param="tiktok"
                       value="no"
                       label="Tiktok"
            />
            <Checkbox  checked={filterData?.contacted === "no"}
                       param="contacted"
                       value="no"
                       label="Contacted"
            />
            <Checkbox  checked={filterData?.new === "myself"}
                         param="new"
                         value="myself"
                         label="Seen by me"
            />
            <Checkbox  checked={filterData?.intags === "no"}
                       param="intags"
                       value="no"
                       label="Scope tags"
            />
            <div className="flex justify-between">
                <div className="w-[calc(50%-5px)]">
                    <InputWithAutoComplete title="Mention"
                                           path="autocomplete_mention"
                                           name="mentions"
                                           query={FETCH_AUTOCOMPLETE_MENTION}
                                           exclude
                    />
                </div>

                <div className="w-[calc(50%-5px)]">
                    <InputWithAutoComplete title="Hashtag"
                                           path="autocomplete_hashtag"
                                           name="hashtags"
                                           query={FETCH_AUTOCOMPLETE_HASHTAG}
                                           exclude
                    />
                </div>
            </div>
            <Input title="Scope tag or folder"
                   exclude
            />

            <div className="relative mb-4">
                <span className="text-gray-600">Nationality</span>
                <input type="text" className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                       value={country}
                       onChange={onChangeCountry}
                />
                {countryList.length > 0 && (
                    <div className="absolute top-18 left-0 z-10 bg-white py-2 shadow-lg rounded-md w-full h-[260px] overflow-y-auto border-gray-300 border-solid border">
                        {countryList.length > 0 && countryList.map(item => (
                            <div className="cursor-pointer  py-2 px-4 hover:bg-slate-50"
                                 key={item?.code}
                                 onClick={() => onSelectCountry(item.name)}
                            >
                                {item?.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default ExcludeMenu;