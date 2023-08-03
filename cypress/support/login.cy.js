Cypress.Commands.add('login', (email, password) => {
    const emailInput = cy.get('div[class="card__login"] input[name="email"]');
    const passwordInput = cy.get('div[class="card__login"] input[name="password"]');

    email ? emailInput.type(email) : emailInput.clear();
    password ? passwordInput.type(password) : passwordInput.clear();  

    cy.get('.otUnI').click({ force: true });
});