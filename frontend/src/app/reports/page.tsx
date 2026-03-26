type Report = {
  id: number;
  date: string;
  body: string;
};

const mockReports: Report[] = [
  { id: 1, date: "2026-03-26", body: "今日はAPIの設計をした。" },
  { id: 2, date: "2026-03-25", body: "Docker Composeの構成を整えた。" },
  { id: 3, date: "2026-03-24", body: "Next.jsのセットアップを完了した。" },
];

export default function ReportsPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">日報一覧</h1>
      <ul className="space-y-4">
        {mockReports.map((report) => (
          <li key={report.id} className="border rounded-lg p-4">
            <p className="text-sm text-gray-500 mb-1">{report.date}</p>
            <p>{report.body}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
