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
