

test('Esta prueba debe ir bien', () => {

    // Arrange
    const message1 = 'Hola mundo';

    // Act
    const message2 = message1.trim();

    // Assert
    expect(message1).toBe(message2)
})