# Messenger

## Deployments

#### Netlify (not updated)
[index.html](https://deploy--musical-elf-1deda8.netlify.app/)
#### Heroku (LTS deployed)
[index.html](https://protected-mountain-85261.herokuapp.com/)
- (Possibly you have to wait for a minute till to the moment application is run)
- (You have to register new user, it's quite fast)

Commit to `deploy branch` to publish

## Available Scripts

In the project directory, you can run:

### `npm run start_local`
- Used to run app local with variables from .env. 
- Use `node index.js` command for running in cloud or container where we have no .env file.
- Open [http://localhost:process.env.PORT]() to view it in your browser.


### `npm run build:dev`
Builds the app for development to the `dist` folder.\

### `npm run build:prod`
Builds the app for development to the `dist` folder.\

### `npm run dev`
Runs the app in the development mode.\
Open [http://localhost:4000](http://localhost:4000) to view it in your browser.

### `npm run fix`
To fix eslint and stylelint errors in project

---

## Project structure

```
├── public/             # Используется для хранения index.html и некоторой статики
├── src/                # Исходники
│   ├── app /
│   │   ├── components/                   
│   │   ├── pages/  
│   │   ├── toast/      # Для модалок и тостов
│   │   ├── widgets/    
│   ├── assets/                      
│   │   ├── fonts/                   
│   │   ├── svg_preset/ # Пак с svg иконками (копируем в компонент фаил и используем)                   
│   ├── typings/    # Папка с компонентами проекта
│   ├── utils/     
│   │   ├── Api/                   
│   │   ├── common/  
│   │   ├── Core/      # Для модалок и тостов
│   │   ├── Form/                     
│   │   ├── Router/                     
│   │   ├── Store/                     
```

---

## Cookbook
### Block 


---
-  add component with template (1)
```
import exampleTmpl from './example.tmpl';
export default class Example extends Block<BaseProps> {
  render() {
    return exampleTmpl();
  }
}
```

---
- add Props|staticData|styles (2)
```
import staticData from './example.ru.json';
import styles from './example.module.scss';

type exampleProps = {
example: any[]
};

export default class Example extends Block<BaseProps> {
  constructor({ example, ...rawProps }: exampleProps) {
    super({
      example,
      staticData,
      styles,
    });
  }
  ...
}
```

---
- use Props|staticData|styles (3)
  - pass Props|staticData|styles to the super in constructor
 as described above and then:
```
const exampleTmpl = () => `
    <div>
        {{{ ExampleChild_1 text=staticData.text }}}
        {{{ ExampleChild_2 outerStyles=styles.child-style }}}
        {{{ ExampleChild_3 avatar=user.avatar }}} <- user is prop
        {{{ ExampleChild_4 onClick=onSubmit }}}
        
        <div class="{{outerStyles=styles.child-style}}">
            {{staticData.text}}
            {{user.name}}
        </div>
    </div>
  `;
```
---

---
- add event (4)
  - You can pass Events in the same way props or staticData was passed
  - but finally in the "bottom component", on witch you want to hang an event
  you have to do next thing: (and be sure that you use appropriate 
  eventListener name like click|mousedown etc.)
```
...
    super({
    ...,
      staticData,
      events: {
        click: (event: Event) => {
          if (props.onClick) {
            event.preventDefault();
            props.onClick();
          }
        },
      },
    });
  ...
}
```

### Store

- connect with Store (1)
  - Write connector with `map` function and wrap the exported class:
```
# ./utils/Store/connect
export const withExample = connect((state) => ({ user: state.store.example }));

# ./app/pages/Example
import { withExample } from './utils/Store/connect'
import exampleTmpl from './example.tmpl';
 class Example extends Block<BaseProps> {
  render() {
    return exampleTmpl();
  }
}

export default withExample(Example)
```
---
- write Store Actions and Thunks (2)
  - Actions - sync changes of the store data
  (you should dispatch them with `store.dispatch()`)
  - Thunks - async changes of the store data
  (you should call them directly and always wrap with `try/catch`)
```
# ./utils/Store/Store
const setExampleAction = store.actionCreator((value: any) => {
  const path = 'store.example';
  return {
    path,
    updateStateWith: objectFromPath(path, value),
  };
});

export const Actions = {
  setExample: setExampleAction,
};

const createExampleThunk = async (value: any) => {
    await ExampleController.createExample(value);
    store.dispatch(Actions.setExample(null));
};

export const Thunks = {
  createExample: createExampleThunk
}
```
---

- use Thunks (3)
  - (you should call them directly and always wrap with `try/catch`)
  - `informer` is helper toast witch only display an error to client
```

# ./app/pages/Example
# see example Block (2) for details of class implementation
constructor(rawProps: ProfileProps) {
super({
    ...,
    onSubmit: async (data: SubmitData) => {
        try {
            await Thunks.createExample(data);
        } catch (e: any) {
            informer(e.message);
    }
},
```
---
### Router 

- extend Routes with your route ({path: string})
- extend Screens with new screen ({block: Block})
- and use Router to navigate (PathRouter.go(Routes.Example.path)

### Api
- Create controller class (or extent existing)
- Create api class (or extent existing)


### Issues

---

If you find some bugs write:
- on [issues](https://github.com/UnidentifiedRaccoon/Toxin_project/issues)
- to [email: yura.posledov@yandex.ru](mailto:yura.posledov@yandex.ru)
