import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">首页</Link></li>
        <li><Link to="/login" className="text-white">登录</Link></li>
        <li><Link to="/register" className="text-white">注册</Link></li>
        <li><Link to="/user" className="text-white">用户中心</Link></li>
        <li><Link to="/bookmarks" className="text-white">书签</Link></li>
        <li><Link to="/settings" className="text-white">设置</Link></li>
        <li><Link to="/disclaimer" className="text-white">免责声明</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
