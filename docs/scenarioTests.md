# Тесты на раздел сценарий


### Создание сценария [should create a new scenario](../cypres/e2e/scenario.cy.ts)
#### Тест проверяет что сценарий создается и затем виден в списке сценариев

#### Условия
- Пользователь - авторизован

#### Шаги выполнения
1. Находим кнопку 'Создать сценарий' и нажимаем на нее
2. Заполняем тестовые данные сценария
3. Сохраняем сценарий по кнопке 'Создать сценарий'
4. Находим сценарий в списке

#### Результат теста
```
Сценарий успешно создан и отображается в списке
```

### Появляется скролл кнопка "ScrollToTop" [should show scroll button](../cypres/e2e/scenario.cy.ts)
#### Тест проверяет что кнопка скролла отображается при скролле вниз на 500

#### Условия
- Пользователь - авторизован
- Сценариев должно быть более 15

#### Шаги выполнения
1. Заходим в сценарии
2. Делаем скролл вниз на 500 px
3. Находим кнопку скролл в разделе сценарии

#### Результат теста
```
Кнопка скролл успешно отображается в разделе
```


### Сценарий успешно отправляется в архив [should show scroll button](../cypres/e2e/scenario.cy.ts)
#### Тест проверяет что только что созданный сценарий отправляется в архив

#### Условия
- Пользователь - авторизован
- Существует сценарий Test Scenario(Созданный в прошлом сценарии)

#### Шаги выполнения
1. Заходим в сценарии
2. Находим по имени контейнер сценария 'Test Scenario'(!!! он должен быть один)
3. Находим кнопку настроек сценария
4. Переходим в настройки
5. Находим кнопку отправления в архив
6. Появляется модальное окно 
7. Отправляем сценарий в архив в модальном окне
8. Появляется Notification 'Сценарий перемещен в архив'
9. Сценарий 'Test Scenario' не появляется в списке активных сценариев

#### Результат теста
```
Сценарий успешно архивирован
```
