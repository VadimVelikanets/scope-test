import React, {useMemo} from 'react';
import {useFilterContext} from "../../context/FilterContext";
import Image from "next/image";
function SaveFilters(props) {
    const {filterData, setFilterData} = useFilterContext();

    const savedFilterData = useMemo(() => {
        if(filterData) return Object.keys(filterData).map(key => key + ': ' + filterData[key]);
        return null;
    },[filterData, setFilterData])

    const onDeleteFilterItem = (item: string) => {

        setFilterData(current => {
            const copy = {...current}
            const deletedValue = item.slice(0, item.indexOf(':'))
            delete copy?.[deletedValue]
            return copy;
        });
    }
    return (
        <div className="mt-6 flex items-center flex-wrap">
            {savedFilterData && (
                <span className="mr-2 mb-2">Filters:</span>
            )}
            {savedFilterData && savedFilterData.map(item => (
                <div key={item}
                    className="py-1 px-4 rounded-full bg-gray-200 mr-2 text-sm flex items-center mb-2"
                >
                    <span>{item.replace(': true','')}</span>
                    <span className="h-[16px] ml-2 cursor-pointer"
                        onClick={() => onDeleteFilterItem(item)}
                    >
                        <Image src="/assets/icons/close.svg"
                               loader={() => "/assets/icons/close.svg"}
                               width="16"
                               height="16"
                        />
                    </span>

                </div>
            ))}
        </div>
    );
}

export default SaveFilters;