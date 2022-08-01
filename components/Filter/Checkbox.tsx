import React from 'react';
import {useFilterContext} from "../../context/FilterContext";
import classNames from "classnames";

type ChecboxProps  = {
    checked?: boolean,
    param: string,
    label: string,
    className?: string,
    value?: string
}

function Checkbox({checked, param, label, className, value}: ChecboxProps): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();

    const onChangeCheckbox = (param: string, value: string) => {
        if(filterData?.[param]) {
            setFilterData(current => {
                const copy = {...current}
                delete copy?.[param]
                return copy;
            })
        } else {
            setFilterData({
                ...filterData,
                [param]: value
            })
        }
    }

    return (
        <div className={classNames("flex items-center mb-2", className)} >
            <label className="switch">
                <input type="checkbox" checked={checked} onChange={() => onChangeCheckbox(param, value)}/>
                <span></span>
            </label>
            <span className="ml-2 text-gray-600">{label}</span>
        </div>

    );
}

export default Checkbox;