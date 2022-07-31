import React, {useState} from 'react'
import  {useFilterContext} from "../../context/FilterContext";

function InfluencerMenu(): JSX.Element {
    const [minFollowers, setMinFollowers] = useState(0);
    const [maxFollowers, setMaxFollowers] = useState(5000000);
    const [minStories, setMinStories] = useState(0);
    const [maxStories, setMaxStories] = useState(500);
    const {filterData, setFilterData} = useFilterContext();

    const onChangeMinFollowers = (e: React.ChangeEvent) => {
        setMinFollowers(e.target.value)
        setFilterData({...filterData, followers: e.target.value +'-' + maxFollowers})
    }

    const onChangeMaxFollowers = (e: React.ChangeEvent) => {
        setMaxFollowers(e.target.value)
        setFilterData({...filterData, followers: minFollowers +'-' + e.target.value})
    }

    return (
        <div>
            <input type="radio" id="female"
                   name="gender" value="female"
                   onChange={() => setFilterData({
                    ...filterData,
                    gender: "female"
                    })}
            />
            <label htmlFor="female">Female</label>

            <input type="radio" id="male"
                   name="gender" value="male"
                   onChange={() => setFilterData({
                       ...filterData,
                       gender: "male"
                   })}
            />
            <label htmlFor="male">Male</label>
            <div>
                <b>Followers</b>
                <input step="10000"
                       type="number"
                       min="0"
                       max="5000000"
                       className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                       autoComplete="off"
                       spellCheck="false"
                       value={minFollowers}
                       onChange={onChangeMinFollowers}
                />
                <input
                    step="10000"
                    type="number"
                    min="0"
                    max="5000000"
                    className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    autoComplete="off"
                    spellCheck="false"
                    value={maxFollowers}
                    onChange={onChangeMaxFollowers}
                />
            </div>
            <div>
                <b>Stories/day</b>
                <input step="1"
                       type="number"
                       min="0"
                       max="500"
                       className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                       autoComplete="off"
                       spellCheck="false"
                       value={minStories}
                       onChange={onChangeMinFollowers}
                />
                <input
                    step="1"
                    type="number"
                    min="0"
                    max="500"
                    className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                    autoComplete="off"
                    spellCheck="false"
                    value={maxStories}
                    onChange={onChangeMaxFollowers}
                />
            </div>
        </div>
    );
}

export default InfluencerMenu;