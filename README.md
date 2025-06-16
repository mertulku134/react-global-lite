# react-global-lite

React için küçük, hafif ve kolay kullanımlı bir state yönetimi kütüphanesi.

## 🚀 Özellikler

- `useGlobalState`: Basit global state yönetimi
- `useLocalStorageState`: State'i localStorage ile senkronize etme
- `useObserverState`: Observer pattern ile state yönetimi
- Minimal, hızlı ve anlaşılır API
- Redux gibi ağır kütüphanelere alternatif

---

## 📦 Kurulum

```bash
npm install react-global-lite
# veya
yarn add react-global-lite
```

---

## 🔧 Kullanım

### 1. `useGlobalState`

Global bir state anahtarı üzerinden tüm bileşenlerde paylaşılır ve güncellenir.

```jsx
import React from 'react';
import { useGlobalState } from 'react-global-lite';

function Counter() {
  const [count, setCount] = useGlobalState('count', 0);

  return (
    <>
      <div>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Arttır</button>
    </>
  );
}
```

---

### 2. `useLocalStorageState`

State'i `localStorage` ile senkronize eder. Sayfa yenilense bile veri korunur.

```jsx
import React from 'react';
import { useLocalStorageState } from 'react-global-lite';

function NameSaver() {
  const [name, setName] = useLocalStorageState('name', 'Mert');

  return (
    <input
      value={name}
      onChange={e => setName(e.target.value)}
      placeholder="İsminizi girin"
    />
  );
}
```

---

### 3. `useObserverState`

Observer pattern ile state değişikliklerini takip eder ve yönetir.

```jsx
import React from 'react';
import { useObserverState } from 'react-global-lite';

function ObserverExample() {
  const [value, setValue] = useObserverState('obsKey', 'ilk değer');

  return (
    <>
      <div>Değer: {value}</div>
      <button onClick={() => setValue('güncellendi')}>
        Güncelle
      </button>
    </>
  );
}
```

---

## 📚 API Referansı

| Hook                   | Açıklama                                         | Kullanım Örneği                                                  |
|------------------------|--------------------------------------------------|------------------------------------------------------------------|
| `useGlobalState`       | Global state oluştur ve yönet                   | `const [state, setState] = useGlobalState(key, initialValue)`   |
| `useLocalStorageState` | LocalStorage ile senkronize state yönetimi      | `const [state, setState] = useLocalStorageState(key, initialValue)` |
| `useObserverState`     | Observer pattern ile state değişimlerini takip  | `const [state, setState] = useObserverState(key, initialValue)` |

---

Bu kütüphane küçük projeler, prototipler veya state yönetimini sade ve hızlı tutmak isteyenler için idealdir. Redux veya context karmaşasına girmeden global state ihtiyacınızı çözer.