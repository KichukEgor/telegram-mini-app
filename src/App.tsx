import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import { ProductList } from "./components/ProductList/ProductList";
import { Product } from "./components/Product/Product";
import { useTelegram } from "./hooks/useTelegram";

import "./App.css";

function App() {
  // informs the Telegram app that the Web App is ready to be displayed
  Telegram.WebApp.ready()
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
        <Routes>
          <Route index element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
