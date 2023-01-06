import React from 'react';
import './globalStyles/reset.css';
import './globalStyles/global.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {routes} from "./pages/routes";
import Layout from "./components/Layout/Layout";

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    {routes.map((route) => (
                        <Route key={route.path} path={route.path} element={route.component}/>
                    ))}
                </Routes>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
