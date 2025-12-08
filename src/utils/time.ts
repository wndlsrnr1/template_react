import dayjs from "dayjs";

interface DiffTimeResult {
  year: number;
  month: number;
  week: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
}

// 시간 및 날짜 관련 모듈
export const time = {
  /**
   * 현재 날짜 값을 반환하는 함수
   *
   * @author kyeongbeom
   * @returns 현재 날짜 값
   */
  getCurrentTime: (): string => {
    return dayjs().format();
  },

  /**
   * 원하는 포맷으로 날짜값 변환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @param format - 변환할 포맷
   * @returns 해당 날짜 값을 입력한 포맷대로 변환하여 반환
   */
  getFormatTime: (time: string | Date, format: string): string => {
    return dayjs(time).format(format);
  },

  /**
   * 년도 반환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 '년도' 값 반환
   */
  getYear: (time: string | Date): number => {
    return dayjs(time).get("year");
  },

  /**
   * 달 반환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 '월' 값 반환
   */
  getMonth: (time: string | Date): number => {
    return dayjs(time).get("month") + 1;
  },

  /**
   * 일 반환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 '일' 값 반환
   */
  getDate: (time: string | Date): number => {
    return dayjs(time).get("date");
  },

  /**
   * 요일 반환(한글)
   *
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 요일 값 한글 반환 (일:0 ~ 토:6)
   * @author kyeongbeom
   */
  getKoDay: (time: string | Date): string => {
    const dateList = ["일", "월", "화", "수", "목", "금", "토"];
    const day = dayjs(time).get("day");
    return dateList[day] ?? "";
  },

  /**
   * 요일 반환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 요일 값 반환 (일:0 ~ 토:6)
   */
  getDay: (time: string | Date): number => {
    return dayjs(time).get("day");
  },

  /**
   * 시간 반환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 '시간' 값 반환
   */
  getHour: (time: string | Date): number => {
    return dayjs(time).get("hour");
  },

  /**
   * 분 반환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 '분' 값 반환
   */
  getMinute: (time: string | Date): number => {
    return dayjs(time).get("minute");
  },

  /**
   * 초 반환
   *
   * @author kyeongbeom
   * @param time - 날짜 값
   * @returns 해당 날짜 값 중 '초'
   */
  getSecond: (time: string | Date): number => {
    return dayjs(time).get("second");
  },

  /**
   * 두 시간의 차이를 반환
   *
   * @author kyeongbeom
   * @param time1 - 날짜 값
   * @param time2 - 날짜 값
   * @returns 두 시간의 차이를 년도, 달, 주, 일, 시간, 분, 초로 저장하여 반환
   */
  getdiffTime: (time1: string | Date, time2: string | Date): DiffTimeResult => {
    let t1 = dayjs(time1);
    let t2 = dayjs(time2);
    t1.format("YYYY-MM-DD HH:mm:ss");
    t2.format("YYYY-MM-DD HH:mm:ss");

    const response: DiffTimeResult = {
      year: t1.diff(t2, "year"),
      month: t1.diff(t2, "month"),
      week: t1.diff(t2, "week"),
      day: t1.diff(t2, "day"),
      hour: t1.diff(t2, "hour"),
      minute: t1.diff(t2, "minute"),
      second: t1.diff(t2, "second"),
    };

    return response;
  },

  /**
   * 날짜가 지정한 시간 단위에서 특정 날짜와 일치하는지 구하기
   *
   * @author kyeongbeom
   * @param time1 - 날짜 값
   * @param time2 - 날짜 값
   * @returns 두 날짜 (y-m-d)가 같은지 다른지 boolean 값으로 반환
   */
  isSameTime: (time1: string | Date, time2: string | Date): boolean => {
    let date = dayjs(time1);
    return date.isSame(time2);
  },

  /**
   * 날짜가 지정한 시작, 종료 시간에 포함되는지 여부 반환하기
   *
   * @author kyeongbeom
   * @param startTime - 시작 날짜 값
   * @param endTime - 종료 날짜 값
   * @param compareTime - 비교할 날짜 값 undefined로 넣으면 자동으로 오늘 날짜로 대체됨
   * @returns {compareTime}이 {startTime}과 {endTime} 사이의 값인지 여부 반환
   */
  isBetweenTime: (startTime: string | Date, endTime: string | Date, compareTime?: string | Date): boolean => {
    let compare = dayjs(compareTime);

    return compare.isAfter(startTime) && compare.isBefore(endTime);
  },

  /**
   * 초를 입력하면 HH:mm:ss 형식으로 반환해주는 함수
   * @param seconds - 초
   * @returns HH:mm:ss 형식의 문자열
   * @author kyeongbeom
   */
  formatHHmmss: (seconds: number): string => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");
    return `${h}:${m}:${s}`;
  },
};
