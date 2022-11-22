import { screen } from '@testing-library/dom';

import renderDOM from '../utils/Core/renderDOM';
import registerComponents from '../utils/Core/registerComponents';

import TestButton from './TestButton';

describe('Block basic use cases', () => {
  beforeAll(() => {
    registerComponents(TestButton);
    document.body.innerHTML = '<div id="core-app"></div>';
  });

  it('Should forward props to template', () => {
    const block = new TestButton({ text: 'click' });

    renderDOM('#core-app', block);

    expect(screen.getByText('click')).toBeVisible();
  });

  it('Should handle calling', () => {
    const mockFn = jest.fn();
    const block = new TestButton({
      text: 'click',
      onClick: mockFn,
    });

    renderDOM('#core-app', block);
    const buttonElement = document.body.querySelector('button');
    if (buttonElement) {
      buttonElement.click();
      buttonElement.click();
    }

    expect(mockFn).toHaveBeenCalledTimes(2);
  });
});
