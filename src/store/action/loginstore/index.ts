/*
 * @Author: kime
 * @Date: 2022-06-29 14:32:09
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 14:42:26
 * @Description: redux 的Action 状态管理
 */

import { LOGINSTATUS } from "../../actiontypes"

/**
 * 设置登录的Token
 * @param value token的值
 * @returns 
 */
export function setLoginToken (value: any) {
    return {
        type: LOGINSTATUS,
        value: value
    }
}