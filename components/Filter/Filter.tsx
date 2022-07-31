import React from 'react';
import InputFilter from "./InputFilter";
import InfluencerMenu from "./InfluencerMenu";
import SaveFilters from "./SaveFilters";
import DropdownFilter from "./DropdownFilter";

function Filter(): JSX.Element {
    return (
        <div className="block bg-white pt-5 pb-8 border border-transparent relative">
            <InputFilter />
            <DropdownFilter name="Influencer">
                <InfluencerMenu/>
            </DropdownFilter>

            <SaveFilters/>
        </div>
    );
}

export default Filter;