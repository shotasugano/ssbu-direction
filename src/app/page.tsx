"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  SmashBrosCharacterLabels,
  SmashBrosMoveLabels,
  SsbuRequest,
} from "../../utils/type";
import ResultTable from "./conponents/resultTable";
import Accordion from "./conponents/Accordion";
import Link from "next/link";

// SmashBrosCharacterLabels をオブジェクトから配列に変換
const SmashBrosCharacterLabelsArray = Object.entries(
  SmashBrosCharacterLabels
).map(([key, value]) => ({
  key,
  value,
}));

// SmashBrosMoveLabels をオブジェクトから配列に変換
const SmashBrosMoveLabelsArray = Object.entries(SmashBrosMoveLabels).map(
  ([key, value]) => ({
    key,
    value,
  })
);

export default function Home() {
  const { register, handleSubmit } = useForm<SsbuRequest>();

  const onSubmit: SubmitHandler<SsbuRequest> = (data: SsbuRequest) => {
    console.log(data);
  };

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
              {SmashBrosCharacterLabelsArray.map((label) => {
                return (
                  <option key={label.key} value={label.key}>
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
              {SmashBrosMoveLabelsArray.map((label) => {
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
        <div className="mt-5">
          <h3 className="text-lg font-semibold">データ表示</h3>
          <p className="text-red-600">* 赤 ベスト</p>
          <p className="text-green-600">* 緑 ベター</p>
          <ResultTable />
        </div>
        <div>作った人</div>
        <div>あと広告</div>
      </main>
    </div>
  );
}
