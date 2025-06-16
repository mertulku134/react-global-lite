import { useEffect, useState } from 'react';
import { getState, setState, subscribe } from './store';

export const useGlobalState = (key, initialValue) => {
    const [value, setValue] = useState(() => {
        return getState()[key] ?? initialValue;
    });

    useEffect(() => {
        const unsub = subscribe((changedKey, newValue) => {
            if (changedKey === key) setValue(newValue);
        });
        return unsub;
    }, [key]);

    const update = (val) => setState(key, val);

    return [value, update];
};
