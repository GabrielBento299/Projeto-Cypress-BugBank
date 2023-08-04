Cypress.Commands.add('takeAccount', () => {

    cy.get('#modalText').invoke('text').then((text) => { // Extrai o texto do modal e faz a manipulação

        const regex = /A conta (\d{1,3})-(\d) foi criada com sucesso/g // Regex para buscar o padrão esperado
        const match = regex.exec(text) // Executa a regex no texto
        const account = { // Salva o número da conta e dígito em um objeto
          accountNumber: match[1],
          digit: match[2]
        }
        // Faz alguma ação com o objeto numconta, como salvá-lo em uma variável ou usá-lo em algum teste
        return account
      });
});

Cypress.Commands.add('transfer', (accountNumber, digitNumber, value) => {
  cy.visit('/transfer');

  cy.get('input[name="accountNumber"]').type(accountNumber);
  cy.get('input[name="digit"]').type(digitNumber);
  cy.get('input[name="transferValue"]').type(value);
  cy.get('button[type="submit"]').click();
});