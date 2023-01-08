function resetKey(inKey) {
    key = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(inKey).toString());
    iv = CryptoJS.enc.Utf8.parse(CryptoJS.MD5(key).toString().substr(0, 16));
}

function encrypt(data, inKey) {
    resetKey(inKey);

    var encrypted = '';
    if (typeof (data) == 'string') {
        encrypted = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        });
    } else if (typeof (data) == 'object') {
        data = JSON.stringify(data);
        encrypted = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.ZeroPadding
        })
    }
    return encrypted.toString();
}
/*AES解密
* param : message 密文
* return : decrypted string 明文
*/
function decrypt(message, inKey) {
    resetKey(inKey);

    decrypted = '';
    decrypted = CryptoJS.AES.decrypt(message, key, {
        iv: iv,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.ZeroPadding
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
}