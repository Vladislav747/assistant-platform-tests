describe('Admin User Authentication Tests', () => {

it ('load', () => {
    cy.intercept('GET', '**/projects/1/block_types', { fixture: 'blockTypes.json' });

    })
});