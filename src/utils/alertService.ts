/**
 * Promise 기반 Alert/Confirm 서비스
 * window.alert/confirm을 대체하여 커스텀 모달을 표시합니다.
 */

export interface AlertOptions {
  type: "alert" | "confirm";
  message: string;
  title?: string;
}

type AlertHandler = (options: AlertOptions) => Promise<boolean | void>;

let showAlertFn: AlertHandler | null = null;

/**
 * AlertProvider에서 호출하여 show 함수를 등록
 */
export function registerAlertHandler(handler: AlertHandler | null): void {
  showAlertFn = handler;
}

/**
 * Alert 모달 표시 (확인 버튼만)
 * @param message - 표시할 메시지
 * @param title - 제목 (선택)
 * @returns Promise<void>
 */
export function alert(message: string, title?: string): Promise<void> {
  if (!showAlertFn) {
    window.alert(message);
    return Promise.resolve();
  }
  return showAlertFn({ type: "alert", message, title }) as Promise<void>;
}

/**
 * Confirm 모달 표시 (확인/취소 버튼)
 * @param message - 표시할 메시지
 * @param title - 제목 (선택)
 * @returns Promise<boolean> 확인: true, 취소: false
 */
export function confirm(message: string, title?: string): Promise<boolean> {
  if (!showAlertFn) {
    return Promise.resolve(window.confirm(message));
  }
  return showAlertFn({ type: "confirm", message, title }) as Promise<boolean>;
}

