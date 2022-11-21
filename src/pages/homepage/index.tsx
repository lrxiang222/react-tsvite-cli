/*
 * @Author: kime
 * @Date: 2022-11-18 15:20:05
 * @LastEditors: kime
 * @LastEditTime: 2022-11-21 15:57:58
 * @Description: 
 */
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'
import './home.scss'

function HomePage () {
    const [count, setCount] = useState(0)
    const navigate = useNavigate();

    return (
        <div className="homepage">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <button onClick={() => {
                    navigate("/notFound");
                }}>
                    Not Found
                </button>

                <button
                    onClick={() => {
                        navigate("/lazyloadpage");
                    }}
                >
                    Open LazyLoadPage
                </button>
                <button
                    onClick={() => {
                        navigate("/reduxdemopage");
                    }}
                >
                    Open ReduxDemoPage
                </button>
            </div>
        </div>
    )
}

export default HomePage;
