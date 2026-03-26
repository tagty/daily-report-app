"use client";

import { useRouter } from "next/navigation";

export default function NewReportPage() {
  const router = useRouter();

  function handleSubmit(formData: FormData) {
    const date = formData.get("date");
    const body = formData.get("body");
    // TODO: API に POST する
    console.log({ date, body });
    router.push("/reports");
  }

  return (
    <main className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">日報を作成</h1>
      <form action={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="date">
            日付
          </label>
          <input
            id="date"
            name="date"
            type="date"
            required
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="body">
            内容
          </label>
          <textarea
            id="body"
            name="body"
            required
            rows={6}
            className="border rounded px-3 py-2 w-full"
          />
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
          >
            作成
          </button>
          <button
            type="button"
            onClick={() => router.push("/reports")}
            className="border px-4 py-2 rounded hover:bg-gray-100"
          >
            キャンセル
          </button>
        </div>
      </form>
    </main>
  );
}
