import React, {type ReactNode, useContext, useMemo, useState} from 'react';

// type FilterContextProps = null | object

type FilterProviderProps = {
    children: ReactNode
}

type filterContextProps = {
    filterData: null | object,
    setFilterData: React.Dispatch<React.SetStateAction<null>>,
    totalResults: number,
    setTotalResults: React.Dispatch<React.SetStateAction<number>>
}
const filterContextDefaultValues: filterContextProps = {
    filterData: null,
    setFilterData: () => {},
    totalResults: 0,
    setTotalResults: () => {}
}
const FilterContext = React.createContext<filterContextProps>(filterContextDefaultValues);

export function useFilterContext(): filterContextProps {
    return useContext(FilterContext)
}

function FilterProvider({children}: FilterProviderProps): JSX.Element {
    const [filterData, setFilterData] = useState(null);
    const [totalResults, setTotalResults] = useState(0);

    const memoFilterContextValue = useMemo(()=>{
        return {
            filterData, setFilterData, totalResults, setTotalResults
        }
    },[filterData, setFilterData, totalResults, setTotalResults])
    return (
        <FilterContext.Provider value={memoFilterContextValue}>
            {children}
        </FilterContext.Provider>
    );
}

export default FilterProvider