import React, {useEffect, useMemo, useState, useRef} from 'react';
import Image from "next/image";
import {useOutsideClick} from "../../hooks/useOutsideClick";

type MinMaxFieldProps = {
    title: string,
    minValue: number,
    maxValue: number,
    onChangeMinValue: (e: React.ChangeEvent) => void,
    onChangeMaxValue: (e: React.ChangeEvent) => void,
    min: number,
    max: number,
    isStepDropDown?: boolean,
    step: number
}

function MinMaxField({
     title,
     minValue,
     maxValue,
     onChangeMinValue,
     onChangeMaxValue,
     min,
     max,
     isStepDropDown,
     step}: MinMaxFieldProps): JSX.Element {

    const [minInputValue, setMinInputValue] = useState(minValue);
    const [maxInputValue, setMaxInputValue] = useState(maxValue);
    const [isShowMinDropdown, setShowMinDropdown] = useState(false);
    const [isShowMaxDropdown, setShowMaxDropdown] = useState(false);
    const dropdownMinRef = useRef(null)
    const dropdownMaxRef = useRef(null)

    const stepsValue = useMemo(() => {
        if(isStepDropDown) {
            const stepArr = []
            for(let i=0; i <= max; i = i + step){
                stepArr.push(i)
            }
            return stepArr
        }
    }, [min, max, step])

    const onSelectMinValue = (value: number) => {
        setMinInputValue(value)
        onChangeMinValue(value)
        setShowMinDropdown(false)
    }

    const onSelectMaxValue = (value: number) => {
        setMaxInputValue(value)
        onChangeMaxValue(value)
        setShowMaxDropdown(false)
    }

    const onChangeMinInputValue = (value: number) => {
        onChangeMinValue(value)
        setMinInputValue(value)
    }

    const onChangeMaxInputValue = (value: number) => {
        onChangeMaxValue(value)
        setMaxInputValue(value)
    }

    const handleClickOutsideMin = () => {
        setShowMinDropdown(false)
    }
    const handleClickOutsideMax = () => {
        setShowMaxDropdown(false)
    }

    useOutsideClick(dropdownMinRef, handleClickOutsideMin)
    useOutsideClick(dropdownMaxRef, handleClickOutsideMax)

    return (
        <div className="mt-4">
            <div className="text-gray-600">{title}</div>
            <div className="flex justify-between">
                <div className="w-[calc(50%-5px)] relative" ref={dropdownMinRef}>
                    <input step={step}
                           type="number"
                           min={min}
                           max={max}
                           className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                           autoComplete="off"
                           spellCheck="false"
                           value={minInputValue}
                           onChange={e => onChangeMinInputValue(e.target.value)}
                    />
                    {(isStepDropDown && isShowMinDropdown) && (
                        <div className="absolute top-12 left-0 z-10 bg-white py-2 shadow-lg rounded-md w-full h-[260px] overflow-y-auto border-gray-300 border-solid border">
                            {stepsValue.map(item => (
                                <div key={item} className="cursor-pointer  py-2 px-4 hover:bg-slate-50" onClick={() => onSelectMinValue(item)}>{item}</div>
                            ))}
                        </div>
                    )}
                    {isStepDropDown && (
                        <span className="absolute right-2 top-3 cursor-pointer" onClick={() => setShowMinDropdown(true)}>
                                <Image src="/assets/icons/down-arrow.svg"
                                       loader={() => "/assets/icons/down-arrow.svg"}
                                       width="14"
                                       height="14"
                                />
                        </span>
                    )}
                </div>
                <div className="w-[calc(50%-5px)] relative" ref={dropdownMaxRef}>
                    <input
                        step={step}
                        type="number"
                        min={min}
                        max={max}
                        className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                        autoComplete="off"
                        spellCheck="false"
                        value={maxInputValue}
                        onChange={e => onChangeMaxInputValue(e.target.value)}
                    />
                    {(isStepDropDown && isShowMaxDropdown) && (
                        <div className="absolute top-12 left-0 z-10 bg-white py-2 shadow-lg rounded-md w-full h-[260px] overflow-y-auto border-gray-300 border-solid border">
                            {stepsValue.map(item => (
                                <div key={item} className="cursor-pointer  py-2 px-4 hover:bg-slate-50" onClick={() => onSelectMaxValue(item)}>{item}</div>
                            ))}
                        </div>
                    )}
                    {isStepDropDown && (
                        <span className="absolute right-2 top-3 cursor-pointer" onClick={() => setShowMaxDropdown(true)}>
                                <Image src="/assets/icons/down-arrow.svg"
                                       loader={() => "/assets/icons/down-arrow.svg"}
                                       width="14"
                                       height="14"
                                />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default MinMaxField;