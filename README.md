```markdown
# 多功能导航网站

## 项目概述
这是一个多功能的导航网站，提供用户认证、个性化主页、社交功能等。

## 技术栈
- 前端: React
- 后端: Node.js + Express
- 数据库: MongoDB

## 安装与运行

### 后端
1. 进入 `backend` 目录
2. 安装依赖: 
   ```bash
   npm install
   ```
3. 启动服务器: 
   ```bash
   npm start
   ```

### 前端
1. 进入 `frontend` 目录
2. 安装依赖: 
   ```bash
   npm install
   ```
3. 启动前端: 
   ```bash
   npm start
   ```

## 部署指南

### 1. 在虚拟主机上部署

1. **准备服务器**:
   - 确保您的虚拟主机支持 Node.js 和 MongoDB。
   - 安装 Node.js 和 npm。

2. **上传代码**:
   - 使用 FTP 或 SSH 将 `backend` 和 `frontend` 文件夹上传到服务器。

3. **数据库设置**:
   - 在 MongoDB 上创建数据库并获取连接字符串。
   - 在 `backend/.env` 文件中设置 `MONGODB_URI`。

4. **安装依赖**:
   - SSH 登录到服务器，进入 `backend` 目录，运行:
     ```bash
     npm install
     ```

5. **启动后端**:
   - 使用 `pm2` 或 `forever` 启动后端服务:
     ```bash
     pm2 start server.js
     ```

6. **前端构建**:
   - 进入 `frontend` 目录，运行:
     ```bash
     npm run build
     ```
   - 将生成的 `build` 文件夹上传到服务器的公共目录（如 `public_html`）。

7. **配置 Nginx** (可选):
   - 配置 Nginx 以反向代理到 Node.js 应用。

### 2. 在 Cloudflare Pages 上部署

1. **创建 Cloudflare 账户**:
   - 登录或注册 Cloudflare 账户。

2. **创建新项目**:
   - 在 Cloudflare Pages 中创建新项目，连接到您的 GitHub 仓库。

3. **配置构建设置**:
   - 设置框架为 React。
   - 构建命令: `npm run build`
   - 发布目录: `frontend/build`

4. **部署**:
   - 点击部署，Cloudflare 将自动构建并部署您的前端应用。

### 3. 在 Vercel 上部署

1. **创建 Vercel 账户**:
   - 登录或注册 Vercel 账户。

2. **导入项目**:
   - 从 GitHub 导入项目，选择前端文件夹。

3. **配置构建设置**:
   - Vercel 会自动检测到 React 项目，您只需确认构建命令和输出目录。

4. **部署**:
   - 点击部署，Vercel 将自动构建并部署您的前端应用。

5. **后端部署**:
   - 对于后端，您可以使用 Vercel 的 Serverless Functions 功能，创建一个新的文件夹（如 `/api`），将后端代码放入其中。

### 4. 在 GitHub Pages 上部署

1. **构建前端**:
   - 进入 `frontend` 目录，运行:
     ```bash
     npm run build
     ```

2. **上传构建文件**:
   - 将 `build` 文件夹中的内容上传到 GitHub 仓库的 `gh-pages` 分支。

3. **启用 GitHub Pages**:
   - 在 GitHub 仓库设置中，启用 GitHub Pages，选择 `gh-pages` 分支作为源。

## 其他注意事项

- 确保在生产环境中使用安全的 JWT 密钥。
- 可以根据需要扩展功能，例如添加多语言支持、社交功能等。
- 定期更新依赖以保持安全性和性能。

## 许可证
本项目采用 MIT 许可证。
```