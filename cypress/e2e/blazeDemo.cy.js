
describe('BlazeDemo', () => {


  beforeEach(() => {
    cy.visit('/')
  }) // termina beforeEach


  it('Deve selecionar cidade e finalizar compra', () => {

    cy.get('h1').should('have.text', 'Welcome to the Simple Travel Agency!')  // verifa se o título consta na home

    cy.get('select[name="fromPort"]').select('São Paolo')
    cy.get('select[name="toPort"]').select('London')
    cy.get('input[type="submit"]').click()


    cy.get('input[type="submit"]').first().click();


    // Preencher formulário
    cy.fixture('booking').then((data) => {
    cy.get('input#inputName').type(data.Name);
    cy.get('input#address').type(data.Address);
    cy.get('input#city').type(data.City);
    cy.get('input#state').type(data.State);
    cy.get('input#zipCode').type(data['Zip Code']);
    cy.get('select#cardType').select(data['Card Type']);
    cy.get('input#creditCardMonth').type(data.Month);
    cy.get('input#creditCardYear').type(data.Year);
    cy.get('input#nameOnCard').type(data['Name on Card']);
    });


    // Submeter o formulário
    cy.get('input[type="submit"]').click();

    cy.get('h1').should('have.text', 'Thank you for your purchase today!')



  }) // final do it

}) // final da describe