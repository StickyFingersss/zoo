#!/bin/bash
#  Файл выпонняет установку sequelize для postgres, express, ReactSSR

# Для того что бы все сработало:
# 1) chmod +x Express-ReactSSR-sequelize.sh  // файл по умолчанию не исполняемый, перед запуском выполнить эту команду в консоли где расположен файл.
# 2) кидаете его в корень нового проекта.
# 3) Теперь файл можно запускать, введя ./Express-ReactSSR-sequelize.sh в консоли.

npm init -y

echo '{
  "name": "Express-ReactSSR-sequelize",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js --ignore session --ext js,jsx",
    "test": "jest"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}' > package.json

npm i sequelize pg pg-hstore dotenv express morgan @babel/cli @babel/core @babel/preset-react @babel/register @babel/preset-env react react-dom
npm i -D sequelize-cli nodemon
npx create-gitignore node



echo "const path = require('path');
require('dotenv').config()
 module.exports = {
  'config': path.resolve('db',  'config', 'database.json'),
  'models-path': path.resolve('db', 'models'),
  'seeders-path': path.resolve('db', 'seeders'),
  'migrations-path': path.resolve('db', 'migrations')
 };" > .sequelizerc


npx sequelize init

echo '{
  "development": {
    "use_env_variable": "DEV_DB_URL",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
}
}' > ./db/config/database.json

echo '
PORT=3000
DEV_DB_URL=postgres://artur:qwerty@localhost:5432/test
SESSION_SECRET=lollipop' > .env

echo '
PORT=3000
DEV_DB_URL=[dialect]://[user]:[password]@[hostname]:[PORT]/test' > .env_example

echo "const express = require('express');
require('@babel/register');
const app = express();
const morgan = require('morgan');
const path = require('path');
require('dotenv').config();

const session = require('express-session');
const FileStore = require('session-file-store')(session);

const { PORT } = process.env;

const sessionConfig = {
  name: 'CardsCookie',
  store: new FileStore(),
  secret: process.env.SESSION_SECRET ?? 'Секретное слово',
  resave: false, // * если true, пересохранит сессию, даже если она не менялась
  saveUninitialized: false, // * если false, куки появятся только при установке req.session
  cookie: {
    maxAge: 9999999, // * время жизни в мс (ms)
    httpOnly: true,
  },
};

// импорт роутов
const homeRoutes = require('./src/routes/homeRoutes');


app.use(express.static(path.resolve('public')));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session(sessionConfig));

//роутеры
app.use('/', homeRoutes);

// изменить ковычки на бектики
app.listen(PORT, () => {
  console.log('Сервер крутится на ${PORT} порту!');
});" > app.js

mkdir -p src/views
mkdir -p public/js
mkdir -p public/images
mkdir -p public/css
mkdir -p src/lib/middlewares
mkdir -p src/routes

npm i express-session session-file-store bcrypt

echo "const React = require('react');

function Layout({children}) {
  return (
    <html lang='en'>
      <head>
        <meta charSet='UTF-8' />
        <meta httpEquiv='X-UA-Compatible' content='IE=edge' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <link rel='stylesheet' href='/css/style.css' />
        <title>Document</title>
      </head>
      <body>
        <div className='container'>{children}</div>
      </body>
    </html>
  );
}

module.exports = Layout;" > ./views/Layout.jsx

echo "const React = require('react');
const Layout = require('./Layout');

function Home() {
  return (
    <Layout>
      <div>
        <h2>Hello</h2>
      </div>
    </Layout>
  );
}

module.exports = Home;" > ./views/Home.jsx

echo "const ReactDomServer = require('react-dom/server');
const React = require('react');

const render = (reactElement, properties, response) => {
    const reactEl = React.createElement(reactElement, properties);
    const html = ReactDomServer.renderToStaticMarkup(reactEl);
    response.write('<!DOCTYPE html>');
    response.write(html);
    response.end();
}

module.exports = render;" > ./src/lib/render.js

echo "require('@babel/register');
const express = require('express');
const route = express.Router();

const render = require('../lib/render');
const Home = require('../../views/Home');

route.get('/', (req, res) => {
  render(Home, {}, res)
  })

module.exports = route;" > ./src/routes/homeRoutes.js

echo '{
    "presets": [
      [
        "@babel/preset-env",
        {
          "targets": { "node": "14" },
          "modules": false
        }
      ],
      "@babel/preset-react"
    ]
  }' > .babelrc

  echo ".container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }" > public/css/style.css



