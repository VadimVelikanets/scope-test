import React, {useState} from 'react'
import  {useFilterContext} from "../../context/FilterContext";
import MinMaxField from "./MinMaxField";

function InfluencerMenu(): JSX.Element {
    const [minFollowers, setMinFollowers] = useState(0);
    const [maxFollowers, setMaxFollowers] = useState(5000000);
    const [minStories, setMinStories] = useState(0);
    const [maxStories, setMaxStories] = useState(500);
    const [minEngagement, setMinEngagement] = useState(0);
    const [maxEngagement, setMaxEngagement] = useState(50);
    const {filterData, setFilterData} = useFilterContext();

    const onChangeMinFollowers = (value: number) => {
        setMinFollowers(value)
        setFilterData({...filterData, followers: value +'-' + maxFollowers})
    }

    const onChangeMaxFollowers = (value: number) => {
        setMaxFollowers(value)
        setFilterData({...filterData, followers: minFollowers +'-' + value})
    }

    const onChangeMinStories = (value: number) => {
        setMinStories(value)
        setFilterData({...filterData, stories: value +'-' + maxStories})
    }

    const onChangeMaxStories = (value: number) => {
        setMaxStories(value)
        setFilterData({...filterData, stories: minStories +'-' + value})
    }

    const onChangeMinEngagement = (value: number) => {
        setMinEngagement(value)
        setFilterData({...filterData, engagement: value +'%-' + maxEngagement + '%'})
    }

    const onChangeMaxEngagement = (value: number) => {
        setMaxEngagement(value)
        setFilterData({...filterData, engagement: minEngagement +'%-' + value + '%'})
    }

    return (
        <div>
            <input type="radio" id="female"
                   name="gender" value="female"
                   checked={filterData?.gender === "female"}
                   onChange={() => setFilterData({
                    ...filterData,
                    gender: "female"
                    })}
            />
            <label htmlFor="female">Female</label>

            <input type="radio" id="male"
                   name="gender" value="male"
                   checked={filterData?.gender === "male"}
                   onChange={() => setFilterData({
                       ...filterData,
                       gender: "male"
                   })}
            />
            <label htmlFor="male">Male</label>
            <MinMaxField
                title="Followers"
                minValue={minFollowers}
                maxValue={maxFollowers}
                onChangeMinValue={onChangeMinFollowers}
                onChangeMaxValue={onChangeMaxFollowers}
                min={0}
                max={5000000}
                step={10000}
            />
            <MinMaxField
                title="Stories/day"
                minValue={minStories}
                maxValue={maxStories}
                onChangeMinValue={onChangeMinStories}
                onChangeMaxValue={onChangeMaxStories}
                min={0}
                max={500}
                step={1}
                isStepDropDown
            />
            <MinMaxField
                title="Engagement"
                minValue={minEngagement}
                maxValue={maxEngagement}
                onChangeMinValue={onChangeMinEngagement}
                onChangeMaxValue={onChangeMaxEngagement}
                min={0}
                max={50}
                step={1}
                isStepDropDown
            />
        </div>
    );
}

export default InfluencerMenu;