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

            cy.login(email, password);
            
            cy.url().should('be.equal', `${Cypress.config("baseUrl")}/home`);
        });
    });

    context('Errors Login', () => {
        it('should not authorized the access for users not registered', () => {
            cy.login('emailnaocadastrado@teste.com', 'error123');

            cy.get('#modalText')
                .should('be.visible')
                .and('contain', 'Usuário ou senha inválido.');
        });

        it('should display an error message when not filling in the email field', () => {
            cy.login('', password);

            cy.get('.kOeYBn > .input__warging')
                .should('be.visible')
                .and('have.text', 'É campo obrigatório');        
        });
        
        it('should display an error message when not filling in the password field', () => {
            cy.login(email, '');

            cy.get('.kOeYBn > .input__warging')
                .should('be.visible')
                .and('have.text', 'É campo obrigatório');
        });
    });
});