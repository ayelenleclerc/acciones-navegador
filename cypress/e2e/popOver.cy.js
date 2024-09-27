describe('PopOver', () => {
  it('Funcion del PopOver en el navegador', () => {
    cy.visit('https://www.institutoweb.com.ar/test/pop/popover.html')
    
      cy.get('#mi-boton').click();
      cy.get("#mi-popover > p").should('have.text', 'Contenido del Popover')
      cy.get('#close-popover').click();
  })
})
