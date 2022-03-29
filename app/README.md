[//]: <> (start placeholder for auto-badger)


[![code of conduct](https://img.shields.io/badge/code%20of-conduct-ff69b4.svg?style=flat-square)](https://github.com/LanceWhitehorn/Faethm/blob/master/CODE_OF_CONDUCT.md)


[//]: <> (end placeholder for auto-badger)


> Onboarding UI built with MERN stack (MongoDB, ExpressJS, ReactJS, Nodejs)

## Table of Contents

- [Table of Contents](#table-of-contents)
- [Demo videos](#demo-videos)
- [Purpose](#purpose)
- [Project URL:](#project-url)
- [Features](#features)
- [Usage](#usage)
  - [Env Variables](#env-variables)
  - [Install Dependencies (frontend & backend)](#install-dependencies-frontend--backend)
  - [Run](#run)
  - [Seed Database](#seed-database)
- [Project Layout](#project-layout)
  - [Front-end layout](#front-end-layout)
  - [Back-end layout](#back-end-layout)
- [Testing](#testing)
- [Roles](#roles)
- [Deployment](#deployment)
- [License](#license)


## Demo videos
> upcoming

## Purpose
The Onboarding UI project is an additional data driven step for First Time User (FTU) which provides users with the opportunity to customise their experience on the Faethm application.
The UI provides a tailored landing page for users and improves the user experience (UX) on the Faethm platform.

## Project URL:
> upcoming
## Features
> upcoming

## Usage

### Env Variables

Create a .env file in the root and add the following

```
NODE_ENV = development
PORT = 3001
MONGO_URL = your mongodb uri
JWT_SECRET = set your secret key for JWT token
```

<!--Create a .env file in the **client/** folder-->

<!--```-->
<!--SKIP_PREFLIGHT_CHECK=true-->
<!--```-->

### Install Dependencies (frontend & backend)

```
npm install
cd client
npm install
```

### Run

```
# Run frontend (:3000) & backend (:3001)
npm run dev

# Run backend only (with nodemon)
npm run server

# Run frontend only
npm run client

```

**Note**: for seeding the data, you should destroy data first then import them.

### Seed Database

You can use the following commands to seed the database with some sample users and personas as well as destroy all data

```
# Import data
npm run data:import

# Destroy data
npm run data:destroy
```

**Sample User logins**

```
sep@test.com
sep

lance@test.com
lance

```

## Project Layout

### Front-end layout

```
src/                         Root directory of react app
├── App.test.tsx             Testing for the application
├── App.tsx                  Layout of the whole application
├── actions/                 Store the action of global store (Redux)
├── components               Multiple pages of the app (react-router)
│   ├── login                Authentication page
│   └── reusable             re-usable components
├── hooks.ts                 hooks for Redux
├── index.css                Apply global styling
├── index.tsx                Main entry point for the application
├── react-app-env.d.ts       TypeScript set up
├── reducers                 Reducers for global state (Redux)
├── setupTests.ts            TypeScript test
└── store.ts                 Main store for global state (Redux)
```

### Back-end layout

```
backend/
├── app.js                          Main entry for REST API of the application
├── config/                         Config folder (currently, only setup for database)
├── controller/                     Main logic of the API
├── data/                           Testing data
├── middlewares/                    Middlewares
│   ├── authMiddleware.js           Middlewares for checking token
│   └── errorHandlers.js            Middlewares for handling any errors
├── model/                          Model data for mongodb
├── routes/                         All the main routes of the API
├── seeder.js                       Script for auto import and destroy the data (testing purpose only)
├── server.js                       Run the server
├── test/                           All the tests for API
└── utils/                          Contain all re-usable functions
    └── generateToken.js            Currently, only having function for generate JWT tokens
```

## Testing
> upcoming

```
npm run test
```

After running the script, you will get a **coverage** folder that contains details about all the test case as well as the percentage of coverage for the API.  
You can open the file _coverage/lcov-report/index.html_ to have better visualization.


## Roles
1. Sepher Torfeh Nejad: Lead Developer, Documentation Support
2. Lance Te: Team Lead, Lead Formatter, Developer, Documentation Support
3. Erik Horvath: Editor, Documentation Officer, Developer
4. Marcus Ikeda: Documentation Officer, Developer
5. Rojwal Shrestha: Documentation Officer, Developer

Communications and collaboration:\
   i. The team had weekly meetings to discuss tasks that needs to be done, and go over presentation for sponsor meeting\
   ii. Pull requests are reviewed by at least 1 other team member. Merge conflicts are promptly resolved.

## Deployment
> upcoming

## License

MIT License

Copyright (c) 2022

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
