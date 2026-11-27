import Link from "next/link";
import { TriangleAlert } from "lucide-react";
import { useEffect, useState } from "react";

const PRODUCTS = [
  { id: "chair", name: "Office Chair", currentStock: 5, minStock: 10 },
  { id: "hdd", name: "External HDD 1TB", currentStock: 2, minStock: 5 },
  { id: "printer", name: "Printer HP", currentStock: 7, minStock: 10 },
  { id: "monitor", name: 'Monitor 24"', currentStock: 3, minStock: 10 },
];

// At or below this fraction of the minimum, the stock number is shown in red.
const CRITICAL_RATIO = 0.75;

export default function LowStockAlerts({ viewAllHref = "/api/Products?Status=Low%20Stock" }) {
  const [products, setProducts] = useState([])

  const loadGetProducts = async () => {
      try {
          const baseUrl = process.env.NEXT_PUBLIC_API_URL;

          const response = await fetch(
              `${baseUrl}/api/Products?Status=Low%20Stock`)
          if (!response.ok) {
              throw new Error("Error Get Products")
          }

          const data = await response.json();
          setProducts(data);
      } catch (err) {
          setError(err.message)
      } finally {
          setLoading(false)
      }
  }
      useEffect(() => {
          //eslint-disble-next-line react-hooks/set-state-in-effect
          loadGetProducts();
      }, []);

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">Low Stock Alerts</h2>
        <Link href={viewAllHref} className="text-xs font-medium text-blue-600 hover:underline">
          View All
        </Link>
      </header>

      {products.length === 0 ? (
        <p className="p-6 text-center text-sm text-slate-500">No low stock products.</p>
      ) : (
        <div className="overflow-x-auto px-3 py-2">
          <table className="w-full text-left text-xs">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th scope="col" className="px-2 py-2 font-medium text-  ">Product</th>
                <th scope="col" className="px-2 py-2 font-medium">Current Stock</th>
                <th scope="col" className="px-2 py-2 font-medium">Min. Stock</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-slate-100 text-slate-700">
              {products.map(( u ) => {
                const isCritical = u.quantity <= 40 * CRITICAL_RATIO;

                return (
                  <tr key={u.productId}>
                    <td className="px-2 py-2.5">
                      <div className="flex items-center gap-2">
                        <TriangleAlert aria-hidden="true" className="size-4 shrink-0 text-orange-500" />
                        {u.productName}
                      </div>
                    </td>
                    <td className={`px-2 py-2.5 tabular-nums ${isCritical ? "font-semibold text-red-600" : ""}`}>
                      {u.quantity}
                      {isCritical && <span className="sr-only"> (critical)</span>}
                    </td>
                    <td className="px-2 py-2.5 tabular-nums">{40}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
}
