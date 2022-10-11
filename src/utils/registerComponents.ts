import Handlebars, { HelperOptions } from 'handlebars';

import Block from './Block';

// function allows register hbs helpers and use them in template
// We want to get "controlled templates" which we can reactively rerender when new data passed in
// data.root - object which passed into template function in component's parent compile method.
export default function registerComponents(Component: typeof Block) {
  Handlebars.registerHelper(Component.name, ({ hash, data }: HelperOptions) => {
    // console.log(hash);
    const component = new Component(hash);
    data.root.children[component.id] = component;
    return `<div data-id="id-${component.id}"></div>`;
  });
}
