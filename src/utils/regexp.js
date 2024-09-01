// 정규식 검사 모듈
export const validate = {
	/**
	 * ID 정규식 체크
	 * 영문 6자 이상
	 * @author taehyun
	 * @param  {String} value 입력값
	 */
	checkId: (value) => {
		const regx = /(?=.*\d)(?=.*[a-zA-ZS]).{6,}/; // 영문 6자 이상
		return regx.test(value);
	},

	/**
	 * PW 정규식 체크
	 * 8~32자의 영문+숫자+특수문자
	 * @author taehyun
	 * @param  {String} value 입력값
	 */
	checkPw: (value) => {
		const regx = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,32}$/; // 8~32자의 영문+숫자+특수문자
		return regx.test(value);
	},

	/**
	 * EMAIL 정규식 체크
	 * 이메일 형식
	 * @author taehyun
	 * @param  {String} value 입력값
	 */
	checkEmail: (value) => {
		const regx = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/; // 이메일 형식
		return regx.test(value);
	},

	/**
	 * 전화번호 정규식 체크
	 * 숫자만 11자리
	 * @author taehyun
	 * @param  {String} value 입력값
	 */
	checkPhone: (value) => {
		const regx = /[0-9]{11,11}/; // 숫자만 11자리
		return regx.test(value);
	},

	/**
	 * 년도 정규식 체크
	 * 숫자만 4자리
	 * @author taehyun
	 * @param  {String} value 입력값
	 */
	checkYear: (value) => {
		const regx = /[0-9]{4,4}/; // 숫자만 4자리
		return regx.test(value);
	},

	/**
	 * 월 정규식 체크
	 * 숫자만 두 자리
	 * @author taehyun
	 * @param  {String} value 입력값
	 */
	checkMonth: (value) => {
		const regx = /[0-9]{2,2}/; // 숫자만 2자리
		return regx.test(value);
	},
};
