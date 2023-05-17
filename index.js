// Your code goes here
//在 index.js 中编写你的解决方案。
//首先，设置一个 DOMContentLoaded 事件监听器，以便在 HTML 页面加载完成并且文档准备好进行操作时进行检测。
//使用事件的回调函数来选取具有 id="text" 的段落元素，
//并将文本替换为 "This is really cool!"。
document.addEventListener("DOMContentLoaded", function (e) {
    let text = document.getElementById("text")
    text.textContent = "This is really cool!"
})

