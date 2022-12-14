import React from 'react';
import InputFilter from "./InputFilter";
import InfluencerMenu from "./InfluencerMenu";
import SaveFilters from "./SaveFilters";
import DropdownFilter from "./DropdownFilter";
import SaveWithMenu from "./SaveWithMenu";
import LocationMenu from "./LocationMenu";
import ExcludeMenu from "./ExcludeMenu";
import FilterResult from "./FilterResult";

function Filter(): JSX.Element {
    return (
        <div className="block bg-white pt-5 pb-8 border border-transparent relative">
            <InputFilter />
            <div className="flex-col items-start md:flex-row flex md:items-center">
                <DropdownFilter name="Influencer">
                    <InfluencerMenu/>
                </DropdownFilter>
                <DropdownFilter name="Location">
                    <LocationMenu/>
                </DropdownFilter>
                <DropdownFilter name="Seen with">
                    <SaveWithMenu/>
                </DropdownFilter>
                <DropdownFilter name="Exclude">
                    <ExcludeMenu/>
                </DropdownFilter>
            </div>
            <SaveFilters/>
            <FilterResult/>
        </div>
    );
}

export default Filter;