import React from 'react';
import InputFilter from "./InputFilter";
import InfluencerMenu from "./InfluencerMenu";
import SaveFilters from "./SaveFilters";
import DropdownFilter from "./DropdownFilter";
import SaveWithMenu from "./SaveWithMenu";
import LocationMenu from "./LocationMenu";
import ExcludeMenu from "./ExcludeMenu";

function Filter(): JSX.Element {
    return (
        <div className="block bg-white pt-5 pb-8 border border-transparent relative">
            <InputFilter />
            <div className="flex items-center">
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
        </div>
    );
}

export default Filter;