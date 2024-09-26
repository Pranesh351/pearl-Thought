'use client';

import { createContext, useReducer } from 'react';

export const CalendarContext = createContext();

const calendarReducer = (state, action) => {
  //if(action=='ADD_EVENT')console.log(action.payload);
  switch (action.type) {
    case 'ADD_EVENT':
      return [...state, action.payload];
    case 'UPDATE_EVENT':
      return state.map(event => event.Id === action.payload.Id ? action.payload : event);
    case 'REMOVE_EVENT':
      return state.filter(event => event.Id !== action.payload.Id);
    default:
      return state;
  }
};

const CalendarContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(calendarReducer, []);

  return (
    <CalendarContext.Provider value={{ state, dispatch }}>
      {children}
    </CalendarContext.Provider>
  );
};

export default CalendarContextProvider;