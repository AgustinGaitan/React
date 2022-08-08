import { configureStore } from "@reduxjs/toolkit";
import { calendarSlice } from "./calendar/calendarSlice";
import { uiSlice } from "./ui/uiSilce";



export const store = configureStore({
    //estos son los reducers que despues se ven en la extensión de navegador redux
    reducer:{
        calendar: calendarSlice.reducer,
        ui: uiSlice.reducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false //solucionar el error de las fechas
    })

})