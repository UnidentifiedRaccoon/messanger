import Handlebars, { HelperOptions } from 'handlebars';

import Block, { BaseProps } from './Block';

// function allows register hbs helpers and use them in template
// We want to get "controlled templates" which we can reactively rerender when new data passed in
// data.root - object which passed into template function in component's parent compile method.
export default function registerComponents(Component: typeof Block<BaseProps>) {
  Handlebars.registerHelper(Component.className, ({ hash: { ref, ...hash }, data, fn }: HelperOptions) => {
    const { children, refs } = data.root;
    const component = new Component(hash);
    children[component.id] = component;
    if (ref) refs[ref] = component;
    // layout - actually idk how it works
    const contents = fn ? fn({ ...hash, ...data.root }) : '';
    return `<div data-id="id-${component.id}">${contents}</div>`;
  });
}
