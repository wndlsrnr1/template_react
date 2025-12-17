/**
 * API 설정 중앙 관리
 * 로딩 스피너 제외 엔드포인트, 인증 제외 엔드포인트 등을 관리
 */

// 로딩 스피너에서 제외할 엔드포인트 패턴 목록
export const LOADING_EXCLUDED_ENDPOINTS = ["/v1/accounts/token/refresh/", "/analysis-progress/"];

// 인증이 필요 없는 엔드포인트 패턴 목록
export const AUTH_EXCLUDED_ENDPOINTS = ["/v1/accounts/login/", "/v1/accounts/signup/", "/v1/accounts/profile/"];

/**
 * URL이 로딩 스피너 제외 목록에 포함되는지 확인
 * @param url - 확인할 URL
 * @returns 제외 목록에 포함되면 true
 */
export function isExcludedFromLoading(url: string | null | undefined): boolean {
  if (!url) return false;
  return LOADING_EXCLUDED_ENDPOINTS.some((endpoint) => url.includes(endpoint));
}

/**
 * URL이 인증 제외 목록에 포함되는지 확인
 * @param url - 확인할 URL
 * @returns 제외 목록에 포함되면 true
 */
export function isExcludedFromAuth(url: string | null | undefined): boolean {
  if (!url) return false;
  return AUTH_EXCLUDED_ENDPOINTS.some((endpoint) => url.includes(endpoint));
}

