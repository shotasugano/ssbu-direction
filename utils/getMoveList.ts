import { SmashBrosCharacters, SmashBrosMoves } from "./type";

/**
 * 引数のキャラクターから技リストをfilterしreturnする関数
 */
export const getMoveList = (
  character: SmashBrosCharacters
): SmashBrosMoves[] => {
  switch (character) {
    // マリオの場合、横スマ、上スマ、後ろ投げを返す
    case SmashBrosCharacters.MARIO:
      return [
        SmashBrosMoves.FORWARD_SMASH,
        SmashBrosMoves.UP_SMASH,
        SmashBrosMoves.BACK_THROW,
      ];
    // ドンキーコングの場合、下スマ、上スマ、NB、上B、前投げ、下投げを返す
    case SmashBrosCharacters.DONKEY_KONG:
      return [
        SmashBrosMoves.DOWN_SMASH,
        SmashBrosMoves.UP_SMASH,
        SmashBrosMoves.NEUTRAL_B,
        SmashBrosMoves.UP_B,
        SmashBrosMoves.FORWARD_THROW,
        SmashBrosMoves.DOWN_THROW,
      ];
    // リンクの場合、横スマ、上スマ、上投げを返す
    case SmashBrosCharacters.LINK:
      return [
        SmashBrosMoves.FORWARD_SMASH,
        SmashBrosMoves.UP_SMASH,
        SmashBrosMoves.UP_THROW,
      ];
    // サムスの場合、上投げを返す
    case SmashBrosCharacters.SAMUS:
      return [SmashBrosMoves.UP_THROW];
    // カービィの場合、横スマ、上投げを返す
    case SmashBrosCharacters.KIRBY:
      return [SmashBrosMoves.FORWARD_SMASH, SmashBrosMoves.UP_THROW];
    // フォックスの場合、上スマを返す
    case SmashBrosCharacters.FOX:
      return [SmashBrosMoves.UP_SMASH];
    // ヨッシーの場合、横スマ、空後を返す
    case SmashBrosCharacters.YOSHI:
      return [SmashBrosMoves.FORWARD_SMASH, SmashBrosMoves.BACK_THROW];
    // ファルコンの場合、弱、上スマ、上Bを返す
    case SmashBrosCharacters.CAPTAIN_FALCON:
      return [SmashBrosMoves.JAB, SmashBrosMoves.UP_SMASH, SmashBrosMoves.UP_B];
    // ピカチュウの場合、上投げ、横スマ、下Bを返す
    case SmashBrosCharacters.PIKACHU:
      return [
        SmashBrosMoves.UP_THROW,
        SmashBrosMoves.FORWARD_SMASH,
        SmashBrosMoves.DOWN_B,
      ];
    // ネスの場合、横スマ、上スマ、後ろなげを返す
    case SmashBrosCharacters.NESS:
      return [
        SmashBrosMoves.FORWARD_SMASH,
        SmashBrosMoves.UP_SMASH,
        SmashBrosMoves.BACK_THROW,
      ];
    // プリンの場合、横スマ、下Bを返す
    case SmashBrosCharacters.JIGGLYPUFF:
      return [SmashBrosMoves.FORWARD_SMASH, SmashBrosMoves.DOWN_B];
    // ルイージの場合、DA、横スマ、上Bを返す
    case SmashBrosCharacters.LUIGI:
      return [
        SmashBrosMoves.DASH_ATTACK,
        SmashBrosMoves.FORWARD_SMASH,
        SmashBrosMoves.UP_B,
      ];
    // 他のキャラクターの場合、空のリストを返す
    default:
      return [];
  }
};
