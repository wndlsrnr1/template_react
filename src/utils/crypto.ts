import CryptoJS from "crypto-js";

const crypto = {
  /**
   * 암호화
   * @param word - 암호화할 단어
   * @returns 암호화된 문자열
   * @author kyeongbeom
   */
  encrypt: (word: string): string => {
    const key = import.meta.env.VITE_AES_KEY;
    if (!key) {
      throw new Error("VITE_AES_KEY is not defined");
    }
    return CryptoJS.AES.encrypt(word, key).toString();
  },

  /**
   * 복호화
   * @param encrypt - 복호화할 단어
   * @returns 복호화된 문자열
   * @author kyeongbeom
   */
  decrypt: (encrypt: string): string => {
    const key = import.meta.env.VITE_AES_KEY;
    if (!key) {
      throw new Error("VITE_AES_KEY is not defined");
    }
    return CryptoJS.AES.decrypt(encrypt, key).toString(CryptoJS.enc.Utf8);
  },
};

export default crypto;
