describe('Drag&Drop', () => {
  it('Funcion del Drag&Drop en el navegador', () => {
    cy.visit('https://www.institutoweb.com.ar/test/drop_boton.html')
    
      const dataTransfer = new DataTransfer()
      cy.get('#draggable').trigger("dragstart", { dataTransfer })
      cy.get('#textarea1').trigger("drop", { dataTransfer })
  })
})