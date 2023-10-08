# Quiz App

This app is a technical assesment

### Install dependencies

By default, dependencies were installed when this application was generated.

Whenever dependencies in package.json are changed, run the following command:

```sh
npm i
```

### Run the application

```sh
npm run start
```

## Testing

In this project, we are using for:

- Unit Testing: [Jest](https://jestjs.io/) with [React](https://react.dev/)

#### Run all tests

```sh
npm test
```

#### Code coverage

```sh
npm test -- --coverage
```

## Project architecture

- public folder: It contains the needed assets for the index.html file.

- src folder: It is the root folder of the application.

- src/assets folder: It contains all the static files.

- src/components folder: It contains the common app components.

- src/HOC folder: It contains the application **H**igher **O**rder **C**omponents.

- src/layouts folder: It contains the application shared layouts.

- src/pages folder: It contains the application pages.

- src/redux folder: It contains the store, features for Redux.

- src/routes folder: It contains the project outes.

- src/service folder: It contains the Axios instance used in the app.

- src/utils folder: It contains some useful functionalities, such as random data...

## Run the docker image

1. For the creation of the docker image we used

```sh
docker build -t quiz .
``````

2. Run on bash

```sh
sudo docker run -p 3000:3000 quiz
```

3. Open on the browser 

http://localhost:3000