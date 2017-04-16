# Decoupled WordPress App - Angular

This was built using `angular-cli` which is __amazing__.

## Setup
To connect to your WordPress environment rename `src/app/config/app-config.ts.sample` to `src/app/config/app-config.ts` and change the `API_ENDPOINT` to match your domain.  
the API_ENDPOINT must include `/wp-json/` for example `http://local.wordpress.dev/wp-json/`  

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.
