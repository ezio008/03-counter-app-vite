import { getSaludo } from "../../base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => {
    test('should retornar un saludo', () => { 

        const name = 'Salem';
        const message = getSaludo(name);

        expect(message).toBe(`Hola ${name}`);
     })
 })