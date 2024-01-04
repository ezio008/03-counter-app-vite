import { getHeroeByIdAsync } from "../../base-pruebas/09-promesas"

describe('Pruebas 09-promesas.js', () => {
    test('should getHeroByIdAsync return one hero', (done) => {
        const id = 1;

        getHeroeByIdAsync(id).then(hero => {
            expect(hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();
        });
    });

    test('should getHeroByIdAsync throw error', (done) => {
        const id = 500;

        getHeroeByIdAsync(id)
            .then(heroe => {
                expect(heroe).toBeFalsy();
                done();
            })
            .catch(error => {
                expect(error).toBe(`No se pudo encontrar el héroe con id ${id}`);

                done();
            });
    })
});