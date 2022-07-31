import React, {type ReactNode, useState, useRef} from 'react';
import {useOutsideClick} from "../../hooks/useOutsideClick";
import Image from "next/image";
import classNames from "classnames";
type DropdownFilterProps = {
    name: string,
    children: ReactNode
}

function DropdownFilter({children, name}: DropdownFilterProps) {
    const [isShowDropdown, setShowDropdown] = useState(false);


    const handleClickOutside = () => {
        setShowDropdown(false)
    }
    const dropdownRef = useRef(null)
    useOutsideClick(dropdownRef, handleClickOutside)

    return (
        <div className="relative mr-2" ref={dropdownRef}>
            <div className="text-sm text-gray-600 flex items-center cursor-pointer"
                 onClick={() => setShowDropdown(!isShowDropdown)}
            >
                <span className="mr-2">{name}</span>
                <Image src="/assets/icons/down-arrow.svg"
                       loader={() => "/assets/icons/down-arrow.svg"}
                       width="14"
                       height="14"
                />
            </div>
            <div className={classNames("absolute top-8 left-0 z-10 bg-white p-4 shadow-lg rounded-md w-full", { ["hidden"] : !isShowDropdown })}
            >{children}</div>
        </div>
    );
}

export default DropdownFilter;