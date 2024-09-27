

describe('Alert', () => {
  it('Funcion del Alert en el navegador', () => {
    cy.visit('https://www.institutoweb.com.ar/test/pop/alerta.html')
    cy.on('window:alert', (texto) => {
      expect(texto).to.equal("Hola Mundo")
    })
    cy.get('#mi-boton').click();
  })
})
