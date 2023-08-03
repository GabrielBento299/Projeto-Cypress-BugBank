/// <reference types="cypress" />


describe('Registration Page Test', () => { 
    beforeEach(() => {
        cy.visit('/');
        cy.get('.ihdmxA').click();
    });

    context('Success', () => {
        it('Should register account successufully and display the account number created', () => {
            cy.registrationAccountNumber('teste@teste.com', 'Gabriel', 'teste123', 'teste123');

            cy.get('#modalText')
                .should('be.visible')
                .and('contain', ('A conta'));
        });

        it('Should crate an account with a balance balance R$ 1.000,00 when activating the option "Create an account with a balance" creates', () => {
            cy.registrationBalance('teste@teste.com', 'Gabriel', 'teste123', 'teste123', true);
            cy.get('#btnCloseModal').click({ force: true });

            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com', { force: true });
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste123', { force: true, log: false });
            cy.get('.otUnI').click({ force: true });
            cy.get('#textBalance')
                .contains('R$ 1.000,00')
                .should('exist');
        });
        it('Should crate an account with a balance R$ 0,00 when leaving the "Create an account with a balance" option inactive', () => {
            cy.registrationBalance('teste@teste.com', 'Gabriel', 'teste123', 'teste123', false);

            cy.get('#btnCloseModal').click({ force: true });

            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default').type('teste@teste.com', { force: true });
            cy.get('.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default').type('teste123', { force: true, log: false });
            cy.get('.otUnI').click({ force: true });
            cy.get('#textBalance')
                .contains('R$ 0,00')
                .should('exist');

        });

        context('Errors', () => {
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