describe('Form', () => {
    beforeEach(() => {
      cy.visit('/contacts')
    })

    it('it focuses the input', () => {
      cy.focused().should('have.class', 'contactFormInput')
    })

    it('accepts input', () => {
        const input = "Learn about Cypress"
        cy.focused()
          .type(input)
          .should('have.value', input)
      })
  })