import { expect } from 'chai';

import store, {
  Actions, Selectors,
} from '../utils/Store/Store';

describe('Store basic use cases', () => {
  it('Data is updated by Actions', () => {
    const initialStatus = Selectors.authStatus();

    store.dispatch(Actions.setAuth(true));
    const newStatus = Selectors.authStatus();

    expect(initialStatus).to.equal(false);
    expect(newStatus).to.equal(true);
  });
});
