import React from 'react';
import { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({ onSelect, text }) => {
  return (
    <a href="#" className="menu-item" onClick={() => onSelect(text)}>
      {text}
    </a>
  );
};

const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState('Domů');

  const handleSelectItem = (text) => {
    setMenuOpened(!menuOpened);
    setPageTitle(text);
  };

  return (
    <>
      <header>
        <div className={menuOpened ? null : 'menu menu--closed'}>
          <button
            className="menu__btn"
            onClick={() => setMenuOpened(!menuOpened)}
          ></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
