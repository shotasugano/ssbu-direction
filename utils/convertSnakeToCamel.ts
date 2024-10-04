import { SsbuResponse } from "./type";

/**
 * 取得したデータのkeyがテーブルの命名規則(スネークケース)になっているので、キャメルケースに変換する
 *
 */
export const convertSnakeToCamel = (
  data: Record<string, unknown>
): SsbuResponse => {
  const camelData = Object.keys(data).reduce(
    (acc: Record<string, unknown>, key: string) => {
      const camelKey = key.replace(/_([a-z])/g, (g) => g[1].toUpperCase());
      acc[camelKey] = data[key];
      return acc;
    },
    {}
  );

  return camelData as SsbuResponse;
};
