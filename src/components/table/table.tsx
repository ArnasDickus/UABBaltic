interface ITable<T> {
  headers: string[];
  data: T;
  loading: boolean;
}

const Table: <T>({ headers, data, loading }: ITable<T[]>) => JSX.Element = ({
  data,
  headers,
  loading,
}) => {
  const tableThStyles =
    "border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left";
  const tableTrStyles =
    "border-b border-slate-100 dark:border-slate-700 p-4 pl-8 text-slate-500 dark:text-slate-400";
  return (
    <div className="overflow-auto">
      <table
        className={`border-collapse table-auto w-full text-sm ${
          loading && "animate-pulse"
        }`}>
        <thead>
          <tr>
            {headers.map((head) => (
              <th key={head} className={tableThStyles}>
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white dark:bg-slate-800">
          {data.map((row, index) => (
            <tr key={index}>
              {headers.map((head, index) => (
                <td key={index} className={tableTrStyles}>
                  {/* @ts-ignore */}
                  {row[head]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
