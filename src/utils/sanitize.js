import sanitizeHtml from 'sanitize-html';

/**
 * HTML 마크업을 xss공격을 방지하기 위해 sanitize해주는 함수
 * @param {String} html - HTML 마크업
 * @returns {String} - sanitize된 HTML 마크업
 * @link https://github.com/apostrophecms/sanitize-html
 * @author kyeongbeom
 */
export const sanitize = (html) => {
	return sanitizeHtml(html);
};
