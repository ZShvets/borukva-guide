<img src="/images/readme_text.png" alt="Великий Посібник Борукви"></img>
---

**Великий Посібник Борукви** — гайд створений адмінами за підтримки Цебулевої-спільноти, що спеціалізується на поясненні механік сервера.


## Внесок

Якщо Ви хочете допомогти в редагуванні **Великого Посібника Борукви**, звертайтеся до **Stikulzon**.

## Гайд по використанню згенерований Chatgpt:
## Гайд по запуску VitePress проєкту на Windows

Цей гайд допоможе вам запустити проєкт VitePress на вашій Windows машині, починаючи з установки Node.js та Yarn.

**Крок 1: Встановлення Node.js**

1. Завантажте інсталятор Node.js з офіційного сайту: [https://nodejs.org/en/](https://nodejs.org/en/)
2. Запустіть завантажений файл та дотримуйтесь інструкцій на екрані.
3. Перевірте успішність установки, відкривши командний рядок (cmd) та ввівши наступні команди:
    ```bash
    node -v
    npm -v
    ```
    Ви повинні побачити версії Node.js та npm.

**Крок 2: Встановлення Yarn**

1. Відкрийте командний рядок (cmd) та введіть наступну команду:
    ```bash
    corepack enable
    ```
2. Перевірте успішність установки, ввівши команду:
    ```bash
    yarn -v
    ```
    Ви повинні побачити версію Yarn.

**Крок 3: Запуск VitePress**

1. Встановіть залежності проєкту:
    ```bash
    yarn install
    ```
2. Запустіть сервер розробки:
    ```bash
    yarn docs:dev
    ```
3. Відкрийте ваш браузер та перейдіть за адресою `http://localhost:3000/`.

**Крок 4: Збірка проєкту для продакшену**

1. Зберіть статичні файли вашого сайту:
    ```bash
    yarn docs:build
    ```
2. Зібрані файли будуть знаходитись в папці `.vitepress/dist`.

**Вітаємо!** Ви успішно запустили VitePress проєкт на вашій Windows машині.

**Додаткова інформація:**

* [Офіційна документація VitePress](https://vitepress.dev/)
* [Документація Node.js](https://nodejs.org/docs/latest/api/)
* [Документація Yarn](https://yarnpkg.com/getting-started/install)


Сподіваємось, цей гайд був корисним! Успіхів у розробці!


## Ліцензія

[MIT](https://github.com/Stikulzon/borukva-guide/blob/master/LICENSE)
