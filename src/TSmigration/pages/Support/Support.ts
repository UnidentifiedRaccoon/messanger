import Block from 'utils/Block';

import supportTmpl from './Support.tmpl';

export default class Support extends Block {
  constructor(rawProps: any) {
    super({
      rawProps,
      buttonHandler: {
        // onClick: (event: Event) => console.log('Button', event),
      },
    });
  }

  render() {
    return supportTmpl();
  }
}
