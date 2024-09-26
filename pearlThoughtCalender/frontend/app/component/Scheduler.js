'use client';

import { ScheduleComponent, Inject, Day, Week, WorkWeek, Month, Agenda } from '@syncfusion/ej2-react-schedule';
import useCalendarContext from '../Hook/useCalendarContext';
import "../../node_modules/@syncfusion/ej2-base/styles/material.css";
import "../../node_modules/@syncfusion/ej2-buttons/styles/material.css";
import "../../node_modules/@syncfusion/ej2-calendars/styles/material.css";
import "../../node_modules/@syncfusion/ej2-dropdowns/styles/material.css";
import "../../node_modules/@syncfusion/ej2-inputs/styles/material.css";
import "../../node_modules/@syncfusion/ej2-navigations/styles/material.css";
import "../../node_modules/@syncfusion/ej2-popups/styles/material.css";
import "../../node_modules/@syncfusion/ej2-react-schedule/styles/material.css";
import { useEffect } from 'react';

const Scheduler = () => {
  const { state, dispatch } = useCalendarContext();

  const onActionComplete = (args) => {
    if (args.requestType === 'eventCreated') {
      //dispatch({ type: 'ADD_EVENT', payload: args.data[0] });
    } else if (args.requestType === 'eventChanged') {
      dispatch({ type: 'UPDATE_EVENT', payload: args.data[0] });
    } else if (args.requestType === 'eventRemoved') {
      dispatch({ type: 'REMOVE_EVENT', payload: args.data[0] });
    }
  };

  useEffect(()=>console.log(state),[state]);

  return (
    <ScheduleComponent
      selectedDate={new Date()}
      eventSettings={{dataSource: state}}
      actionComplete={onActionComplete}
    >
      <Inject services={[Day, Week, WorkWeek, Month, Agenda]} />
    </ScheduleComponent>
  );
};

export default Scheduler;