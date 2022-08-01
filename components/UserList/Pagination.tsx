import React, {useLayoutEffect, useMemo, useState} from 'react';
import classNames from "classnames";
import Image from "next/image";
type PaginationProps = {
    currentPage: null,
    onChangeCurrentPage: () => void,
    totalResults: number
}


function Pagination({currentPage, onChangeCurrentPage, totalResults}: PaginationProps): JSX.Element {

    const onPageHandler = (item: number) => {
        onChangeCurrentPage(item)
    }

    const memoPages = useMemo(()=> {
        const pagesCount = Math.ceil(totalResults / 25);
        const pagesArr = []
        const limitPages = pagesCount <= 40 ? pagesCount : 39
        if(currentPage === 0) {
            pagesArr.push(currentPage, currentPage + 1, currentPage + 2, limitPages)
        } else if (currentPage === limitPages) {
            pagesArr.push(0, limitPages - 3, limitPages - 2, limitPages)
        } else if (currentPage === limitPages -1 ) {
            pagesArr.push(0, currentPage - 1, currentPage, currentPage + 1)
        } else if (currentPage === limitPages -2 ) {
            pagesArr.push(0, currentPage - 1, currentPage, currentPage + 1, currentPage + 2)
        }
         else if (currentPage > 1) {
            pagesArr.push(0, currentPage - 1, currentPage, currentPage + 1, currentPage + 2, limitPages )
        } else {
            pagesArr.push( currentPage - 1, currentPage, currentPage + 1, currentPage + 2, limitPages )
        }
        return pagesArr

    }, [totalResults, currentPage, onPageHandler])

    return (
            <div>
                {totalResults > 25 && (
                    <div className="my-4 flex justify-center">
                        <button className={classNames("relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50 rounded-l-md",
                            { ["pointer-events-none opacity-60"] : currentPage === 0 })}
                                onClick={() => onPageHandler(currentPage - 1)}
                        >
                            <span className="rotate-180 h-[18px]">
                               <Image
                                   loader={() => "/assets/icons/arrow-right-64.png"}
                                   src="/assets/icons/arrow-right-64.png"
                                   width="18"
                                   height="18px"/>
                            </span>

                        </button>
                        {memoPages.length && memoPages.map(item => (
                            <button key={item}
                                    onClick={() => onPageHandler(item)}
                                    className={classNames("relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50",
                                        { ["bg-slate-200"] : item === currentPage })}>
                                {item + 1}
                            </button>
                        ))}
                        <button className={classNames("relative inline-flex items-center px-4 py-2 border text-sm font-medium bg-white border-gray-300 text-gray-500 hover:bg-gray-50 rounded-r-md",
                            { ["pointer-events-none opacity-60"] : currentPage === totalResults })}
                                onClick={() => onPageHandler(currentPage + 1)}
                        >
                            <Image
                                loader={() => "/assets/icons/arrow-right-64.png"}
                                src="/assets/icons/arrow-right-64.png"
                                width="18"
                                height="18px"/>
                        </button>
                    </div>
                )}
            </div>
    );
}

export default Pagination;