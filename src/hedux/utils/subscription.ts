export interface Subscription {
  reflect: () => void;
  subscribe: (arg: () => void) => () => void;
}

function subscription(): Subscription {
  interface Listener {
    callback: () => void;
    prev: Listener | null;
    next: Listener | null;
  }

  let first: Listener | null = null;
  let last: Listener | null = null;

  const reflect = () => {
    let listener = first;
    while (listener) {
      listener.callback();
      listener = listener.next;
    }
  };

  const subscribe = (trigger: () => void) => {
    const newListener: Listener = {
      callback: trigger,
      prev: last,
      next: null,
    };
    if (newListener.prev !== null) {
      newListener.prev.next = newListener;
      last = newListener;
    } else {
      first = newListener;
      last = newListener;
    }
    return function unsubscribe() {
      if (newListener.prev) {
        newListener.prev.next = newListener.next;
      } else {
        first = newListener.next;
      }
      if (newListener.next) {
        newListener.next.prev = newListener.prev;
      } else {
        last = newListener.prev;
      }
    };
  };
  return { reflect, subscribe };
}

export default subscription;
