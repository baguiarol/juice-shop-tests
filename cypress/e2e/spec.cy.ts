describe('Juice Shop Home', () => {
  it('opens the site', () => {
    cy.visit('http://localhost:3000')
    cy.contains('All Products')
  })
})