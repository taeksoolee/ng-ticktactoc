# NgTicktactoc

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.18.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Angular CLI 사용방법

### module 생성
```
# ng generate module <module-name>
# ng g m <module-name>
```

### module 안에서 generate 명령어로 요소 생성
1. module directory로 이동해서 생성
```
cd src/app/<module-name> # module directory로 이동 
ng g c ...
```
2. 명령어로 생성
```
# 컴포넌트 생성 예시
# ng g c <module-name>/<component-name> --module <module-name> [--prefix <module-name>]
# ng g c <module-name>/<component-name> -m <module-name> [-p <module-name>]
```
