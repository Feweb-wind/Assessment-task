const host = "https://autumnfish.cn/";

function emailLogin(account, _password) {
    return new Promise(function (resolve, reject) {
        $.ajax({
            tyep: "POST",
            url: host + "login",
            data: {
                email: account,
                password: _password,
            },
            datatype: "json",
            success: function (data) {
                resolve(data);
            }

        })
    })
}
export { emailLogin }