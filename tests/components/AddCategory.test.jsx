import { fireEvent, render, screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

const inputValue = {
    target: {
        value: 'Superman'
    }
}

describe('Pruebas en <AddCategroy />', () => { 
    test('Debe de cambiar el valor de la caja de text', () => { 
        // Establecer el sujeto de pruebas
        render(
            <AddCategory 
                onNewCategory={() => {}}
            />
        );

        // Disparamos el eventos
        const input = screen.getByRole('textbox');
        // fireEvent.input( input, { target: {value: 'Saitama'} } );
        fireEvent.input( input, inputValue );

        // Hacemos la aserción de lo que esperamos que suceda
        expect( input.value ).toBe('Superman');

        screen.debug();
    });

    test('debe de llamar onNewCategory si el input tiene un valor', () => { 
        const onNewCategory = jest.fn();
        
        render(
            <AddCategory 
                // onNewCategory={() => {}}
                onNewCategory={onNewCategory}
            />
        );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); // Necesitamos ponerle un aria-label
        
        fireEvent.input( input, inputValue );
        fireEvent.submit( form );
        // screen.debug();
        
        expect(input.value).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        // Se asegura que la función sea llamada con el valor que se espera
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue.target.value) 
    });

    test('no debe de llamara el onNewCategory si el input está vacío', () => { 
        const onNewCategory = jest.fn();
        
        render(
            <AddCategory 
                onNewCategory={onNewCategory}
            />
        );

        const form = screen.getByRole('form'); // Necesitamos ponerle un aria-label
        fireEvent.submit( form );

        // expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();
    });
});