describe('page is running successfully', () => {
  const BASE_URL = 'http://localhost:5173'
  before(() => {
    cy.visit(BASE_URL)
  })
  it('render principal page', () => {
    // cy.visit(BASE_URL)
    cy.title().should('eq', 'breaking bad wiki | Home')
    cy.contains('breaking-bad-wiki')
    cy.get('.flex-wrap').children().should('have.length', 10)
  })
  it('ask for random results', () => {
    cy.get('.flex-wrap').children().first()
      .then((a) => {
        const name = a.text().split(':')[1]
        const nameFirstPerson = name.substring(0, name.length - 6)
        cy.get('.justify-around > .bg-green-500').should('be.visible').should('be.enabled').click()

        cy.get('.flex-wrap').children().first()
          .then(b => {
            const name = b.text().split(':')[1]
            const nameSecondPerson = name.substring(0, name.length - 6)

            expect(nameFirstPerson).to.not.eq(nameSecondPerson)
          }
          )
      })
  })
})