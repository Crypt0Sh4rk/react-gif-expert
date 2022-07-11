import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";
import { removeAccents } from "../src/helpers/utilities";
import { useFetchGifs } from "../src/hooks/useFetchGifs";

const inputValue = {
    target: {
        value: 'Bitcoin'
    }
}

jest.mock('../src/hooks/useFetchGifs');

describe('Pruebas en <GifExpertApp />', () => {
    // test('debe escribir en el input', () => {
    //     render(
    //         <GifExpertApp />
    //     );

    //     // screen.debug();

    //     // Disparamos el eventos
    //     const input = screen.getByRole('textbox');
    //     // fireEvent.input( input, { target: {value: 'Saitama'} } );
    //     fireEvent.input(input, inputValue);

    //     // Hacemos la aserción de lo que esperamos que suceda
    //     expect(input.value).toBe('Bitcoin');

    //     // screen.debug();
    // });

    // test('si la categoría no existe, agregarla', () => {
    //     render(
    //         <GifExpertApp />
    //     );

    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form'); // Necesitamos ponerle un aria-label

    //     fireEvent.input(input, inputValue);
    //     fireEvent.submit(form);

    //     expect(screen.findByText(inputValue.target.value)).toBeTruthy();

    // });

    // test('Validar que no se agregue una categoría existente', async () => {
    //     render(
    //         <GifExpertApp />
    //     );

    //     const input = screen.getByRole('textbox');
    //     const form = screen.getByRole('form'); // Necesitamos ponerle un aria-label

    //     fireEvent.input(input, inputValue);
    //     fireEvent.submit(form);

    //     fireEvent.input(input, inputValue);
    //     fireEvent.submit(form);

    //     screen.debug();

    //     const items = await screen.findAllByText(inputValue.target.value);
    //     expect(items).toHaveLength(1);

    //     expect(screen.getAllByText(inputValue.target.value).length).toBeLessThan(2);
    // });

    test('debe eliminar la categoría seleccionada', async () => {

        // const gifs = [
        //     {
        //         id: 'ABC',
        //         title: 'Saitama',
        //         url: 'https://localhost/saitama.jpg'
        //     },
        //     {
        //         id: '124',
        //         title: 'Superman',
        //         url: 'https://localhost/superman.jpg'
        //     }
        // ];

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: false
        });

        render(
            <GifExpertApp />
        );

        // Sólo debe de estar One Punch que es el estado inicial
        screen.debug();

        // Agregamos la categoría Bitcoin
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form'); // Necesitamos ponerle un aria-label

        fireEvent.input(input, inputValue);
        fireEvent.submit(form);

        screen.debug();

        expect( screen.getAllByRole('heading', { level: 3 }).filter(h => h.innerHTML == 'Bitcoin').length ).toBe(1);
        expect( screen.getAllByRole('heading', { level: 3 }).filter(h => h.innerHTML == 'One Punch').length ).toBe(1);

        // Removemos One Punch
        // const btnRemove = screen.getByRole('button', { name: 'btn-remove' });
        const btnRemove = screen.getByTestId(`btn-remove-${removeAccents('One Punch')}`);
        fireEvent.click(btnRemove);

        expect( screen.getAllByRole('heading', { level: 3 }).filter(h => h.innerHTML == 'One Punch').length ).toBe(0);

        screen.debug();
    });

})