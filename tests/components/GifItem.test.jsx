import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem"

describe('Pruebas en <GifItem />', () => { 
    const title = "Superman";
    const url   = "https://one-punch.com/saitama.png";

    test('debe de hacer match con el snapshot', () => { 
        const {container} = render(
            <GifItem
                title={ title }
                url = { url }
            />
        );
        expect(container).toMatchSnapshot();
    })

    test('debe de mostrar la imagen con el URL y el ALT indicado', () => { 
        render( <GifItem title={title} url={url} />);
        // screen.debug();

        // console.log( screen.getByRole('img'));
        // expect( screen.getByRole('img').src ).toBe( url );
        // expect( screen.getByRole('img').alt ).toBe( title );

        const { src, alt } = screen.getByRole('img');
        expect(src).toBe(src);
        expect(alt).toBe(title);
    })


    test('debe de mostrar el título en el componente', () => { 
        render( <GifItem title={title} url={url} />);
        expect(screen.getByText(title)).toBeTruthy(); // Valida que title exista como texto, y no como valor de una property
    })
})