import React from 'react';
import {useFilterContext} from "../../context/FilterContext";

function FilterResult(): JSX.Element {
    const {totalResults} = useFilterContext();
    return (
        <div>
            {totalResults !== undefined ? (
                <span className="text-sm text-gray-600">{totalResults} results</span>
            ) : (
                <span className="text-sm text-gray-600">Loading...</span>
            )}

        </div>
    );
}

export default FilterResult;