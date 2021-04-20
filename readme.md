# NodeJS Udemy Server

Repository of the NodeJS Course to learn to build robust backends

## Installation

Remember you need to execute the next command to rebuild the node modules

```bash
npm install
```

## Create Release Tag

To get the code clean at the moment when the tag was created to be easy downloaded

```bash
git tag -a v1.0.0 -m "Basic Boilerplate WebRestServer"
git push --tags
```

## Directory Tree

* **docs** (Documentation to the server Directory)
* **public** (Public Directory)
* **src** (Source Directory of the backend App)
   * **controllers** (Controllers Folder)
   * **database** (Database Config Folder)
   * **helpers** (Helpers Functions Folder)
   * **middlewares** (Custom Middlewares Folder)
   * **models** (Models Folder)
   * **routes** (Routes Folder)
   * **app.js** (Entry point of the app)
 * **.env** (file with environment variables needed for the app to work)
 * **.gitignore** (Files, Folders to be ignored in the git repository)

## Notes
- DB: ***smCafeDB***

## Autor
> Stalin Maza

## Models

**Role**
- role: string

**User**
- state: string
- google: boolean
- firstname: string
- email: string
- password: string
- role: string

## About

NodeJS: [De cero a experto](https://www.udemy.com/course/node-de-cero-a-experto) (2021) - Fernando Herrera