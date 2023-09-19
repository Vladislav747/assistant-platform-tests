describe('Admin User Authentication Tests', () => {
    const assistant_url = 'http://localhost:3000';
    const admin_user_password = {
        login: 'vladislavis',
        password: 'Newyork74'
    };

    it('test_admin_user_auth', () => {


        // Navigate to assistant_url
        cy.visit(assistant_url);

        // Expect the URL to match the provided pattern
        cy.url().should('match', /.\/login$/);

        // Fill in the login details
        cy.get('input[type="text"]').type(admin_user_password["login"]);
        cy.get('input[type="password"]').type(admin_user_password["password"]);
        cy.getByTestId("btn-enter").click();

        // Expect the URL to match the provided pattern
        cy.url().should('match', /.\/select-project$/);

        // Click on project dropdown and select "Тестовый проект"
        cy.get('#mui-component-select-selectProject').click();
        cy.contains('Тестовый проект').click();
        cy.contains('span', 'Продолжить').click();

        // Expect the URL to match the provided pattern
        cy.url().should('match', /.\/scenarios$/);

        // Save the state if you have a corresponding function in Cypress
        // Close the page is handled by Cypress after each test run
    });

    it('test_logout', () => {
        cy.login();
        // Navigate to assistant_url
        cy.visit(assistant_url);
        // Click on logout
        cy.getByTestId("logout-wrapper").click();
        cy.getByTestId("logout-menu-item").click();
        // Reload and wait for 40 seconds
        cy.reload();
        cy.wait(2000);

        // Expect the URL to match the provided pattern
        cy.url().should('match', /.\/login$/);
    });
});