import { useGlobalState } from './useGlobalState';

export const useLocalStorageState = (key, defaultValue) => {
    const stored = localStorage.getItem(key);
    const [value, setValue] = useGlobalState(key, stored ? JSON.parse(stored) : defaultValue);

    const update = (val) => {
        localStorage.setItem(key, JSON.stringify(val));
        setValue(val);
    };

    return [value, update];
};
