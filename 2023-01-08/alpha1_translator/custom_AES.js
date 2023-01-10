// 加密
function encrypt(word, key) {
    let iv = CryptoJS.enc.Utf8.parse('');
    let srcs = CryptoJS.enc.Utf8.parse(word);
  
    let encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return encrypted.toString();
  }
  // 解密
  function decrypt(word, key) {
    let iv = CryptoJS.enc.Utf8.parse('');
  
    var decrypt = CryptoJS.AES.decrypt(word, key, {
      iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    });
    return decrypt.toString(CryptoJS.enc.Utf8);
  }