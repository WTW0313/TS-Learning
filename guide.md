# 常见问题：

## 1、Windows ts-node命令运行报错，限制在此系统上禁止运行脚本

### 解决方案：

1. 以管理员身份打开 `PowerShell`
2. 在终端执行 `get-ExcutionPolicy`，显示`Restricted`，表示状态是禁止的
3. 在终端执行`set-ExcutionPolicy RemoteSigned`