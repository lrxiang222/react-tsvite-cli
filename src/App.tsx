/*
 * @Author: kime
 * @Date: 2022-06-28 16:32:13
 * @LastEditors: kime
 * @LastEditTime: 2023-04-06 11:28:23
 * @Description: 根组件
 */

import PageRoutes from "./routes";
import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AuthRouter from "./routes/auth";

function App () {
    return (
        <div className="App">
            <BrowserRouter>
                <AuthRouter>
                    <PageRoutes />
                </AuthRouter>
            </BrowserRouter>
        </div>
    );
}
export default App;
