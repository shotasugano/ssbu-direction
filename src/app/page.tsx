"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  SmashBrosCharacterLabels,
  SmashBrosMoveLabels,
  SsbuRequest,
} from "../../utils/type";
import ResultTable from "./components/resultTable";
import Accordion from "./components/Accordion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { getMoveList } from "../../utils/getMoveList";

// SmashBrosCharacterLabels をオブジェクトから配列に変換
const SmashBrosCharacterLabelsArray = Object.entries(
  SmashBrosCharacterLabels
).map(([key, value]) => ({
  key,
  value,
}));

export default function Home() {
  const { register, handleSubmit, watch } = useForm<SsbuRequest>({
    defaultValues: {
      character: undefined,
      move: undefined,
    },
  });
  const router = useRouter();
  const searchParams = useSearchParams();
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [resultData, setResultData] = useState<
    { key: string; value: string }[] | undefined
  >(undefined);

  /**
   * useEffectでクエリからデータを取得する
   */
  useEffect(() => {
    const fetchData = async () => {
      if (!searchParams) {
        return;
      }
      // TODO: 今のままだとなんでも通しちゃうのでバリデーションしたい
      const character = searchParams.get("character");
      const move = searchParams.get("move");
      if (character && move) {
        try {
          // クエリパラメータを使用してデータを取得する
          const res = await fetch(
            `${API_URL}/api?character=${character}&move=${move}`,
            {
              cache: "no-cache",
            }
          );
          const data = await res.json();
          //FIXME: 後で消す
          console.log(data);
          setResultData(data);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
        //FIXME: 後で消す
        console.log(character, move);
      }
    };

    fetchData();
  }, [API_URL, searchParams, setResultData]);

  /**
   * 確認するボタンを押した時の処理
   */
  const onSubmit: SubmitHandler<SsbuRequest> = async (data: SsbuRequest) => {
    /**
     * リクエストをクエリパラメーターの形にしてrouter.pushする
     */
    const queryParams = new URLSearchParams(data).toString();
    router.push(`?${queryParams}`);
  };

  const watchCharacter = watch("character");
  const [moveList, setMoveList] = useState<{ key: string; value: string }[]>(
    []
  );

  /**
   * watchCharacter が変更された時getMoveList関数を使用して技リストを取得する
   */
  useEffect(() => {
    if (watchCharacter) {
      const moves = getMoveList(watchCharacter);

      const formattedMoves = moves.map((move) => ({
        key: move,
        value: SmashBrosMoveLabels[move as keyof typeof SmashBrosMoveLabels],
      }));
      setMoveList(formattedMoves);
    }
  }, [watchCharacter]);

  return (
    <div className="h-full: height: 100%; bg-gray-100 p-4">
      <main className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md h-">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <h3 className="text-xl font-bold">あとライブラリ</h3>
          <p className="text-gray-600">ベク変の正解検索ツールです</p>

          <Accordion title="※注意事項 (クリック!!)">
            <ul className="list-disc pl-5 space-y-2">
              <li>撃墜技だけです(コンボのベク変は対象外)</li>
              <li>
                地上で計測してます(マリオの上Bなど空中で撃墜するものは無視してます)
              </li>
              <li>
                基本当たりどころで吹っ飛びが違う技は(出始めか最も飛ぶ箇所)を軸に作ってます
              </li>
              <li>
                ％はドンキー基準です(上方向の技を当てやすくするためデカキャラにしました)
              </li>
              <li>
                カズヤの地獄門のように下ベクにしたら地面にバウンドして助かるやつ、だったり上方向すぎて端も初期位置も関係なさそうなやつ、は端のみにしています。
              </li>
              <li>OP相殺は0で考えてます。</li>
              <li>
                撃墜技だけど優先順位低くていいかなと思ったものは調べてません。リクエストあれば修正、追加します！
              </li>
              <li>
                他の技も調べたい場合、もっと詳しい説明をみたい場合は
                <Link
                  href="https://twitter.com/akaritakaki"
                  target="_blank"
                  rel="noreferrer"
                  className="text-indigo-600 underline"
                >
                  こちら
                </Link>
                からリクエストしてください！
              </li>
            </ul>
          </Accordion>
          <div>
            <label
              htmlFor="character"
              className="block text-sm font-medium text-gray-700"
            >
              キャラ:
            </label>
            <select
              id="character"
              {...register("character")}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled selected>
                キャラクター選択
              </option>
              {SmashBrosCharacterLabelsArray.map((label, index) => {
                return (
                  <option key={index} value={label.key}>
                    {label.value}
                  </option>
                );
              })}
            </select>
          </div>
          <div>
            <label
              htmlFor="move"
              className="block text-sm font-medium text-gray-700"
            >
              技:
            </label>
            <select
              id="move"
              {...register("move")}
              className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled selected className="whitespace-nowrap">
                キャラクター選択後、技を選択
              </option>
              {moveList.map((label) => {
                return (
                  <option key={label.key} value={label.key}>
                    {label.value}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="flex justify-center pt-4">
            <button
              type="submit"
              className="w-1/2 py-2 px-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              確認する
            </button>
          </div>
        </form>
        {resultData && (
          <div className="mt-5">
            <h3 className="text-lg font-semibold">データ表示</h3>
            <p className="text-red-600">* 赤 ベスト</p>
            <p className="text-green-600">* 緑 ベター</p>
            <ResultTable />
          </div>
        )}
        <div>作った人</div>
        <div>あと広告</div>
      </main>
    </div>
  );
}
