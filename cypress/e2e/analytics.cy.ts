describe('Scenario Tests', () => {
    beforeEach(() => {
        cy.login();
    });

    it('Аналитика правильно считывает данные из ссылки', () => {
        cy.intercept('GET', '**/projects/1/scenarios_starts?start_block_type=start', {fixture: 'analytics/scenarioStarts.json'});
        cy.intercept('POST', '**/analytics/1/conversion/problem_calls', {fixture: 'analytics/conversionProblemCalls.json'});
        cy.intercept('POST', '**/analytics/1/conversion/general', {fixture: 'analytics/conversionGeneral.json'});
        cy.intercept('GET', '**/campaigns/project_list/1?scenario_id=641', {
            fixture: 'analytics/scenarioProjectList.json'});
        cy.visit('total-analytics?projectId=1&scenario_id=641&date_start=1688151600000&date_end=1690743599000');
        //@TODO проверить вывод данных в полях
    });



})