/**
 * クエリパラメーターから値を取得する関数
 */
export const getQuery = (key: string): string | null => {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
};
