/// <reference types="cypress" />

describe('Transfer Page Teste', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');
    let accountNumber;
    let digitNumber;

    context('Success Transfer', () => {
        beforeEach(() => {
            cy.registrationBalance(email, 'Gabriel', password, password, true);
            cy.takeAccount().then(conta => {
                accountNumber = conta.accountNumber;
                digitNumber = conta.digit;
            });

            cy.registrationBalance('teste@teste.com', 'Teste', password, password, true);
            cy.login('teste@teste.com', password);
        });

        it('should todo with success transfer when the o balance for equal or bigger', () => {
            cy.get('#textBalance')
                .contains('R$ 1.000,00')
                .should('exist');
                
            cy.transfer(accountNumber, digitNumber, 1000);
        });
        
        it('should display an message when accomplish a transfer with success and debited the value account', () => {
            cy.get('#textBalance')
                .contains('R$ 1.000,00')
                .should('exist');
            
            cy.transfer(accountNumber, digitNumber, 500);

            cy.visit('/home');
            cy.get('#textBalance')
                .contains('R$ 500,00')
                .should('exist');
        });
    });

    context('Errors Transfer', () => {
        beforeEach(() => {
            cy.session('teste', () => {
                cy.registrationBalance(email, 'Gabriel', password, password, true);
                cy.login(email, password);
            });
        });
        
        it('should display an message when to do a transfer for account invalid ou nonexistent', () => {
            cy.transfer('123', 9, 500);

            cy.get('#modalText')
                .should('be.visible')
                .and('have.text', 'Conta inválida ou inexistente');
        });

        it('should display an message when to do a transfer with value equal in 0 or smaller', () => {
            cy.transfer('123', 9, 0);

            cy.get('#modalText')
                .should('be.visible')
                .and('have.text', 'Valor da transferência não pode ser 0 ou negativo');
        });
    });
});