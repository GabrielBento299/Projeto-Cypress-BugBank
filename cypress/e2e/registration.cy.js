/// <reference types="cypress" />
describe('Registration Page Test', () => { 
    beforeEach(() => {
        cy.visit('/');
        cy.get('.ihdmxA').click();
    });

    context('Success Registration', () => {
        it('should register account successufully and display the account number created', () => {
            cy.registrationAccountNumber('teste@teste.com', 'Gabriel', 'teste123', 'teste123');
            cy.get('#modalText')
                .should('be.visible')
                .and('contain', 'A conta');
        });

        it('should crate an account with a balance balance R$ 1.000,00 when activating the option "Create an account with a balance" creates', () => {
            cy.registrationBalance('teste@teste.com', 'Gabriel', 'teste123', 'teste123', true);
            cy.get('#btnCloseModal').click({ force: true });
            
            cy.login('teste@teste.com', 'teste123');

            cy.get('#textBalance')
                .contains('R$ 1.000,00')
                .should('exist');
        });

        it('should crate an account with a balance R$ 0,00 when leaving the "Create an account with a balance" option inactive', () => {
            cy.registrationBalance('teste@teste.com', 'Gabriel', 'teste123', 'teste123', false);
            cy.get('#btnCloseModal').click({ force: true });

            cy.login('teste@teste.com', 'teste123');

            cy.get('#textBalance')
                .contains('R$ 0,00')
                .should('exist');
        });

        context('Errors Registration', () => {
            it('should display an error message when not filling in the email, password and password confirmation field', () => {
                cy.registrationNoFields('', 'Gabriel', '', '');

                cy.get('.kOeYBn > .input__warging')
                    .should('have.length','3')
                    .contains('É campo obrigatório');
            });

            it('should display an error message when not filling in the email field', () => {
                cy.registrationNoFields('', 'Gabriel', 'Teste123', 'Teste123');

                cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
            });

            it('should display an error message when not filling in the password field', () => {
                cy.registrationNoFields('teste@teste.com', 'Gabriel', '', 'Teste123');

                cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
            });

            it('should display an error message when not filling in the password confirmation field', () => {
                cy.registrationNoFields('teste@teste.com', 'Gabriel', 'teste123', '');

                cy.get('.kOeYBn > .input__warging').should('include.text','É campo obrigatório')
            });
        });
    });
});