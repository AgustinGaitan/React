import { render,screen } from "@testing-library/react";
import PrimeraApp from "../PrimeraApp";
// import {shallow} from '@wojtekmaj/enzyme-adapter-react-17';

describe('Pruebas en <PrimeraApp />', () => {
    
    // test('Debe mostrar el mensaje Hola mundo', ()=>{

    //     const saludo = 'Hola mundo';


    //     // const wrapper = render( <PrimeraApp saludo={saludo} /> )
    //     const {getByText} = render( <PrimeraApp saludo={saludo} /> )

    //     // wrapper.getByText()

    //     expect( getByText(saludo) ).toBeInTheDocument();

    // });

    test('Debe mostrar el <PrimeraApp /> correctamente', () => {
        
        const saludo = 'Hola mundo';
        const wrapper = render(<PrimeraApp saludo={saludo}/>);

        expect(wrapper).toMatchSnapshot();

    });

    // VER DESPUES PARA HACERLO CON LA LIBRERIA DE REACT TEST 
    // test('Debe mostrar el subtitulo enviado', () => {

    //     const saludo = 'Hola mundo';
    //     const subtitulo = 'Soy un subtitulo';
    //     const wrapper = render(
    //         <PrimeraApp 
    //             saludo={saludo}
    //             subtitulo={subtitulo}
    //         />
        
    //     );

    //     expect(screen.findByText(subtitulo)).toBe(subtitulo);
            
    // });
}); 