import React, { useEffect, useState } from 'react'
//Lo que retorna useEffect es lo que se va a limpiar despues de que se destruya el componente
export const Message = () => {

    const [coords, setCoords] = useState({x:0, y:0});
    const {x, y} = coords;
    
    useEffect(() => {
        


        const mouseMove = (e) =>{
            const coordenadas = {
                x: e.x,
                y: e.y
            };

            setCoords( coordenadas );
            //console.log(coords);
        }

        window.addEventListener('mousemove',mouseMove);
    
      return () => {
        console.log('Componente desmontado');
        window.removeEventListener('mousemove', mouseMove);
      }
    }, [])
    

  return (
    <div>
        <h3>Mensaje</h3>
        <p>
            x:{x}  y:{y}
        </p>
    </div>
  )
}
