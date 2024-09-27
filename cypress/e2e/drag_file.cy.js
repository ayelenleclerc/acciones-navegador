describe('Drag-File', () => {
  it('Funcion del Drag-File en el navegador', () => {
    cy.visit('https://www.institutoweb.com.ar/test/drag_file.html')

      //IMPORTANTE definir la ruta ABSOLUTA del archivo SI y SOLO SI no se encuentra en una carpeta del proyecto.
      const dataTransfer = new DataTransfer()
      //cy.get("#dropArea").selectFile('C:/Users/ayele/Downloads/may21.pdf', { action: 'drag-drop' })
    cy.get("#dropArea").selectFile('./cypress/file-test/archivo.txt', { action: 'drag-drop' })
      cy.get("#dropArea").selectFile('./cypress/fixtures/example.json',{action:'drag-drop'})
  })
})
  