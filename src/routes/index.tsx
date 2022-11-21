/*
 * @Author: kime
 * @Date: 2022-11-21 15:03:40
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 15:57:37
 * @Description: 
 */
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "../pages/homepage"; //首页
import LoadingPage from "../pages/loadingpage/index"; //加载过渡页面
import NotFound from "../pages/notfound"; //404页面


// React 组件懒加载
const Lazyloadpage = React.lazy(() => import("../pages/lazyloadpage/index"));
const ReduxDemoPages = React.lazy(() => {
    return import("../pages/reduxpages/index");
})

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}></Route>
                <Route
                    path="/lazyloadpage"
                    element={
                        <React.Suspense fallback={<LoadingPage />} >
                            <Lazyloadpage />
                        </React.Suspense>
                    }
                ></Route>
                <Route
                    path="/reduxdemopage"
                    element={
                        <React.Suspense fallback={<LoadingPage />} >
                            <ReduxDemoPages />
                        </React.Suspense>
                    }
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </Router>)
}

export default PageRoutes;