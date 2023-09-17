describe('Scenario Tests', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Аналитика правильно считывает данные из ссылки', () => {
        cy.visit('total-analytics?projectId=1&scenario_id=641&date_start=1688151600000&date_end=1690743599000');


    });

})