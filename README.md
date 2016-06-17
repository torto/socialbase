# Teste da SocialBase

Teste realizado para uma das fazes de seleção da SocialBase

## Demo

[Demo](http://torto.github.io/socialbase/)

## Instalar

### Pré-requisito

 - Nodejs

 ### Configurando o projeto

 * Download do karma

`$ sudo npm install -g karma-cli`

* Download do http-server

`$ sudo npm install -g http-server`

* Instalando Dependências

`$ npm install`

Caso não execute o bower, faça:

`$ bower install`

## Executando o projeto

### Teste

`$ npm run test`

### Desenvolvimento com Grunt (watch e firulas do grunt)

`$ npm run live`

### Desenvolvimento sem  Grunt

`$ npm run start`

OBS: Caso não abra a página tanto com live quanto com start, remova essa linha `<script src="//localhost:35729/livereload.js"></script>` do arquivo index.html da pasta public `public/index.html`

### Build

`$ npm run build`

O build ficará na pasta `/dist/public`.
