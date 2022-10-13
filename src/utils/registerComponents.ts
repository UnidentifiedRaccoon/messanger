import Handlebars, { HelperOptions } from 'handlebars';

import Block from './Block';

// function allows register hbs helpers and use them in template
// We want to get "controlled templates" which we can reactively rerender when new data passed in
// data.root - object which passed into template function in component's parent compile method.
export default function registerComponents(Component: typeof Block) {
  Handlebars.registerHelper(Component.className, ({ hash, data, fn }: HelperOptions) => {
    const component = new Component(hash);
    // eslint-disable-next-line no-param-reassign
    data.root.children[component.id] = component;

    // layout - actually idk how it works
    const contents = fn ? fn({ ...hash, ...data.root }) : '';
    return `<div data-id="id-${component.id}">${contents}</div>`;
  });
}
