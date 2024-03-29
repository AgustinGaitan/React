//fab = floating action button

import { useCalendarStore, useUiStore } from "../../hooks"


export const FabDelete = () => {

    const {startDeletingEvent, hasEventSelected} = useCalendarStore();

    const handleClickDelete = () =>{
        startDeletingEvent();
    }

  return (
    <button
        className='btn btn-danger fab-danger'
        onClick={handleClickDelete}
        style={{
          display: hasEventSelected ? '' : 'none' //Si no tengo ninguna nota activa (clickeada una vez) no aparece el botón
        }}
    >

        <i className='fas fa-trash-alt'></i>

    </button>
  )
}
