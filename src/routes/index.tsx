/*
 * @Author: kime
 * @Date: 2022-06-29 17:34:01
 * @LastEditors: kime
 * @LastEditTime: 2023-04-04 15:09:42
 * @Description: 跟路由管理
 */
import { useRoutes } from "react-router-dom"; //使用路由的hooks
import { rootRouter } from "./routes"; //路由的列表管理

//页面容器
const PageRoutes = () => {
    const routes = useRoutes(rootRouter);
    return routes;
};
export default PageRoutes;