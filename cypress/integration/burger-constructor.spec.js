describe('BurgerConstructor', () => {
  it('Запуск приложения по адресу localhost:3000', () => {
    cy.visit('http://localhost:3000');
  });

  it('Перетаскиваение ингредиентов в конструктор', () => {
    const dataTransfer = new DataTransfer();

    // Конструктор
    cy.get('[data-test="constructor"]').as('constructor');
    // "Краторная булка N-200i"
    cy.get('[data-test-id="60d3b41abdacab0026a733c6"]').as('bunA');
    // "Соус традиционный галактический"
    cy.get('[data-test-id="60d3b41abdacab0026a733ce"]').as('ingredientA');
    // "Говяжий метеорит (отбивная)"
    cy.get('[data-test-id="60d3b41abdacab0026a733ca"]').as('ingredientB');
    // "Сыр с астероидной плесенью"
    cy.get('[data-test-id="60d3b41abdacab0026a733d4"]').as('ingredientC');

    // Перетаскиваем bunA в конструктор
    cy.get('@bunA').trigger('dragstart', {
      dataTransfer
    });
    cy.get('@constructor').trigger('drop', {
      dataTransfer
    });
    // Перетаскиваем ingredientA в конструктор
    cy.get('@ingredientA').trigger('dragstart', {
      dataTransfer
    });
    cy.get('@constructor').trigger('drop', {
      dataTransfer
    });
    // Перетаскиваем ingredientB в конструктор
    cy.get('@ingredientB').trigger('dragstart', {
      dataTransfer
    });
    cy.get('@constructor').trigger('drop', {
      dataTransfer
    });
    // Перетаскиваем ingredientC в конструктор
    cy.get('@ingredientC').trigger('dragstart', {
      dataTransfer
    });
    cy.get('@constructor').trigger('drop', {
      dataTransfer
    });
  });

  it('Открытие модального окна с информацией об ингредиенте', () => {
    // "Краторная булка N-200i"
    cy.get('[data-test-id="60d3b41abdacab0026a733c6"]').click('center');
    cy.location().should((loc) => expect(loc.pathname).to.eq('/ingredients/60d3b41abdacab0026a733c6'));
    cy.get('[data-test="modal"]').should('exist');
  });

  it('Отображение данных в модальном окне с информацией об ингредиенте', () => {
    cy.get('[data-test="ingredient-details-image"]').should('have.attr', 'src', 'https://code.s3.yandex.net/react/code/bun-02-large.png');
    cy.get('[data-test="ingredient-details-name"]').should('have.text', 'Краторная булка N-200i');
    cy.get('[data-test="ingredient-details-calories"]').should('have.text', '420');
    cy.get('[data-test="ingredient-details-proteins"]').should('have.text', '80');
    cy.get('[data-test="ingredient-details-fat"]').should('have.text', '24');
    cy.get('[data-test="ingredient-details-carbohydrates"]').should('have.text', '53');
  });

  it('Закрытие модального окна', () => {
    cy.get('[data-test="modal-close-btn"]').click('center');
    cy.get('[data-test="modal"]').should('not.exist');
  });

  it('Оформление заказа', () => {
    // Проверка суммы заказа
    cy.get('[data-test="total-cost"]').should('contain.text', '9667');
    // Кнопка должна быть активной
    cy.get('[data-test="place-order"]').find('button').as('place-order-btn');
    cy.get('@place-order-btn').should('not.be.disabled');
    // Нажатие на кнопку перенаправляет на страницу авторизации
    cy.get('@place-order-btn').click('center');
    cy.location().should((loc) => expect(loc.pathname).to.eq('/login'));
    // Вводим E-mail
    cy.get('input[name=email]').type('001@test.com');
    // Вводим пароль
    cy.get('input[name=password]').type('password');
    // Нажатие на кнопку Войти перенаправляет на страницу конструктора
    cy.get('[data-test="login-form"]').find('button').click('center');
    cy.location().should((loc) => expect(loc.pathname).to.eq('/'));
    cy.get('@place-order-btn').click('center');
    // Должно открыться модальное окно с номером заказа
    cy.get('[data-test="modal"]', { timeout: 21000 }).should('exist');
    cy.get('[data-test="order-number"]').should('exist');
  });

  it('Закрытие модального окна и очистка конструктора', () => {
    cy.get('[data-test="modal-close-btn"]').click('center');
    cy.get('[data-test="modal"]').should('not.exist');
    // Сумма заказа должна быть 0
    cy.get('[data-test="total-cost"]').should('contain.text', '0');
    // Кнопка должна быть заблокированной
    cy.get('[data-test="place-order"]').find('button').should('be.disabled');
  });
});