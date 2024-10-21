import { SsbuTableStatus } from "../../../utils/type";

type ResultTableProps = {
  resultData: SsbuTableStatus;
};

const ResultTable = ({ resultData }: ResultTableProps) => {
  return (
    <div className="p-4 bg-gray-100 min-h-1">
      <div className="flex justify-between">
        <h4 className="">初期位置</h4>
        <div>
          <p>備考:</p>
          <p>{resultData && resultData.noteCenter}</p>
        </div>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ベクトル</th>
            <th className="py-3 px-6 text-left">%</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {resultData && (
            <tr
              key={"normalCenter"}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">無ベク変</td>
              <td className="py-3 px-6 text-left">
                {resultData.normalPercentageCenter}
              </td>
            </tr>
          )}
          {
            <>
              <tr
                key={resultData.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left text-red-600">
                  {resultData.correctDirectionCenter}
                </td>
                <td className="py-3 px-6 text-left text-red-600">
                  {resultData.correctDirectionPercentageCenter}
                </td>
              </tr>
              <tr
                key={resultData.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left text-green-600">
                  {resultData.nextCorrectDirectionCenter}
                </td>
                <td className="py-3 px-6 text-left text-green-600">
                  {resultData.nextCorrectDirectionPercentageCenter}
                </td>
              </tr>
            </>
          }
        </tbody>
      </table>
      <div className="flex justify-between pt-4">
        <h4 className="">崖端</h4>
        <div>
          <p>備考:</p>
          <p>{resultData.noteCenter}</p>
        </div>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">ベクトル</th>
            <th className="py-3 px-6 text-left">%</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {
            <tr
              key={"normalCenter"}
              className="border-b border-gray-200 hover:bg-gray-100"
            >
              <td className="py-3 px-6 text-left">無ベク変</td>
              <td className="py-3 px-6 text-left">
                {resultData.normalPercentageEnd}
              </td>
            </tr>
          }
          {
            <>
              <tr
                key={resultData.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left text-red-600">
                  {resultData.correctDirectionEnd}
                </td>
                <td className="py-3 px-6 text-left text-red-600">
                  {resultData.correctDirectionPercentageEnd}
                </td>
              </tr>
              <tr
                key={resultData.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6 text-left text-green-600">
                  {resultData.nextCorrectDirectionEnd}
                </td>
                <td className="py-3 px-6 text-left text-green-600">
                  {resultData.nextCorrectDirectionPercentageEnd}
                </td>
              </tr>
            </>
          }
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
