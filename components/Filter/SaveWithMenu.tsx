import React, {useState} from 'react'
import  {useFilterContext} from "../../context/FilterContext";
import Checkbox from "./Checkbox";
import InputWithAutoComplete from "./InputWithAutoComplete";
import Input from "./Input";
import {FETCH_AUTOCOMPLETE_HASHTAG, FETCH_AUTOCOMPLETE_MENTION} from "../../queries/fetchAutocomplete";
import InputCalendar from "./InputCalendar";
import InputCalendarTracked from "./InputCalendarTracked";

function SaveWithMenu(): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();

    return (
        <div>
            <Checkbox  checked={filterData?.email === "yes"}
                       param="email"
                       value="yes"
                       label="Email"

            />
            <Checkbox  checked={filterData?.demographics === "yes"}
                       param="demographics"
                       value="yes"
                       label="Demographics"
            />
            <Checkbox  checked={filterData?.tiktok === "yes"}
                       param="tiktok"
                       value="yes"
                       label="Tiktok"
            />
            <Checkbox  checked={filterData?.contacted === "yes"}
                       param="contacted"
                       value="yes"
                       label="Contacted"
            />
            <Checkbox  checked={filterData?.intags === "yes"}
                       param="intags"
                       value="yes"
                       label="Intags"
            />
            <div className="flex justify-between">
                <div className="w-[calc(50%-5px)]">
                    <InputWithAutoComplete title="Mention"
                                           path="autocomplete_mention"
                                           name="mentions"
                                           query={FETCH_AUTOCOMPLETE_MENTION}/>
                </div>

                <div className="w-[calc(50%-5px)]">
                    <InputWithAutoComplete title="Hashtag"
                                           path="autocomplete_hashtag"
                                           name="hashtags"
                                           query={FETCH_AUTOCOMPLETE_HASHTAG}/>
                </div>
            </div>
            <Input title="Scope tag or folder"/>
            <InputCalendarTracked/>
            <InputCalendar />
        </div>
    );
}

export default SaveWithMenu;