import React from 'react';

const DisclaimerPage = () => {
    const handleRedirect = () => {
        // 处理跳转逻辑
    };

    return (
        <div>
            <h1>免责声明</h1>
            <p>请确认您要跳转到外部链接。</p>
            <button onClick={handleRedirect}>确认跳转</button>
            <button onClick={() => window.history.back()}>取消</button>
        </div>
    );
};

export default DisclaimerPage;
