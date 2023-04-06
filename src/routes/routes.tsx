import HomePage from "../pages/homepage" //首页 
import Login_Page from "../pages/login/index" //登录页面
import NotFound from "../pages/notfound"; //404页面  

export const rootRouter = [
    {
        path: "/", //首页
        element: <HomePage />,
        meta: {
            requiresAuth: true,  //如果是需要登录的页面，需要加上这个配置内容
            title: "首页",
            key: "home"
        }
    },
    {
        path: "/login", //登录页面
        element: <Login_Page />,
        meta: {
            requiresAuth: false,  //如果是需要登录的页面，需要加上这个配置内容
            title: "登录页",
            key: "login"
        }
    },
    {
        path: "/home", //首页
        element: <HomePage />,
        meta: {
            requiresAuth: true,  //如果是需要登录的页面，需要加上这个配置内容
            title: "首页",
            key: "home"
        }
    },
    {
        path: "*", //404的页面
        element: <NotFound />
    }
];