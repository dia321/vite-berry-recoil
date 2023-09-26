import { RecoilRoot } from 'recoil';

import './App.css';

import { Link, useLocation } from 'react-router-dom';
import { AppRouter } from './AppRouter';
import { useEffect, useState } from 'react';

function App() {
  const { pathname } = useLocation();
  const [root, setRoot] = useState(true);

  useEffect(() => {
    setRoot(pathname === '/' ? true : false);
  }, [pathname]);
  return (
    <RecoilRoot>
      {!root && (
        <Link to="/">
          <button>back</button>
        </Link>
      )}
      {root && (
        <>
          <Link to="/text">
            <button>text</button>
          </Link>
          <Link to="/d3">
            <button>d3chart</button>
          </Link>
          <Link to="/dog">
            <button>dog</button>
          </Link>
          <Link to="/infinite">
            <button>infinite</button>
          </Link>
        </>
      )}
      <AppRouter />
    </RecoilRoot>
  );
}

export default App;
