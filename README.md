# React + TypeScript + Vite
# Development

## Steps
npm install
npm run dev

Start JSON Server
npm run server

The application have two routes
/pets/list 
View of Pets

/pets/create
View Form pet


The form is using useForm and Yup for validations.
The componentes are from Material UI

The App is using Redux as state management. You can reveiw it in /store

The directory /services is using axios and consuming the JSON Server (it can be changed if we want to use other serve)

Structure

/pages -> views of application, each page shoul be have a components only for that view.

/enums -> enums 

/services -> services with axios to consume from JSON Server

/store -> config o redux, using redux toolkit

/theme -> config of theme material ui

/utils -> utils to reuse in the app (helpers)

