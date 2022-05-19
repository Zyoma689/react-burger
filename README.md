![RB_header](https://user-images.githubusercontent.com/61308457/168847872-31664c4c-c94c-4b35-9d98-3cdccf80c1b6.svg)
<div align="center">
  <img src="https://img.shields.io/badge/-React-202124?logo=react&logoColor=61DAFB&style=flat-square" />
  <img src="https://img.shields.io/badge/Redux-593D88?style=flat-square&logo=redux&logoColor=white" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white" />
  <img src="https://img.shields.io/badge/JavaScript-202124?style=flat-square&logo=javascript&logoColor=F7DF1E" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white" />
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white" />
  <img src="https://img.shields.io/badge/React_Router-CA4245?style=flat-square&logo=react-router&logoColor=white" />
  <img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=jest&logoColor=white" />
  <img src="https://img.shields.io/badge/Cypress-17202C?style=flat-square&logo=cypress&logoColor=white" />
</div>

<h3 align="center">
  <a href="#about">О проекте</a>
  •
  <a href="#techs">Технологии</a>
  •
  <a href="#functionality">Функциональность</a>
  •
  <a href="#install">Установка</a>
  •
  <a href="#test">Тестирование</a>
</h3>

<h4 align=center>На краю вселенной затерялась бургерная, которая едва сводит концы с концами. 
Применяя современные Frontend-технологии мы помогли сделать из закусочной на краю света одно из лучших заведений во Вселенной.
</h4>

<h3 align="center">
  <a href="http://stellar-burgers.iv-a.ru/" title="Link">Demo</a> 
  •
  <a href="https://iv-a.github.io/react-burger/">GitHubPages</a>
</h3>

<h1 id="about">О проекте</h1>
<table>
  <tbody>
    <tr>
      <td>
        <p align="center"><b>Выполнен <br> в рамках курса React-разработки от Яндекс.Практикум. </b><p>
        <p align="center">Проект представляет собой приложение космической бургерной, позволяющее заказывать уникальные бургеры, которые приготовят по индивидуальному заказу. В приложении можно создавать бургеры простым перетаскиванием необходимых ингредиентов, оформлять заказ, а также отслеживать его статус в реальном времени.</p>
      </td>
      <td width="70%"><img src="https://user-images.githubusercontent.com/61308457/168448786-28b07fa6-3e18-407c-a3d5-27571a0001e8.gif"/></td>
    </tr>
  </tbody>
</table>
<!--
<img src="https://user-images.githubusercontent.com/61308457/168448786-28b07fa6-3e18-407c-a3d5-27571a0001e8.gif"/>
<blockquote>
Проект представляет собой приложение космической бургерной, позволяющее заказывать уникальные бургеры, которые приготовят по индивидуальному заказу. В приложении можно создавать бургеры простым перетаскиванием необходимых ингредиентов, оформлять заказ, а также отслеживать его статус в реальном времени.
</blockquote>
<br>
<br>
--!>
<h1 id="techs">Технологии</h1>
<ul>
  <li>React</li>
  <li>TypeScript</li>
  <li>Redux</li>
  <li>WebSocket</li>
  <li>React Router</li>
  <li>React DnD</li>
  <li>CSS Modules</li>
</ul>
<h1 id="functionality">Функциональность</h1>
<ul>
  <li>Drag-n-drop перетаскивания ингредиентов для изменения их порядка в бургере или для добавления в новый;</li>
  <li>Лента с обновлением статусов заказов в реальном времени (WebSocket);</li>
  <li>Изменение порядка ингредиентов;</li>
  <li>Регистрация/авторизация/восстановление пароля пользователей;</li>
  <li>Редактирование профиля;</li>
  <li>История заказов пользователя с обновлением в реальном времени;</li>
  <li>Защита роутов авторизацией;</li>
  <li>Динамический роутинг.</li>
</ul>
<h1 id="install">Установка</h1>
<ol>
<li>
  <p>Создаем рабочую директорию с произвольным именем (например dev):</p>
<pre>
mkdir <имя рабочей директории>
</pre>
</li>
<li>
  <p>Клонируем репозиторий в рабочую директорию:</p>
  <ul>
  <li>
    <p>Переходим в рабочую директорию:</p>
<pre>
cd <имя рабочей директории>
</pre>
  </li>
  <li>
    <p>Клонируем репо:</p>
<pre>
git clone https://github.com/iv-a/react-burger.git
</pre>
  </li>
    <li>
      В рабочей директории должна появиться папка проекта <code>react-burger</code>
    </li>
  </ul>
</li>
<li>
  <p>Переходим в папку с проектом:</p>
<pre>
cd react-burger
</pre>
</li>
<li>
  <p>Устанавливаем зависимости:</p>
<pre>
npm install
</pre>
</li>
<li>
  <p>Запускаем проект:</p>
<pre>
npm start
</pre>
</li>
</ol>

<h1 id="test">Тестирование</h1>
<ul>
<li>
  <p>Тестирование бизнес-логики приложения:</p>
<pre>
npm test
</pre>
</li>
<li>
  <p>Функциональное тестирование с использованием Cypress:</p>
<pre>
npm run cypress
</pre>
</li>
</ul>
