import { useEffect, useState } from 'react';
import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';


import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../';
import { localizer, getMessagesES } from '../../helpers'; //Muchas menos importanciones importando todo desde el helper calendarLocalizer
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';






export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week') //Si recargo, obtiene la ultima vista, sino va a semana

  const {user} = useAuthStore();

  const {openDateModal} = useUiStore();
  const {events, setActiveEvent, startLoadingEvents} = useCalendarStore();

  const eventStyleGetter= (event, start, end, isSelected) =>{

    const isMyEvent = (user.uid === event.user._id) || (user.uid === event.user.uid); //Si es un evento del usuario actual

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity:0.8,
      color: 'white'
    }
    return {
      style
    }
  }

  const onDoubleClick = (event) =>{ //Doble click
    // console.log({doubleClick: event});
    openDateModal();
  }
  const onSelect = (event) =>{ //Un solo click

    setActiveEvent(event);
  }

  const onViewChanged = (event) =>{

    localStorage.setItem('lastView', event);
    setLastView(event);
  }

  useEffect(() => { //Traigo los eventos una vez
    startLoadingEvents();

  }, [])
  

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
      <CalendarModal/>

      <FabAddNew/>
      <FabDelete/>
    </>
  )
}
