describe('Scenario Tests', () => {
    beforeEach(() => {
        cy.login();
    });

    const testScenarioName = 'Test Scenario';
    const testScenarioDesc = 'Test Desc';

    it('should create a new scenario', () => {
        cy.visit('/scenarios');

        cy.get('button').contains('Создать сценарий').click();
        cy.get('button').contains('Создать новый').click();
        cy.get('input[placeholder="Введите название сценария"]').type(testScenarioName);
        cy.get('input[placeholder="Введите описание сценария"]').type(testScenarioDesc);
        cy.get('button').contains('Создать сценарий').click();

        cy.reload();
        cy.wait(4000);
        cy.contains(testScenarioName).should('be.visible');
    });

    it('should archive "Test Scenario"', () => {
        cy.visit('/scenarios');
        cy.wait(2000);
        cy.contains(testScenarioName).should('be.visible');
        cy.contains(testScenarioName).within(() => {
            cy.getByTestId('scenarioSettingsButton').click();
        })

        cy.getByTestId('addToArchiveBtn').click();
        cy.getByTestId('modalAddArchiveBtn').click();
        //Появляется Notification об успешном перемещении в архив
        cy.contains("Сценарий перемещен в архив").should('be.visible');
        cy.contains(testScenarioName).should('not.exist');
    });

    it("should show scroll button", () => {
        cy.visit('/scenarios');
        cy.wait(2000);
        cy.scrollTo(0, 500)
        cy.getByTestId("scrollToTopBtn").should('be.visible');
    });

    it("should not show scroll button", () => {
        cy.visit('/scenarios');
        cy.wait(2000);
        cy.scrollTo(0, 500)
        cy.scrollTo(0, 0)
        cy.getByTestId("scrollToTopBtn").should('not.be.visible');
    });
});