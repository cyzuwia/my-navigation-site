import React, { useState } from 'react';
import axios from 'axios';

const RegisterPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            await axios.post(`${process.env.REACT_APP_API_URL}/users/register`, { username, password });
            alert('注册成功');
            // 处理注册成功后的逻辑
        } catch (error) {
            alert('注册失败');
        }
    };

    return (
        <div>
            <h1>注册</h1>
            <form onSubmit={handleRegister}>
                <input type="text" placeholder="用户名" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input type="password" placeholder="密码" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">注册</button>
            </form>
        </div>
    );
};

export default RegisterPage;
