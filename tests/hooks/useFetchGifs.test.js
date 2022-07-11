import { renderHook, waitFor } from "@testing-library/react"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => { 
    test('debe regresar el estado inicial', () => {
        const { result } = renderHook( () => useFetchGifs('One Punch'));
        const { images, isLoading } = result.current

        expect(images.length).toBe(0)
        expect(isLoading).toBeTruthy();

    });

    test('debe de retornar un arreglo de imágenes y isLoading en false', async () => { 
        const { result } = renderHook( () => useFetchGifs('One Punch'));

        // debemos esperar a que el hook haga su trabajo, a que carga las imágenes
        await waitFor( // estamos indicando hasta que el length sea mayor a 0
            () => expect( result.current.images.length ).toBeGreaterThan(0),
            {
                timeout: 3000
            }
        );

        const { images, isLoading } = result.current;

        expect(images.length).toBeGreaterThan(0)
        expect(isLoading).toBeFalsy();
    })
})