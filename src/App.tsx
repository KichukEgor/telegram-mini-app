import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import { ProductList } from "./components/ProductList/ProductList";
import { Product } from "./components/Product/Product";
import { useTelegram } from "./hooks/useTelegram";

import "./App.css";

function App() {
  const { tg } = useTelegram();
  const { pathname } = useLocation();

  const backPage = () => {
    window.history.back();
  };

  tg.ready();

  if (pathname === "/") {
    tg.BackButton.hide();
  } else {
    tg.BackButton.show();
  }

  useEffect(() => {
    tg.BackButton.onClick(backPage);
    return () => {
      tg.BackButton.offClick(backPage);
    };
  }, [pathname]);

  return (
    <main className="App">
      <Header />
      <Container>
        <Routes >
          <Route index path="/telegram-mini-app" element={<ProductList />} />
          <Route path="/telegram-mini-app/product/:id" element={<Product />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
