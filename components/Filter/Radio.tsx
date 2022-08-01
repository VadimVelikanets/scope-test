import React from 'react';
import {useFilterContext} from "../../context/FilterContext";

type RadioProps  = {
    checked?: boolean,
    value: string,
    label: string,
    name: string,
    onChange: ()=> void
}
function Radio({checked, value, label, name, onChange}: RadioProps): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();

    const onChangeCheckbox = (value: string) => {
        if(filterData?.[value]) {
            setFilterData(current => {
                const copy = {...current}
                delete copy?.[value]
                return copy;
            })
        } else {
            setFilterData({
                ...filterData,
                [value]: "yes"
            })
        }
    }

    return (
        <div className="flex items-center mb-2">
            <label className="switch">
                <input type="radio"
                       checked={checked}
                       name={name}
                       onChange={onChange}/>
                <span></span>
            </label>
            <span className="ml-2 text-gray-600">{label}</span>
        </div>

    );
}

export default Radio;