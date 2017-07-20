# Lean MVVM

> Sample project using a lean mvvm framework - just for training purposes

## Dev Flow

### Some basics

1. Create this file: ```README.md```
2. Initialize NPM: ```npm init```
3. Add LICENSE

### Project start: TodoMVC

1. Copy index.html from tastejs/todomvc-app-template to src/index.html
2. Copy index.css from tastejs/todomvc-app-css to src/styles/base.css
3. Edit index.html and remove all script tags and adjust the css links to just include 'styles/base.css'
4. Have a dev server (lite-server, browser-sync, http-server) in your path and start it with src as webroot

### Setup JavaScript scripts without module system

1. Create a 'scripts/main.js' starting point
2. Create a 'scripts/model/todo.js' Todo-Item model file
3. Reference both files hardcoded in index.html

### Turn code into ES6 modules and use webpack as bundler

1. Change ```todo.js``` to be a module
2. Change ```main.js``` to be a *main module* and import the dependencies
3. Install webpack via npm and provide ```webpack.config.js```
4. Change ```index.html``` to load the bundle and fire up the server

### Transpile ES 2015+ features via Babel
1. Install babel-loader, babel-core and preset (see ```package.json```)
2. Configure Webpack to use babel
3. Convenience script entry to fire up build
