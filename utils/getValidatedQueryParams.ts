import { SmashBrosCharacters, SmashBrosMoves } from "./type";

/**
 * クエリパラメーターのバリデーションを行う関数、不正な場合はundefinedを返す
 */
export const getValidatedQueryParams = (
  characterInput: string | null,
  moveInput: string | null
): {
  character: keyof typeof SmashBrosCharacters | undefined;
  move: keyof typeof SmashBrosMoves | undefined;
} => {
  if (
    characterInput &&
    Object.values(SmashBrosCharacters).includes(
      characterInput as SmashBrosCharacters
    ) &&
    moveInput &&
    Object.values(SmashBrosMoves).includes(moveInput as SmashBrosMoves)
  ) {
    return {
      character: characterInput as keyof typeof SmashBrosCharacters,
      move: moveInput as keyof typeof SmashBrosMoves,
    };
  }

  return {
    character: undefined,
    move: undefined,
  };
};
