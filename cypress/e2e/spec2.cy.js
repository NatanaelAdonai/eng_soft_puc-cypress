describe('Teste de exemplo - Página de Demonstração', () => {
  it('Deve acessar a página inicial e verificar o título', () => {
    cy.visit('https://example.cypress.io')
    cy.title().should('include', 'Cypress')
  })

  it('Deve navegar até a seção Querying', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Querying').click({ force: true })
    cy.url().should('include', '/commands/querying')
  })

  it('Deve encontrar e clicar em um botão', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    cy.get('.action-btn').click()
    cy.get('#action-canvas').should('be.visible')
  })
})