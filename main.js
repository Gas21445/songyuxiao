$(document).ready(function() {
    $("#registerForm").submit(function(event) {
        event.preventDefault();
        var username = $("#username").val();
        var email = $("#email").val();
        var password = $("#password").val();

        if (username === "" || email === "" || password === "") {
            alert("所有字段都是必填的！");
        } else {
            alert("注册成功！");
        }
    });
});