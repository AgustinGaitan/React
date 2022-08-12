const moment = require('moment');

const isDate = (value) => {

    if( !value ) return false; //Si regresa false el campo es incorrecto

    const fecha = moment(value);

    if(fecha.isValid()){
        return true;
    }else{
        return false;
    }
}


module.exports = {
    isDate
}