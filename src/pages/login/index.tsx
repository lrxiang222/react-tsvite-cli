import React from 'react';
import { Form, useNavigate } from 'react-router-dom';

function LoginPage (props: any) {
    const navigate = useNavigate();

    const login = async (value: any) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    code: 200,
                    data: {
                        token: "member login token"
                    }
                })
            }, 1000);
        })
    }

    // 提交按钮事件
    const onFinish = async (values: any) => {
        let res: any = await login(values);
        if (res && res.data && res.code == 200) {
            localStorage.setItem("token", res.data.token)
            navigate("/home");
            // window.location.href = window.location.origin + "/";
        }
    };
    return (
        <div className='login-form-box'>
            <div
                className="form-username"
            >
                <input
                    placeholder="请输入号码"
                />
            </div>
            <div
                className="form-password"
            >
                <input
                    placeholder="请输入密码"
                />
            </div>

            <div
                className="form-submit">
                <button
                    onClick={onFinish}
                    className="login-form-button"
                >
                    登 录
                </button>
            </div>
        </div>
    );
}

export default LoginPage;