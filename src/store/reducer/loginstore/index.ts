/*
 * @Author: kime
 * @Date: 2022-06-29 14:13:22
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 14:43:22
 * @Description:
 */
import { LOGINSTATUS } from "../../actiontypes/index";

let loginState = {
    token: "", //登录的状态管理token
};

export default function loginStore (
    state: any = loginState,
    action: { value: string; type: string }
) {
    switch (action.type) {
        case LOGINSTATUS:
            return {
                token: action.value,
            };
        default:
            return state;
    }
}
