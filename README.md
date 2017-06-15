# Starter kit Ionic 3
Starter kit pour Ionic 3 et Angular 4.1.0
Inclus:

 - Service de cache natif avec chiffrement possible en aes
 - Tests Unitaires avec exemples de TU mockés (et autres)
 - Webworker et serviceworker si besoin
 - Gestion de variables d'environnement dev et prod
 - Génération de doc avec compodoc
 - SCSS
 - Lint

## Prérequis:

Avoir sur sa machine:

 - Au moins nodeJS 6.9.x et npm 3.x.x
 - Android SDK et ANDROID_HOME pointant sur le SDK

Pour vérifier les versions:
```
$ node -v
$ npm -v
```

Pour mettre à jour npm

```
$ npm install -g npm
```

## Installation

Installer en global Cordova et Ionic:
```
$ npm install -g cordova ionic
```

Installer les dépendances du projet:

```
$ npm install
```


**Note: Si votre connexion passe par un proxy**

```
npm config set proxy http://proxy.company.com:8080
npm config set https-proxy http://proxy.company.com:8080
```

## Lancement du projet:

```
$ npm run serve
```

## Utilisation de Typescript
> Pour avoir tous les avantages de TypeScritp avec l'autocomplétion il faut l'installer globalement et utiliser un IDE le supportant.

### Utiliser la dernière version du TypeScript Compiler
TypeScript 2.x inclue tout ce dont on a besoin. S'assurer de le mettre à jour si installé précédemment.

```
npm install -g typescript
```


### Utiliser un IDE TypeScript 'proof'
Liste des IDE:

* [Visual Studio Code](https://code.visualstudio.com/)
* [Webstorm 10](https://www.jetbrains.com/webstorm/download/)
* [Atom](https://atom.io/) avec [TypeScript plugin](https://atom.io/packages/atom-typescript)
* [Sublime Text](http://www.sublimetext.com/3) avec [Typescript-Sublime-Plugin](https://github.com/Microsoft/Typescript-Sublime-plugin#installation)

### Visual Studio Code + Debugger for Chrome
> Installer [Debugger for Chrome](https://marketplace.visualstudio.com/items?itemName=msjsdiag.debugger-for-chrome) et voir les instructions pour lancer Chrome

Le `.vscode` inclue va automatiquement se connecter au port du serveur de développement webpack `3001`.

### Custom Type Definitions
Pour inclure une dépendance tierce il faut inclure le type de ce module
S'il ne le fourni pas, il faut essayer de l'installer avec @types

```
npm install @types/node
npm install @types/lodash
```

Si nous ne trouvons pas le type dans le registre nous pouvons en faire notre propre définition

```typescript
declare module "my-module" {
  export function doesSomething(value: string): string;
}
```

If you're importing a module that uses Node.js modules which are CommonJS you need to import as

```typescript
import * as _ from 'lodash';
```



