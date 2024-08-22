import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { Header } from "./components/Header/Header";
import { Container } from "./components/Container/Container";
import { useTelegram } from "./hooks/useTelegram";
import { useLocation } from "react-router-dom";
import "./App.css";
function App() {
    // informs the Telegram app that the Web App is ready to be displayed
    Telegram.WebApp.ready();
    const { tg } = useTelegram();
    const { pathname } = useLocation();
    const backPage = () => {
        window.history.back();
    };
    tg.ready();
    if (pathname === "/") {
        tg.BackButton.hide();
    }
    else {
        tg.BackButton.show();
    }
    useEffect(() => {
        tg.BackButton.onClick(backPage);
        return () => {
            tg.BackButton.offClick(backPage);
        };
    }, [pathname]);
    return (_jsxs("main", { className: "App", children: [_jsx(Header, {}), _jsx(Container, { children: _jsx("h1", { children: "\u041B\u0438\u0437\u043E\u0447\u043A\u0430" }) })] }));
}
export default App;
