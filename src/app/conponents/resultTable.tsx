import React, { useEffect, useState } from "react";

// サンプルデータの型定義
type SampleData = {
  id: number;
  character: string;
  move: string;
  position: string;
  percentage: number;
};

// サンプルデータ
const sampleData: SampleData[] = [
  {
    id: 1,
    character: "マリオ",
    move: "ファイアボール",
    position: "中央",
    percentage: 50,
  },
];

const ResultTable: React.FC = () => {
  const [data, setData] = useState<SampleData[]>([]);

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
            <th className="py-3 px-6 text-left">位置</th>
            <th className="py-3 px-6 text-left">パーセンテージ</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{item.position}</td>
              <td className="py-3 px-6 text-left">{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4 className="pt-4">崖端</h4>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">位置</th>
            <th className="py-3 px-6 text-left">パーセンテージ</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {data.map((item) => (
            <tr
              key={item.id}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">{item.position}</td>
              <td className="py-3 px-6 text-left">{item.percentage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
