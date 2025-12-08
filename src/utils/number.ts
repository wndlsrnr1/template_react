/**
 * 입력된 숫자를 gap단위만큼 ,로 분기해주는 함수
 * (ex. 10000 -> 10,000, 5000000 -> 5,000,000)
 * @param param - 파라미터 객체
 * @param param.number - 입력숫자
 * @param param.gap - 콤마 간격(기본값 3)
 * @returns 콤마가 추가된 문자열
 * @author kyeongbeom
 */
export const changeCommaNumber = ({ number, gap = 3 }: { number: number; gap?: number }): string => {
  return number
    .toString()
    .split("")
    .reverse()
    .map((ele, index) => {
      if (index % gap === 0 && index !== 0) {
        return ele + ",";
      } else {
        return ele;
      }
    })
    .reverse()
    .join("");
};

/**
 * 입력된 숫자를 최소 원하는 길이만큼 보정해주는 함수
 * (ex. 1 -> 00001, 13 -> 00013)
 * @param param - 파라미터 객체
 * @param param.number - 입력숫자
 * @param param.length - 보정길이(기본값 5)
 * @returns 앞에 0이 추가된 문자열
 * @author kyeongbeom
 */
export function formatNumber({ number, length = 5 }: { number: number; length?: number }): string {
  let wordArr = number.toString().split("");
  while (wordArr.length < length) {
    wordArr.unshift("0");
  }
  return wordArr.join("");
}

