describe("Scenario Tests", () => {
    beforeEach(() => {
        cy.login();
        cy.intercept(
            "GET",
            "**/projects/1/scenarios_starts?start_block_type=start",
            { fixture: "analytics/scenarioStarts.json" }
        );
        cy.intercept("POST", "**/analytics/1/conversion/problem_calls", {
            fixture: "analytics/conversionProblemCalls.json",
        });
        cy.intercept("POST", "**/analytics/1/conversion/general", {
            fixture: "analytics/conversionGeneral.json",
        });
        cy.intercept("GET", "**/campaigns/project_list/1?scenario_id=641", {
            fixture: "analytics/scenarioProjectList.json",
        });
    });

    it("Аналитика правильно считывает данные из ссылки", () => {
        cy.visit("total-analytics");
        // 1688151600000 === 1 July, 1690743599000=== 30 Jul
        cy.visit(
            "total-analytics?projectId=1&scenario_id=641&date_start=1688151600000&date_end=1690743599000"
        );
        //Проверить вывод данных в полях в фильтрах
        cy.getByTestId("listbox-button").contains("Анкетирование");
        cy.contains("Дата");
        cy.contains("01.07.2023 00:00");
        cy.contains("30.07.2023 23:59");
        cy.getByTestId("listbox-button").contains("Выберите обзвон");
    });
});
