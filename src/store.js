const listeners = new Set();

let state = {};

const store = new Proxy(state, {
    set(target, key, value) {
        target[key] = value;
        listeners.forEach(fn => fn(key, value));
        return true;
    }
});

export const subscribe = (fn) => {
    listeners.add(fn);
    return () => listeners.delete(fn);
};

export const getState = () => store;
export const setState = (key, value) => store[key] = value;
