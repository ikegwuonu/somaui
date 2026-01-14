import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/global.css';

import ButtonUI from './ui/buttonui';
import { Title } from '@somaui/ui/title';
import { FieldErrorText } from '@somaui/ui';

const App = () => {
  return (
    <div className="space-y-4 p-10">
      {/* <TT /> */}

      <Title children="Hello, SomaUI!" />
      <ButtonUI />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
