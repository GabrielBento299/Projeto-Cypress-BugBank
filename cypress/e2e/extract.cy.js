/// <reference types="cypress" />

describe('Extract Page Test', () => {
    const email = Cypress.env('user_email');
    const password = Cypress.env('user_password');
    let accountNumber;
    let digitNumber;

    context('Extract', () => {
        beforeEach(() => {
            cy.registrationBalance(email, 'Gabriel', password, password, true);
            cy.login(email, password);
        });
    
        it('should display the balance available in time', () => {
            cy.visit('/home');
            cy.get('#textBalance')
                .contains('R$ 1.000,00')
                .should('exist');
    
            cy.visit('/bank-statement');
            cy.get('#textBalanceAvailable')
                .contains('R$ 1.000,00')
                .should('exist');
        });
    });

    context('Trasfer Extract', () => {
        beforeEach(() => {
            cy.registrationBalance(email, 'Gabriel', password, password, true);
            cy.takeAccount().then(conta => {
                accountNumber = conta.accountNumber;
                digitNumber = conta.digit;
            });
        
            cy.registrationBalance('teste@teste.com', 'Gabriel', password, password, true);
            cy.login('teste@teste.com', password);
        });

        it('should display "-" when transaction for without comment', () => {
            cy.transfer(accountNumber, digitNumber, 1000);
            
            cy.visit('/bank-statement');
            cy.get(':nth-child(2) > .bank-statement__ContainerDescAndValue-sc-7n8vh8-15 > #textDescription').should('contain', '-');
        });

        it('should show that each transaction display the date it was made the type of transaction and the amount', () => {
            cy.transfer(accountNumber, digitNumber, 500);

            cy.visit('/bank-statement');
            cy.get('.bank-statement__ContainerTransaction-sc-7n8vh8-12 > :nth-child(2)').within(() => {
                cy.get('#textDateTransaction').should('be.visible');
                cy.get('#textTypeTransaction').should('be.visible').and('contain', 'Transferência enviada');
                cy.get('#textTransferValue').should('not.have.css', 'color', '#ff0000');
            });
        });
    });
});