/*
 * @Author: kime
 * @Date: 2022-11-21 15:33:26
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 15:50:29
 * @Description: 懒加载的页面
 */
import React, { Component } from 'react'
import { useNavigate } from 'react-router-dom'


function LazyLoadPageDemo (IProps: any, IState: any) {

    const navigate = useNavigate();

    return (
        <div className="not-found-box">
            <div className='back-box'>
                <button onClick={() => {
                    navigate(-1);
                }}>
                    返回上一页
                </button>
            </div>
            <h1>懒加载的页面</h1>
        </div>
    )
}
export default LazyLoadPageDemo