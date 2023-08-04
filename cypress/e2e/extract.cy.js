/// <reference types="cypress" />

describe('Extract Page Test', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');

    beforeEach(() => {
        cy.session('teste', () => {
            cy.registrationBalance(email, 'Gabriel', password, password, true);
            cy.reload();
            cy.login(email, password);
        });

    });

    it('should display the balance available in time', () => {
        cy.visit('/bank-statement');

        cy.get('#textBalanceAvailable')
            .contains('R$ 1.000,00')
            .should('exist');
    });

    it('should display "-" when transaction for without comment', () => {
        
        cy.get('#btn-TRANSFERÊNCIA').click();

        cy.get('input[name="accountNumber"]').type(accountNumber);
        cy.get('input[name="digit"]').type(digitNumber);
        cy.get('input[name="transferValue"]').type(1000);
        cy.get('button[type="submit"]').click();
    });
});