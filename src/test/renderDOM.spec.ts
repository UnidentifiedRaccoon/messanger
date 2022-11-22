import renderDOM from '../utils/Core/renderDOM';
import registerComponents from '../utils/Core/registerComponents';

import TestButton from './TestButton/TestButton';

describe('renderDOM basic use cases', () => {
  beforeAll(() => {
    registerComponents(TestButton);
    document.body.innerHTML = '<div id="core-app"></div>';
  });

  it('Should render element to the DOM ', () => {
    const block = new TestButton({});

    renderDOM('#core-app', block);

    const app = document.querySelector('#core-app');
    const child = app?.querySelector('button');

    expect(app).toBeVisible();
    expect(child).toBeVisible();
  });
});
