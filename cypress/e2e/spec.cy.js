// Write tests covering what should be displayed on the page when the user first visits.
// Write a test that checks that when data is put into the form, the value is reflected in that form input.
// Write a test to check the user flow of adding a new reservation to the page.

describe('Cafe Reservations', () => {
  
  beforeEach(() => {
    cy.intercept("GET", "http://localhost:3001/api/v1/reservations", {
      statusCode: 200,
      fixture: "resData.json"})
      .visit("http://localhost:3000/")
  })
  
  it('should display a title', () => {
    cy.contains("h1", "Turing Cafe Reservations")
  })

  it('should display a form', () => {
    cy.get('.resy-form')
    .contains('Make Reservation')
  })

  it('should display a list of reservations', () => {
    cy.get('.res-container')
    .contains("Christie")

    cy.get('.res-container')
    .contains("Leta")

    cy.get('.res-container')
    .contains("Pam")

    cy.get('.res-container').find('.card').should('have.lengthOf', 3)
  })

  it('should reflect value in form input when user adds data in form', () => {
    cy.get('input[name=number]').type(0)
  })

  it('should display a new reservation with the same data from the form input', () => {
    cy.get('input[name=number]').type(2)
    .get('input[name=name]').type("Sara")
    .get('input[name=date]').type("10/10")
    .get('input[name=time]').type("1:00")
    .get('.make-res-button').click()

    cy.get('.res-container').contains("Sara")
  })
})

