# 三方接入指南（MVP）

## 可用扩展点
- 事件总线：`eventBus.emit/on/off`
- 生命周期：`registerLifecycleHook` / `runLifecycleHook`
- 能力注册：`capabilityRegistry.register/get`

## 接入模式
1. 通过插件 manifest 注册菜单、路由、权限。
2. 在插件启动阶段声明 capability。
3. 通过 lifecycle 在应用关键节点注入逻辑。

## 安全建议
- 三方调用建议附带签名（timestamp + nonce + signature），推荐 `HMAC-SHA256(secret, method + path + body + timestamp + nonce)`。
- 对外接口需限流并记录审计日志。
- 默认白名单机制控制来源。


### 签名示例（伪代码）
```text
base = method + path + body + timestamp + nonce
signature = HMAC_SHA256(secret, base)
```
