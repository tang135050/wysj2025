// 1. 导航栏滚动效果（滚动时改变导航样式）
window.addEventListener('scroll', function() {
    const nav = document.querySelector('.nav');
    if (window.scrollY > 50) { // 滚动超过50px时
        nav.style.backgroundColor = "#FFE6F2";
        nav.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
    } else {
        nav.style.backgroundColor = "#F8F9FA";
        nav.style.boxShadow = "0 2px 5px rgba(0,0,0,0.1)";
    }
});

// 2. 通用表单验证（比如留言表单）
function checkForm(formId) {
    const form = document.getElementById(formId);
    const inputs = form.querySelectorAll('input, textarea');
    let isOk = true;
    inputs.forEach(input => {
        if (input.required && input.value.trim() === "") {
            alert(`请填写${input.previousElementSibling.innerText}`);
            isOk = false;
            return;
        }
    });
    return isOk;
}

// 3. 页面加载提示
window.addEventListener('load', function() {
    console.log("页面加载完成！"); // 控制台提示（可选）
    // 也可以加“加载完成”动画，比如隐藏加载遮罩
});