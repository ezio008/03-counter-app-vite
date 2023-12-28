import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => {
    test('should retornar un objeto', () => {
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const result = getUser();

        expect(result).toEqual(testUser);
    });

    test('getUsuarioActivo should retornar un objeto', () => {
        const name = 'Salem';

        const result = getUsuarioActivo(name);

        expect(result).toStrictEqual({
            uid: 'ABC567',
            username: name
        })
    })
})