import Link from "next/link";

type Report = {
  id: number;
  date: string;
  body: string;
};

async function getReports(): Promise<Report[]> {
  const res = await fetch(`${process.env.API_URL}/reports`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch reports");
  return res.json();
}

export default async function ReportsPage() {
  const reports = await getReports();

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">日報一覧</h1>
        <Link
          href="/reports/new"
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 text-sm"
        >
          作成
        </Link>
      </div>
      {reports.length === 0 ? (
        <p className="text-gray-500">日報がありません。</p>
      ) : (
        <ul className="space-y-4">
          {reports.map((report) => (
            <li key={report.id} className="border rounded-lg p-4">
              <p className="text-sm text-gray-500 mb-1">{report.date}</p>
              <p>{report.body}</p>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
