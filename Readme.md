# messenger

## Netlify
[index.html](https://deploy--musical-elf-1deda8.netlify.app/)

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the production mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run start_local`
- Used to run app local with variables from .env. 
- Leave `npm start` command for running in cloud or container where we have no .env file.
- Open [http://localhost:process.env.PORT]() to view it in your browser.


### `npm run build`
Builds the app for production to the `dist` folder.\

### `npm run dev`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run fix`
To fix eslint and stylelint errors in project

---

## Project structure

```
├── src/                             # Исходники
│   ├── assets/                      
│   │   ├── fonts/                   
│   │   ├── static/   # Для различных статических изображений, которые не импортируются через js а соответственно и не подтягиваются при сборке (папка копируется в dist)
│   ├── components/    # Папка с компонентами проекта
│   ├── mocks/         # Моки и их генерация
│   ├── pages/                      
│   ├── utils/                       
│   ├── widgets/       # Папка с смысловыми блоками, объединяющими несколько компонентов
```

---

## Code snippets
### Block 


---
- add component with template 
```
import exampleTmpl from './example.tmpl';
export default class Example extends Block {
  render() {
    return exampleTmpl();
  }
}
```


---
- add staticData
```
import staticData from './example.ru.json';
export default class Example extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, staticData });
  }
}
```


---
- add styles
```
import styles from './example.module.scss';
export default class Example extends Block {
  constructor(rawProps: any) {
    super({ ...rawProps, styles });
  }
}
```


---
- forward staticData

 add staticData, then:
```
const exampleTmpl = () => `
    <div>
        {{staticData.title}}
        {{{ ExampleChild staticData=staticData }}}
    </div>
  `;
```

### Issues

---

If you find some bugs write:
- on [issues](https://github.com/UnidentifiedRaccoon/Toxin_project/issues)
- to [email: yura.posledov@yandex.ru](mailto:yura.posledov@yandex.ru)
