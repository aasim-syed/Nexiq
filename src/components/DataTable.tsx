import * as React from "react";

export type Column<T> = {
  key: keyof T;
  header: string;
  render?: (row: T) => React.ReactNode;
};

type Props<T> = {
  // Accept readonly arrays so callers can use `as const`
  columns: ReadonlyArray<Column<T>>;
  data: ReadonlyArray<T>;
  // Optional row key selector
  getRowKey?: (row: T, index: number) => React.Key;
};

export default function DataTable<T extends Record<string, unknown>>({
  columns,
  data,
  getRowKey,
}: Props<T>) {
  const resolveKey: (row: T, index: number) => React.Key =
    getRowKey ??
    ((row, idx) => {
      const maybe = (row as Record<string, unknown>).id;
      if (typeof maybe === "string" || typeof maybe === "number") return maybe;
      return idx; // fallback to stable index
    });

  return (
    <div className="overflow-x-auto rounded-2xl border">
      <table className="min-w-full text-sm">
        <thead className="bg-gray-50">
          <tr>
            {columns.map((c) => (
              <th key={String(c.key)} className="px-3 py-2 text-left font-semibold">
                {c.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={resolveKey(row, i)} className="border-t">
              {columns.map((c) => (
                <td key={String(c.key)} className="px-3 py-2">
                  {c.render ? c.render(row) : String(row[c.key] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
