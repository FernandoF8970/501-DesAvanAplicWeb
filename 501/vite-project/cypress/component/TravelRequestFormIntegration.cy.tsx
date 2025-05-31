/// <reference types="cypress" />
import { mount } from 'cypress/react'
import TravelRequestForm from '../../src/class4/A01028796/TravelRequestForm'

describe('TravelRequestForm - Prueba de Integración', () => {
  it('envía el formulario con datos válidos', () => {
    mount(<TravelRequestForm />)

    cy.get('input[placeholder="Destination"]').type('Madrid')
    cy.get('input[placeholder="Start Date"]').type('2025-06-01')
    cy.get('input[placeholder="End Date"]').type('2025-06-10')
    cy.get('textarea[placeholder="Purpose"]').type('Conferencia de tecnología')
    
    cy.contains('button', 'Submit').click()

  })
})
