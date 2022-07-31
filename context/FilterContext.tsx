import React, {type ReactNode, useContext, useMemo, useState} from 'react';

// type FilterContextProps = null | object

type FilterProviderProps = {
    children: ReactNode
}

type filterContextProps = {
    filterData: null | object,
    setFilterData: React.Dispatch<React.SetStateAction<null>>
}
const filterContextDefaultValues: filterContextProps = {
    filterData: null,
    setFilterData: () => {}
}
const FilterContext = React.createContext<filterContextProps>(filterContextDefaultValues);

export function useFilterContext(): filterContextProps {
    return useContext(FilterContext)
}

function FilterProvider({children}: FilterProviderProps): JSX.Element {
    const [filterData, setFilterData] = useState(null)
    const memoFilterContextValue = useMemo(()=>{
        return {
            filterData, setFilterData
        }
    },[filterData, setFilterData])
    return (
        <FilterContext.Provider value={memoFilterContextValue}>
            {children}
        </FilterContext.Provider>
    );
}

export default FilterProvider