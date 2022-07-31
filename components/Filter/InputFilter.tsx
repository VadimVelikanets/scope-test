import React, {useState} from 'react';
import Image from "next/image";
function InputFilter(): JSX.Element {
    const [value, setValue] = useState('')
    const clearField = () => {
        setValue('')
    }

    return (
        <>
            <div className="relative mb-4">
                <span className="absolute top-[50%] left-2 translate-y-[-50%] h-[20px]">
                    <Image src="/assets/icons/search.svg"
                           loader={() => "/assets/icons/search.svg"}
                           width="20"
                           height="20"
                    />
                </span>
                <input type="text"
                       placeholder="Search"
                       value={value}
                       onChange={(e) => setValue(e.target.value)}
                       className="w-full py-2 px-8 rounded-md border-solid border-zinc-300 border-2 outline-none"
                />
                {value.length > 0 && (
                    <span className="absolute top-[50%] right-3 translate-y-[-50%] h-[20px] cursor-pointer"
                        onClick={clearField}
                    >
                        <Image src="/assets/icons/close-button.svg"
                               loader={() => "/assets/icons/close-button.svg"}
                               width="20"
                               height="20"
                        />
                    </span>
                )}
            </div>
        </>
    );
}

export default InputFilter;