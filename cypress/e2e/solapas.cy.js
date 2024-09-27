describe('Solapas en Navegador', () => {
    it('Solapas', () => {
      cy.visit('https://www.institutoweb.com.ar/test/pop/solapa.html')
     
      cy.get('#mi-enlace').should('have.attr','target','_blank') // pestaña nueva en blanco
      cy.get('#mi-enlace').should('have.attr','href','popover.html')
      cy.get('#mi-enlace').invoke('attr','target','_self') // la pestaña actual
      cy.wait(3000)
     cy.get('#mi-enlace').click()
     cy.wait(3000)
     cy.get('#mi-boton').click() // boton de mostrar pop-over
     cy.wait(3000)
     cy.get('#close-popover').click()
})
  })
