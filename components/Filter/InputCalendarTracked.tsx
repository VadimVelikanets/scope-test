import React, {useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useFilterContext} from "../../context/FilterContext";
import Checkbox from "./Checkbox";

function InputCalendarTracked(): JSX.Element {
    const {filterData, setFilterData} = useFilterContext();
    const [startDate, setStartDate] = useState(new Date());
    const [finishDate, setFinishDate] = useState(new Date());
    const [startDateFormated, setStartDateFormated] = useState(new Date().toLocaleDateString('fr-CA', { year: '2-digit', month: '2-digit', day: '2-digit' }).split('-').join(''));
    const [finishDateFormated, setFinishDateFormated] = useState(new Date().toLocaleDateString('fr-CA', { year: '2-digit', month: '2-digit', day: '2-digit' }).split('-').join(''));

    const onChangeStart = (date:Date) => {
        const d = new Date(date).toLocaleDateString('fr-CA', { year: '2-digit', month: '2-digit', day: '2-digit' }).split('-').join('')
        setStartDateFormated(d)
        setStartDate(date)
        setFilterData({...filterData, contacted_at: startDateFormated + "-" + finishDateFormated})
    }

    const onChangeFinish = (date:Date) => {
        const d = new Date(date).toLocaleDateString('fr-CA', { year: '2-digit', month: '2-digit', day: '2-digit' }).split('-').join('')
        setFinishDateFormated(d)
        setFinishDate(date)
        setFilterData({...filterData, contacted_at: startDateFormated + "-" + finishDateFormated})
    }

    const onChangeStories = () => {
        if(filterData?.postedstories) {
            setFilterData(current => {
                const copy = {...current}
                delete copy?.postedstories
                return copy;
            })
        } else {
            setFilterData({
                ...filterData,
                postedstories: startDateFormated + "-" + finishDateFormated
            })
        }
    }

    const onChangePosts = () => {
        if(filterData?.postedposts) {
            setFilterData(current => {
                const copy = {...current}
                delete copy?.postedposts
                return copy;
            })
        } else {
            setFilterData({
                ...filterData,
                postedposts: startDateFormated + "-" + finishDateFormated
            })
        }
    }

    return (
        <>
            <span className="text-gray-600">Tracked (post date)</span>
            <div className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <DatePicker
                    selected={startDate}
                    onChange={onChangeStart}
                    dateFormat="yyMMdd"
                    className="outline-none focus:outline-none w-full"
                />
            </div>
            <div className="w-full rounded-md border mt-1 border-gray-300 bg-white text-gray-700 py-2 pl-3 pr-10 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <DatePicker
                    selected={finishDate}
                    onChange={onChangeFinish}
                    dateFormat="yyMMdd"
                    className="outline-none focus:outline-none w-full"
                />
            </div>
            <div className="flex items-center mt-2">
                <Checkbox
                    checked={filterData?.postedstories}
                    param="stories"
                    value={startDateFormated + "-" + finishDateFormated}
                    label="Stories"
                    className="mr-2"
                />
                <Checkbox
                    checked={filterData?.postedposts}
                    param="posts"
                    value={startDateFormated + "-" + finishDateFormated}
                    label="Posts"
                />
            </div>

        </>

    );
}

export default InputCalendarTracked;