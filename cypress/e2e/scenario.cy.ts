describe('Scenario Tests', () => {
    beforeEach(() => {
        cy.login();
    });
    it('should create a new scenario', () => {
        cy.visit('/scenarios'); // Replace with your auth page path

        const testScenarioName = 'Test Scenario';
        const testScenarioDesc = 'Test Desc';

        cy.get('button').contains('Создать сценарий').click();
        cy.get('button').contains('Создать новый').click();
        cy.get('input[placeholder="Введите название сценария"]').type(testScenarioName);
        cy.get('input[placeholder="Введите описание сценария"]').type(testScenarioDesc);
        cy.get('button').contains('Создать сценарий').click();

        cy.reload();
        cy.wait(4000);
        cy.contains(testScenarioName).should('be.visible');
    });
});