'use client';

import { useContext } from "react";
import { CalendarContext } from "../context/CalendarContext";

const useCalendarContext= ()=>{
    const context= useContext(CalendarContext);

    if(!context){
        throw Error("Can't use useCalendarContext hook outside the CalenderContext");
    }

    return context;
}

export default useCalendarContext