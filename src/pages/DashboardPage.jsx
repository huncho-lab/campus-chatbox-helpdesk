import { useEffect, useState } from "react";
import { getTrendingQuestions, getCategoryStats } from "../services/api";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function DashboardPage() {
  const [trending, setTrending] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const t = await getTrendingQuestions();
      const c = await getCategoryStats();
      setTrending(t);
      setCategories(c);
    };

    loadData();
  }, []);

  return (
    <div className="max-w-5xl mx-auto space-y-10">

      <h2 className="text-4xl font-bold text-gray-800">
        Analytics Dashboard
      </h2>

      {/* Category Chart Card */}
      <div className="bg-white/70 backdrop-blur-xl shadow-xl p-8 rounded-3xl">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">
          Question Categories
        </h3>

        <BarChart width={800} height={350} data={categories}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="count" fill="#4f46e5" />
          <Tooltip 
  contentStyle={{ borderRadius: "12px", border: "none" }} 
/>
        </BarChart>
      </div>

      {/* Trending Questions Card */}
      <div className="bg-white/70 backdrop-blur-xl shadow-xl p-8 rounded-3xl">
        <h3 className="text-xl font-semibold mb-6 text-gray-700">
          Trending Questions
        </h3>

        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100 text-gray-700">
              <th className="text-left p-4">Question</th>
              <th className="text-left p-4">Count</th>
            </tr>
          </thead>

          <tbody>
            {trending.map((item, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-50 transition"
              >
                <td className="p-4">{item.question}</td>
                <td className="p-4 font-semibold text-indigo-600">
                  {item.count}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default DashboardPage;