import { retornaArreglo } from "../../base-pruebas/07-deses-arr";

describe('Pruebas en 07-deses-arr', () => {
    test('should retornar un string y un número', () => {
        const [letters, numbers] = retornaArreglo();

        expect(letters).toBe('ABC');
        expect(numbers).toBe(123);

        expect(typeof (letters)).toBe('string');
        expect(typeof (numbers)).toBe('number');

        expect(letters).toStrictEqual(expect.any(String));
        expect(numbers).toStrictEqual(expect.any(Number));
    })
})