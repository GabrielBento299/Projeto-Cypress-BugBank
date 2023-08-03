/// <reference types="cypress" />

describe('Transfer Page Teste', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');
    let accountNumber;
    let digitNumber;

    beforeEach(() => {
        cy.visit('/');
        cy.registrationBalance(email, 'Gabriel', password, password, true);
        cy.takeAccount().then(conta => {
            accountNumber = conta.accountNumber;
            digitNumber = conta.digit;
        });
        cy.reload();
    });

    context('Success Transfer', () => {
        it('should todo with success transfer when the o balance for equal or bigger', () => {
            cy.visit('/');
            cy.registrationBalance('teste@teste.com', 'Teste', password, password, true);
            cy.reload();
            cy.login('teste@teste.com', password);
            cy.get('#textBalance')
                .contains('R$ 1.000,00')
                .should('exist');

            cy.get('#btn-TRANSFERÊNCIA').click();

            cy.get('input[name="accountNumber"]').type(accountNumber);
            cy.get('input[name="digit"]').type(digitNumber);
            cy.get('input[name="transferValue"]').type(1000);
            cy.get('button[type="submit"]').click();
        });
        
        it('should display an message when accomplish a transfer with success and debited the value account', () => {
            cy.visit('/');
            cy.registrationBalance('teste@teste.com', 'Teste', password, password, true);
            cy.reload();
            cy.login('teste@teste.com', password);

            cy.get('#textBalance')
                .contains('R$ 1.000,00')
                .should('exist');
            
            cy.get('#btn-TRANSFERÊNCIA').click();

            cy.get('input[name="accountNumber"]').type(accountNumber);
            cy.get('input[name="digit"]').type(digitNumber);
            cy.get('input[name="transferValue"]').type(500);
            cy.get('button[type="submit"]').click();

            cy.visit('/home');
            cy.get('#textBalance')
                .contains('R$ 500,00')
                .should('exist');
        });
    });

    context('Errors Transfer', () => {
        beforeEach(() => {
            cy.login(email, password);
            cy.visit('/transfer');
        });
        
        it('should display an message when to do a transfer for account invalid ou nonexistent', () => {
            cy.get('input[name="accountNumber"]').type('123');
            cy.get('input[name="digit"]').type(9);
            cy.get('input[name="transferValue"]').type(500);
            cy.get('button[type="submit"]').click();

            cy.get('#modalText')
                .should('be.visible')
                .and('have.text', 'Conta inválida ou inexistente');
        });

        it('should display an message when to do a transfer with value equal in 0 or smaller', () => {
            cy.get('input[name="accountNumber"]').type('123');
            cy.get('input[name="digit"]').type(9);
            cy.get('input[name="transferValue"]').type(0);
            cy.get('button[type="submit"]').click();

            cy.get('#modalText')
                .should('be.visible')
                .and('have.text', 'Valor da transferência não pode ser 0 ou negativo');
        });
    });
});