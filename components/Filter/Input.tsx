import React, {useState} from 'react';
import {useFilterContext} from "../../context/FilterContext";
type InputProps = {
    title: string,
    exclude?: boolean
}
function Input({title, exclude}: InputProps): JSX.Element {
    const [value, setValue] = useState('');
    const {filterData, setFilterData} = useFilterContext();
    const onChangeValue = (e: React.ChangeEvent) => {
        setValue(e.target.value)
    }

    const onHandleSubmit = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter') {
            setFilterData({...filterData, tags: (exclude ? '-' : '') + value})
        }
    }

    return (
        <div className="relative mb-4">
            <span className="text-gray-600">{title}</span>
            <input type="text" className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                   value={value}
                   onKeyDown={onHandleSubmit}
                   onChange={onChangeValue}
            />
        </div>
    );
}

export default Input;