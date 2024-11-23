import React, { useState } from 'react';
import axios from 'axios';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/users/login`, { username, password });
            alert('登录成功');
            // 处理登录成功后的逻辑
        } catch (error) {
            alert('登录失败');
        }
    };

    return (
        <div>
            <h1>登录</h1>
            <form onSubmit={handleLogin}>
                <input type="text" placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">登录</button>
            </form>
        </div>
    );
};

export default LoginPage;
