//  src/
//  ├── app/
//  │   └── store.ts               ← конфигурация Redux
//  ├── features/
//  │   └── role/
//  │       └── roleSlice.ts       ← срез состояния для роли
//  ├── pages/
//  │   ├── RoleSelector.tsx       ← выбор роли
//  │   ├── Enter.tsx              ← вход в систему
//  │   ├── Login.tsx
//  │   └── Register.tsx
//  ├── routes/
//  │   └── AppRoutes.tsx          ← маршруты
//  ├── App.tsx
//  └── main.tsx

//import { StrictMode } from 'react'
//import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './app/store';
import './index.css'
import App from './App.tsx'

//createRoot(document.getElementById('root')!).render(
//  <StrictMode>
//    <App />
//  </StrictMode>,
//)
//import App from './App';
//import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
