import React, { useEffect, useState } from "react";
import {
  Direction,
  Position,
  SmashBrosCharacters,
  SmashBrosMoves,
  SsbuTableStatus,
} from "../../../utils/type";

// サンプルデータ
const sampleData: SsbuTableStatus[] = [
  {
    id: 1,
    character: SmashBrosCharacters.MARIO,
    move: SmashBrosMoves.JAB,
    positionCenter: Position.Center,
    normalPercentageCenter: 100,
    correctDirectionCenter: Direction.Up,
    correctDirectionPercentageCenter: 120,
    nextCorrectDirectionCenter: Direction.Down,
    nextCorrectDirectionPercentageCenter: 110,
    noteCenter: "特になし",
    positionEnd: Position.End,
    normalPercentageEnd: 50,
    correctDirectionEnd: Direction.Up,
    correctDirectionPercentageEnd: 90,
    nextCorrectDirectionEnd: Direction.Down,
    nextCorrectDirectionPercentageEnd: 60,
    noteEnd: "特になし",
  },
];

const ResultTable: React.FC = () => {
  const [data, setData] = useState<SsbuTableStatus[]>([]);

  useEffect(() => {
    // fetch('API_ENDPOINT')
    //   .then(response => response.json())
    //   .then(data => setData(data));

    // デモ用にサンプルデータをセット
    setData(sampleData);
  }, []);

  return (
    <div className="p-4 bg-gray-100 min-h-1">
      <h4 className="">初期位置</h4>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ベクトル</th>
            <th className="py-3 px-6 text-left">パーセンテージ</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.length > 0 && (
            <tr
              key={"normalCenter"}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">無ベク変</td>
              <td className="py-3 px-6 text-left">
                {data[0].normalPercentageCenter}
              </td>
            </tr>
          )}
          {data.map((item) => (
            <>
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  {item.correctDirectionCenter}
                </td>
                <td className="py-3 px-6 text-left">
                  {item.correctDirectionPercentageCenter}
                </td>
              </tr>
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  {item.nextCorrectDirectionCenter}
                </td>
                <td className="py-3 px-6 text-left">
                  {item.nextCorrectDirectionPercentageCenter}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
      <h4 className="pt-4">崖端</h4>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ベクトル</th>
            <th className="py-3 px-6 text-left">パーセンテージ</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.length > 0 && (
            <tr
              key={"normalCenter"}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">無ベク変</td>
              <td className="py-3 px-6 text-left">
                {data[0].normalPercentageEnd}
              </td>
            </tr>
          )}
          {data.map((item) => (
            <>
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  {item.correctDirectionEnd}
                </td>
                <td className="py-3 px-6 text-left">
                  {item.correctDirectionPercentageEnd}
                </td>
              </tr>
              <tr
                key={item.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left">
                  {item.nextCorrectDirectionEnd}
                </td>
                <td className="py-3 px-6 text-left">
                  {item.nextCorrectDirectionPercentageEnd}
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
