/* eslint-disable */
// This permanently used for simple routing (addEventListener('locationchange', () => {}))
type StateArgsType = [data: any, unused: string, url?: string | URL | null | undefined]

export default function historyPatch() {
  const { pushState } = history;
  const { replaceState } = history;
  history.pushState = function (...args: StateArgsType) {
    pushState.apply(history, args);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  history.replaceState = function (...args: StateArgsType) {
    replaceState.apply(history, args);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
  };

  window.addEventListener('popstate', () => {
    window.dispatchEvent(new Event('locationchange'));
  });
};
