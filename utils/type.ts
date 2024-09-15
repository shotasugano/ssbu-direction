/**
 * スマブラキャラ
 */
export const SmashBrosCharacters = {
  MARIO: "MARIO",
  DONKEY_KONG: "DONKEY_KONG",
  LINK: "LINK",
  SAMUS: "SAMUS",
  DARK_SAMUS: "DARK_SAMUS",
  YOSHI: "YOSHI",
  KIRBY: "KIRBY",
  FOX: "FOX",
  PIKACHU: "PIKACHU",
  LUIGI: "LUIGI",
  NESS: "NESS",
  CAPTAIN_FALCON: "CAPTAIN_FALCON",
  JIGGLYPUFF: "JIGGLYPUFF",
  PEACH: "PEACH",
  DAISY: "DAISY",
  BOWSER: "BOWSER",
  ICE_CLIMBERS: "ICE_CLIMBERS",
  SHEIK: "SHEIK",
  ZELDA: "ZELDA",
  DR_MARIO: "DR_MARIO",
  PICHU: "PICHU",
  FALCO: "FALCO",
  MARTH: "MARTH",
  LUCINA: "LUCINA",
  YOUNG_LINK: "YOUNG_LINK",
  GANONDORF: "GANONDORF",
  MEWTWO: "MEWTWO",
  ROY: "ROY",
  CHROM: "CHROM",
  MR_GAME_AND_WATCH: "MR_GAME_AND_WATCH",
  META_KNIGHT: "META_KNIGHT",
  PIT: "PIT",
  DARK_PIT: "DARK_PIT",
  ZERO_SUIT_SAMUS: "ZERO_SUIT_SAMUS",
  WARIO: "WARIO",
  SNAKE: "SNAKE",
  IKE: "IKE",
  POKEMON_TRAINER: "POKEMON_TRAINER",
  DIDDY_KONG: "DIDDY_KONG",
  LUCAS: "LUCAS",
  SONIC: "SONIC",
  KING_DEDEDE: "KING_DEDEDE",
  OLIMAR: "OLIMAR",
  LUCARIO: "LUCARIO",
  R_O_B: "R_O_B",
  TOON_LINK: "TOON_LINK",
  WOLF: "WOLF",
  VILLAGER: "VILLAGER",
  MEGA_MAN: "MEGA_MAN",
  WII_FIT_TRAINER: "WII_FIT_TRAINER",
  ROSALINA_AND_LUMA: "ROSALINA_AND_LUMA",
  LITTLE_MAC: "LITTLE_MAC",
  GRENINJA: "GRENINJA",
  PALUTENA: "PALUTENA",
  PAC_MAN: "PAC_MAN",
  ROBIN: "ROBIN",
  SHULK: "SHULK",
  BOWSER_JR: "BOWSER_JR",
  DUCK_HUNT: "DUCK_HUNT",
  RYU: "RYU",
  KEN: "KEN",
  CLOUD: "CLOUD",
  CORRIN: "CORRIN",
  BAYONETTA: "BAYONETTA",
  INKLING: "INKLING",
  RIDLEY: "RIDLEY",
  SIMON: "SIMON",
  RICHTER: "RICHTER",
  KING_K_ROOL: "KING_K_ROOL",
  ISABELLE: "ISABELLE",
  INCINEROAR: "INCINEROAR",
  PIRANHA_PLANT: "PIRANHA_PLANT",
  JOKER: "JOKER",
  HERO: "HERO",
  BANJO_AND_KAZOOIE: "BANJO_AND_KAZOOIE",
  TERRY: "TERRY",
  BYLETH: "BYLETH",
  MIN_MIN: "MIN_MIN",
  STEVE: "STEVE",
  SEPHIROTH: "SEPHIROTH",
  PYRA: "PYRA",
  MYTHRA: "MYTHRA",
  KAZUYA: "KAZUYA",
  SORA: "SORA",
} as const;

export type SmashBrosCharacters =
  (typeof SmashBrosCharacters)[keyof typeof SmashBrosCharacters];

/**
 * キャララベル
 */
export const SmashBrosCharacterLabels = {
  MARIO: "マリオ",
  DONKEY_KONG: "ドンキーコング",
  LINK: "リンク",
  SAMUS: "サムス",
  DARK_SAMUS: "ダークサムス",
  YOSHI: "ヨッシー",
  KIRBY: "カービィ",
  FOX: "フォックス",
  PIKACHU: "ピカチュウ",
  LUIGI: "ルイージ",
  NESS: "ネス",
  CAPTAIN_FALCON: "キャプテン・ファルコン",
  JIGGLYPUFF: "プリン",
  PEACH: "ピーチ",
  DAISY: "デイジー",
  BOWSER: "クッパ",
  ICE_CLIMBERS: "アイスクライマー",
  SHEIK: "シーク",
  ZELDA: "ゼルダ",
  DR_MARIO: "ドクターマリオ",
  PICHU: "ピチュー",
  FALCO: "ファルコ",
  MARTH: "マルス",
  LUCINA: "ルキナ",
  YOUNG_LINK: "こどもリンク",
  GANONDORF: "ガノンドロフ",
  MEWTWO: "ミュウツー",
  ROY: "ロイ",
  CHROM: "クロム",
  MR_GAME_AND_WATCH: "Mr.ゲーム＆ウォッチ",
  META_KNIGHT: "メタナイト",
  PIT: "ピット",
  DARK_PIT: "ブラックピット",
  ZERO_SUIT_SAMUS: "ゼロスーツサムス",
  WARIO: "ワリオ",
  SNAKE: "スネーク",
  IKE: "アイク",
  POKEMON_TRAINER: "ポケモントレーナー",
  DIDDY_KONG: "ディディーコング",
  LUCAS: "リュカ",
  SONIC: "ソニック",
  KING_DEDEDE: "デデデ",
  OLIMAR: "ピクミン＆オリマー",
  LUCARIO: "ルカリオ",
  R_O_B: "ロボット",
  TOON_LINK: "トゥーンリンク",
  WOLF: "ウルフ",
  VILLAGER: "むらびと",
  MEGA_MAN: "ロックマン",
  WII_FIT_TRAINER: "Wii Fit トレーナー",
  ROSALINA_AND_LUMA: "ロゼッタ＆チコ",
  LITTLE_MAC: "リトル・マック",
  GRENINJA: "ゲッコウガ",
  PALUTENA: "パルテナ",
  PAC_MAN: "パックマン",
  ROBIN: "ルフレ",
  SHULK: "シュルク",
  BOWSER_JR: "クッパJr.",
  DUCK_HUNT: "ダックハント",
  RYU: "リュウ",
  KEN: "ケン",
  CLOUD: "クラウド",
  CORRIN: "カムイ",
  BAYONETTA: "ベヨネッタ",
  INKLING: "インクリング",
  RIDLEY: "リドリー",
  SIMON: "シモン",
  RICHTER: "リヒター",
  KING_K_ROOL: "キングクルール",
  ISABELLE: "しずえ",
  INCINEROAR: "ガオガエン",
  PIRANHA_PLANT: "パックンフラワー",
  JOKER: "ジョーカー",
  HERO: "勇者",
  BANJO_AND_KAZOOIE: "バンジョー＆カズーイ",
  TERRY: "テリー",
  BYLETH: "ベレト/ベレス",
  MIN_MIN: "ミェンミェン",
  STEVE: "スティーブ",
  SEPHIROTH: "セフィロス",
  PYRA: "ホムラ",
  MYTHRA: "ヒカリ",
  KAZUYA: "カズヤ",
  SORA: "ソラ",
} as const;

/**
 * 技
 */
export const SmashBrosMoves = {
  JAB: "JAB",
  DASH_ATTACK: "DASH_ATTACK",
  FORWARD_TILT: "FORWARD_TILT",
  UP_TILT: "UP_TILT",
  DOWN_TILT: "DOWN_TILT",
  FORWARD_SMASH: "FORWARD_SMASH",
  UP_SMASH: "UP_SMASH",
  DOWN_SMASH: "DOWN_SMASH",
  NEUTRAL_B: "NEUTRAL_B",
  SIDE_B: "SIDE_B",
  UP_B: "UP_B",
  DOWN_B: "DOWN_B",
} as const;

export type SmashBrosMoves =
  (typeof SmashBrosMoves)[keyof typeof SmashBrosMoves];
/**
 * 技ラベル
 */
export const SmashBrosMoveLabels = {
  JAB: "弱攻撃",
  DASH_ATTACK: "ダッシュ攻撃",
  FORWARD_TILT: "横強",
  UP_TILT: "上強",
  DOWN_TILT: "下強",
  FORWARD_SMASH: "横スマッシュ",
  UP_SMASH: "上スマッシュ",
  DOWN_SMASH: "下スマッシュ",
  NEUTRAL_B: "通常必殺技",
  SIDE_B: "横必殺技",
  UP_B: "上必殺技",
  DOWN_B: "下必殺技",
} as const;

/*
 *位置
 */

export const Position = {
  Center: "Center",
  End: "End",
} as const;

export type Position = (typeof Position)[keyof typeof Position];

export type PositionCenter = typeof Position.Center;

export type PositionEnd = typeof Position.End;

/**
 * 位置ラベル
 */
export const PositionLabel = {
  Center: "開始位置",
  End: "崖端",
};

// ベク変の方向
export const Direction = {
  Up: "Up",
  UpperOutside: "Upper Outside",
  Outside: "Outside",
  LowerOutside: "Lower Outside",
  Down: "Down",
  LowerInside: "Lower Inside",
  Inside: "Inside",
  UpperInside: "Upper Inside",
} as const;

export type Direction = (typeof Direction)[keyof typeof Direction];

/**
 * ベク変の方向ラベル
 */
export const DirectionLabel = {
  Up: "上",
  UpperOutside: "上外",
  Outside: "外",
  LowerOutside: "下外",
  Down: "下",
  LowerInside: "下内",
  Inside: "内",
  UpperInside: "上内",
};

/**
 * テーブルの型定義
 */
export type SsbuTableStatus = {
  id: number;
  character: SmashBrosCharacters;
  move: SmashBrosMoves;
  positionCenter: PositionCenter;
  normalPercentageCenter: number;
  correctDirectionCenter: Direction;
  correctDirectionPercentageCenter: number;
  nextCorrectDirectionCenter: Direction;
  nextCorrectDirectionPercentageCenter: number;
  noteCenter: string;
  positionEnd: PositionEnd;
  normalPercentageEnd: number;
  correctDirectionEnd: Direction;
  correctDirectionPercentageEnd: number;
  nextCorrectDirectionEnd: Direction;
  nextCorrectDirectionPercentageEnd: number;
  noteEnd: string;
};

/**
 * リクエストの型定義
 */
export type SsbuRequest = Pick<SsbuTableStatus, "character" | "move">;

/**
 * レスポンスの型定義
 */
export type SsbuResponse = SsbuTableStatus;
