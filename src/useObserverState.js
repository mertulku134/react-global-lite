import { useEffect } from 'react';
import { subscribe } from './store';

export const useObserverState = (callback) => {
    useEffect(() => {
        const unsub = subscribe(callback);
        return unsub;
    }, []);
};
