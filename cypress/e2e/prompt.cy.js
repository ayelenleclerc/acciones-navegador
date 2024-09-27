describe('Prompt', () => {
  it('Funcion del Prompt en el navegador', () => {
    cy.visit('https://www.institutoweb.com.ar/test/pop/prompt.html')
    
      cy.window().then(win => {
          //cy.stub(win, 'prompt').returns('Analia')
          cy.stub(win,'prompt').returns('')
      })
      
      cy.get('#mi-boton').click();
     // cy.get('#mensaje').should('have.text', 'El nombre indicado fue: Analia')
      cy.get('#mensaje').should('have.text', 'No se ingresó un nombre.')
      
  })
})