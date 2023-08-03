/// <reference types="cypress" />

describe('Login Page Test', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');

    context('Success Login', () => {
        beforeEach(() => {
            cy.visit('/');
            cy.registrationBalance(email, 'Gabriel', password, password, true);
            cy.reload();
        });
        it('should to do login with success and redirect to home', () => {
            cy.get('div[class="card__login"] input[name="email"]').type(email);
            cy.get('div[class="card__login"] input[name="password"]').type(password);
            cy.get('.otUnI').click({ force: true });
            
            cy.url().should('eq','https://bugbank.netlify.app/home');
        });
    });
    context('Errors Login', () => {
        beforeEach(() => {
            cy.visit('/');
        });
        it('', () => {
            cy.get('div[class="card__login"] input[name="email"]').type('emailnaocadastrado@teste.com');
            cy.get('div[class="card__login"] input[name="password"]').type('error123');
            cy.get('.otUnI').click({ force: true });
            cy.get('#modalText').should('be.visible').and('contain', 'Usuário ou senha inválido.');
        });
    });
});