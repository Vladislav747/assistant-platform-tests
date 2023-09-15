import { selectByTestId } from '../../helpers/selectByTestId';
export const USERNAME_LOCALSTORAGE_KEY = 'UserName';
export const USER_LOCALSTORAGE_KEY = 'user';
export const PROJECT_LOCALSTORAGE_KEY = 'project';

export const login = (
    username: string = 'vladislavis',
    password: string = 'Newyork74',
) => {

    return cy
        .request({
            method: 'POST',
            url: 'https://assistant-backend-dev.is74.ru/login/',
            form: true,
            body: {
                username,
                password,
            },
        })
        .then( ({ body }) => {
            window.localStorage.setItem(
                USERNAME_LOCALSTORAGE_KEY,
                username,
            );
            window.localStorage.setItem(
                USER_LOCALSTORAGE_KEY,
                JSON.stringify(body),
            );

            window.localStorage.setItem(PROJECT_LOCALSTORAGE_KEY,  JSON.stringify({id: 1}))
            return body;
        });
};

export const getByTestId = (testId: string) => {
    return cy.get(selectByTestId(testId));
};

declare global {
    namespace Cypress {
        interface Chainable {
            login(username?: string, password?: string): Chainable<any>;
            getByTestId(testId: string): Chainable<JQuery<HTMLElement>>;
        }
    }
}
