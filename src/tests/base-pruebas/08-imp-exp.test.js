import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp";

describe('Pruebas 08-imp-exp', () => {

    test('getHeroeById should retornar un heroe', () => {
        const id = 1;

        const result = getHeroeById(id);

        expect(result).toEqual({
            id: 1,
            name: 'Batman',
            owner: 'DC'
        });
    });

    test('getHeroeById should no retornar', () => {
        const id = -1;

        const result = getHeroeById(id);

        expect(result).toBeFalsy();
    });

    test('getHeroesByOwner should retornar los heroes de DC', () => {
        const owner = 'DC';

        const result = getHeroesByOwner(owner);

        expect(result.length).toBe(3);
        expect(result).toEqual([
            { id: 1, name: 'Batman', owner: 'DC' },
            { id: 3, name: 'Superman', owner: 'DC' },
            { id: 4, name: 'Flash', owner: 'DC' }
        ]);
    })

    test('getHeroesByOwner should retornar los heroes de Marvel', () => {
        const owner = 'Marvel';

        const result = getHeroesByOwner(owner);

        expect(result.length).toBe(2);
        expect(result).toEqual([
            { id: 2, name: 'Spiderman', owner: 'Marvel' },
            { id: 5, name: 'Wolverine', owner: 'Marvel' }
          ]);
    })

})