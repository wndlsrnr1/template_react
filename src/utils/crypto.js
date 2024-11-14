import CryptoJS from 'crypto-js';

const crypto = {
  /**
   * 암호화
   * @param {any} word 암호화할 단어
   * @returns {string}
   * @author kyeongbeom
   */
  encrypt: (word) => {
    return CryptoJS.AES.encrypt(word, import.meta.env.VITE_AES_KEY).toString();
  },

  /**
   * 복호화
   * @param {any} encrypt 복호화할 단어
   * @returns {string}
   * @author kyeongbeom
   */
  decrypt: (encrypt) => {
    return CryptoJS.AES.decrypt(encrypt, import.meta.env.VITE_AES_KEY).toString(
      CryptoJS.enc.Utf8
    );
  },
};

export default crypto;
