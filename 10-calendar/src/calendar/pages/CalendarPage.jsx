import { useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { addHours } from 'date-fns';
import { Navbar, CalendarEvent } from '..';
import { localizer, getMessagesES } from '../../helpers'; //Muchas menos importanciones importando todo desde el helper calendarLocalizer


const events = [{
  title:'Cumpleaños',
  notes:'Nota de ejemplo',
  start: new Date(),
  end: addHours( new Date(), 2),
  bgColor: '#fafafa',
  user:{
    _id:'123',
    name:'Agustin'
  }
}]



export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week') //Si recargo, obtiene la ultima vista, sino va a semana
  
  const eventStyleGetter= (event, start, end, isSelected) =>{

      const style = {
        backgroundColor: '#347CF7',
        borderRadius: '0px',
        opacity:0.8,
        color: 'white'
      }
      return {
        style
      }
  }

  const onDoubleClick = (event) =>{ //Doble click
    console.log({doubleClick: event});
  }
  const onSelect = (event) =>{ //Un solo click

    console.log({click: event});
  }

  const onViewChanged = (event) =>{

    localStorage.setItem('lastView', event);

  }

  return (
    <>
      <Navbar/>
      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={lastView} //Vista por defecto
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesES()}
        eventPropGetter={eventStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick} //cuando hagan doble click
        onSelectEvent={onSelect} //cuando hagan click
        onView={onViewChanged} //cuando cambien de vista (Mes,Semana,Día,Agenda)
      />

    </>
  )
}
