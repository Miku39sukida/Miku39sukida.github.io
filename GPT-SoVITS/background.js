// 监听浏览器启动事件
chrome.runtime.onStartup.addListener(() => {
  console.log('扩展程序随浏览器启动');
});

// 监听扩展程序被启用的事件
chrome.runtime.onInstalled.addListener(() => {
  console.log('扩展程序已安装/更新');
});

// 简单示例：监听网络请求，暂不做实际处理
chrome.webRequest.onBeforeSendHeaders.addListener(
  (details) => {
    console.log('即将发送的请求头信息:', details.requestHeaders);
    return { requestHeaders: details.requestHeaders };
  },
  { urls: ["<all_urls>"] },
  ["blocking", "requestHeaders"]
);
