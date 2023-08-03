Cypress.Commands.add('registrationAccountNumber', (email, name, password, confirmationPassword) => {
    cy.get('div[class="card__register"] input[name="email"]').type(email, { force: true });
    cy.get('div[class="card__register"] input[name="name"]').type(name, { force: true });
    cy.get('div[class="card__register"] input[name="password"]').type(password, { force: true, log: false });
    cy.get('div[class="card__register"] input[name="passwordConfirmation"]').type(confirmationPassword, { force: true, log: false });
    
    cy.get('div[class="card__register"] button[type="submit"]').click({force: true});
});

Cypress.Commands.add('registrationBalance', (email, name, password, confirmationPassword, balance) => {
    cy.get('div[class="card__register"] input[name="email"]').type(email, { force: true });
    cy.get('div[class="card__register"] input[name="name"]').type(name, { force: true });
    cy.get('div[class="card__register"] input[name="password"]').type(password, { force: true, log: false });
    cy.get('div[class="card__register"] input[name="passwordConfirmation"]').type(confirmationPassword, { force: true, log: false });

    balance ? cy.get('#toggleAddBalance').click({ force: true }) : null;

    cy.get('div[class="card__register"] button[type="submit"]').click({force: true});
});

Cypress.Commands.add('registrationNoFields', (email, name, password, confirmationPassword) => {
    
    if (email === '') {
        cy.get('div[class="card__register"] input[name="email"]').clear({ force: true });
    } else {
        cy.get('div[class="card__register"] input[name="email"]').type(email, { force: true });
    }

    cy.get('div[class="card__register"] input[name="name"]').type(name, { force: true });

    if (password === '') {
        cy.get('div[class="card__register"] input[name="password"]').clear({ force: true }); 
    } else {
        cy.get('div[class="card__register"] input[name="password"]').type(password, { force: true, log: false });
    }
    if (confirmationPassword === '') {
        cy.get('div[class="card__register"] input[name="passwordConfirmation"]').clear( { force: true} ); 
    } else {
        cy.get('div[class="card__register"] input[name="passwordConfirmation"]').type(confirmationPassword, { force: true, log: false });
    }

    cy.get('div[class="card__register"] button[type="submit"]').click( {force: true} );
});