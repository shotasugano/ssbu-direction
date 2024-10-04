import { useSearchParams } from "next/navigation";
import { SmashBrosCharacters, SmashBrosMoves } from "./type";
import { getValidatedQueryParams } from "./getValidatedQueryParams";

/**
 * クエリパラメーターから値を取得する関数
 */
export const useDefaultValueByQuery = (): {
  character: keyof typeof SmashBrosCharacters | undefined;
  move: keyof typeof SmashBrosMoves | undefined;
} => {
  const searchParams = useSearchParams();

  if (!searchParams) {
    return {
      character: undefined,
      move: undefined,
    };
  }

  const characterInput = searchParams.get("character");
  const moveInput = searchParams.get("move");

  return getValidatedQueryParams(characterInput, moveInput);
};
