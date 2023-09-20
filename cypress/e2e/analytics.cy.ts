describe("Scenario Tests", () => {
    beforeEach(() => {
        cy.login();
        cy.wait(2000);
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

    it("Данные конверсии выводятся в нужных полях", () => {
        cy.visit("total-analytics");
        cy.visit(
            "total-analytics?projectId=1&scenario_id=641&date_start=1688151600000&date_end=1690743599000"
        );

        cy.get('.MuiCardContent-root > .MuiTypography-root').contains('Общая конверсия').closest('div').contains("0%")
        cy.get('.MuiCardContent-root > .MuiTypography-root').contains('Количество сбросов').closest('div').contains("5")
        cy.get('.MuiCardContent-root > .MuiTypography-root').contains('Среднее время диалога').closest('div').contains("6 сек")
    });
});
