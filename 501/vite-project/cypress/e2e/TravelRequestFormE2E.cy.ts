/// <reference types="cypress" />

describe('TravelRequestForm - Prueba E2E', () => {
  it('navega a la página del formulario y lo envía', () => {
    cy.visit('../../src/class4/A01028796/class4.html')

    cy.contains('Travel Request Form').should('exist')

    cy.get('input[placeholder="Destination"]').type('Paris')
    cy.get('input[placeholder="Start Date"]').type('2025-07-01')
    cy.get('input[placeholder="End Date"]').type('2025-07-07')
    cy.get('textarea[placeholder="Purpose"]').type('Asistencia a curso intensivo')

    cy.contains('button', 'Submit').click()
  })
})
