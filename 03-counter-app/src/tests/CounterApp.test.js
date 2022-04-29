import CounterApp from "../CounterApp";
import {render} from '@testing-library/react';


describe('Pruebas en el <CounterApp />', () => {

    test(' Debe mostrar el <CounterApp /> correctamente', ()=>{

        const wrapper = render(<CounterApp />);
        expect(wrapper).toMatchSnapshot();
    });
});