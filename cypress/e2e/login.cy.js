/// <reference types="cypress" />

describe('Login Page Test', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');

    beforeEach(() => {
        cy.visit('/');
    });

    context('Success Login', () => {
        it('should to do login with success and redirect to home', () => {
            cy.registrationBalance(email, 'Gabriel', password, password, true);
            cy.reload();

            cy.get('div[class="card__login"] input[name="email"]').type(email);
            cy.get('div[class="card__login"] input[name="password"]').type(password);
            cy.get('.otUnI').click({ force: true });
            
            cy.url().should('be.equal', `${Cypress.config("baseUrl")}/home`);
        });
    });

    context('Errors Login', () => {
        it('should not authorized the access for users not registered', () => {
            cy.get('div[class="card__login"] input[name="email"]').type('emailnaocadastrado@teste.com');
            cy.get('div[class="card__login"] input[name="password"]').type('error123');
            cy.get('.otUnI').click({ force: true });

            cy.get('#modalText').should('be.visible').and('contain', 'Usuário ou senha inválido.');
        });

        it('should display an error message when not filling in the email field', () => {
            cy.get('div[class="card__login"] input[name="password"]').type(password);
            cy.get('.otUnI').click({ force: true });
            
            cy.get('.kOeYBn > .input__warging').should('have.text', 'É campo obrigatório');
        });
        it('should display an error message when not filling in the password field', () => {
            cy.get('div[class="card__login"] input[name="email"]').type(email);
            cy.get('.otUnI').click({ force: true });
            
            cy.get('.kOeYBn > .input__warging').should('have.text', 'É campo obrigatório');
        });
    });
});