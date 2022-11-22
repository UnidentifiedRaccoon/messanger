import store, {
  Actions, defaultState, Selectors, Store,
} from '../utils/Store/Store';
import { cloneDeep, objectFromPath } from '../utils/common/objectHelpers';

describe('Store basic use cases', () => {
  beforeEach(() => {
    const path = 'store';
    store.dispatch({ path, payload: objectFromPath(path, cloneDeep(defaultState.store)) });
  });

  it('Should update store data with object', () => {
    const initialStatus = Selectors.authStatus();
    const path = 'store.authStatus';

    store.dispatch({ path, payload: objectFromPath(path, true) });
    const newStatus = Selectors.authStatus();

    expect(initialStatus).toEqual(false);
    expect(newStatus).toEqual(true);
  });

  it('Should update store data with Actions', () => {
    const initialStatus = Selectors.authStatus();
    store.dispatch(Actions.setAuth(true));
    const newStatus = Selectors.authStatus();

    expect(initialStatus).toEqual(false);
    expect(newStatus).toEqual(true);
  });

  it('Should emit change event on store data change', () => {
    const mockFn = jest.fn();

    store.on(Store.EVENTS.CHANGE, mockFn);
    store.dispatch(Actions.setAuth(true));

    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
