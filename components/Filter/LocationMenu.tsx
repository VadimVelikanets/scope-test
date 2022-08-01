import React, {useState} from 'react';
import {getCountry, getLanguage} from "../../helpers";
import {useFilterContext} from "../../context/FilterContext";

type LocationMenuProps = {

}
function LocationMenu({}: LocationMenuProps): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();
    const [country, setCountry] = useState('');
    const [language, setLanguage] = useState('');
    const [countryList, setCountryList] = useState([]);
    const [languageList, setLanguageList] = useState([]);

    const onChangeCountry = (e: React.ChangeEvent) => {
        setCountry(e.target.value)
        if(country.length > 1) {
            const list = getCountry(country)
            setCountryList(list)
        } else {
            setCountryList([])
        }
    }

    const onChangeLanguage = (e: React.ChangeEvent) => {
        setLanguage(e.target.value)
        if(language.length > 1) {
            const list = getLanguage(language)
            setLanguageList(list)
        } else {
            setLanguageList([])
        }
    }

    const onSelectCountry = (item: string) => {
        setCountry(item)
        setCountryList([])
        setFilterData({...filterData, nationality: item})
    }

    const onSelectLanguage = (item: string) => {
        setLanguage(item)
        setLanguageList([])
        setFilterData({...filterData, languages: item})
    }

    return (
        <div>
            <div className="relative mb-4">
                <span className="text-gray-600">Nationality</span>
                <input type="text" className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                       value={country}
                       onChange={onChangeCountry}
                />
                {countryList.length > 0 && (
                    <div className="absolute top-18 left-0 z-10 bg-white py-2 shadow-lg rounded-md w-full h-[260px] overflow-y-auto border-gray-300 border-solid border">
                        {countryList.length > 0 && countryList.map(item => (
                            <div className="cursor-pointer  py-2 px-4 hover:bg-slate-50"
                                 key={item?.code}
                                 onClick={() => onSelectCountry(item.name)}
                            >
                                {item?.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <div className="relative mb-4">
                <span className="text-gray-600">Language</span>
                <input type="text" className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                       value={language}
                       onChange={onChangeLanguage}
                />
                {languageList.length > 0 && (
                    <div className="absolute top-18 left-0 z-10 bg-white py-2 shadow-lg rounded-md w-full h-[260px] overflow-y-auto border-gray-300 border-solid border">
                        {languageList.length > 0 && languageList.map(item => (
                            <div className="cursor-pointer  py-2 px-4 hover:bg-slate-50"
                                 key={item?.code}
                                 onClick={() => onSelectLanguage(item.name)}
                            >
                                {item?.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default LocationMenu;