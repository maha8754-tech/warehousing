import { Box, Package, Printer, Warehouse } from "lucide-react";

const CATEGORIES = [
  { id: "electronics", name: "Electronics", quantity: 15420, icon: Box, iconClass: "bg-blue-50 text-blue-600", barClass: "bg-blue-500" },
  { id: "hardware", name: "Hardware", quantity: 11760, icon: Warehouse, iconClass: "bg-teal-50 text-teal-600", barClass: "bg-teal-500" },
  { id: "accessories", name: "Accessories", quantity: 8690, icon: Warehouse, iconClass: "bg-orange-50 text-orange-500", barClass: "bg-orange-400" },
  { id: "office", name: "Office Supplies", quantity: 7230, icon: Printer, iconClass: "bg-violet-50 text-violet-600", barClass: "bg-violet-500" },
  { id: "others", name: "Others", quantity: 5220, icon: Package, iconClass: "bg-slate-100 text-slate-500", barClass: "bg-slate-400" },
];

export default function StockByCategory({ categories = CATEGORIES }) {
  const total = categories.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <section>
      <h2 className="mb-3 text-sm font-semibold text-slate-900">Stock by Category</h2>

      {categories.length === 0 ? (
        <p className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500">
          No category data yet.
        </p>
      ) : (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {categories.map(({ id, name, quantity, icon: Icon, iconClass, barClass }) => {
            const percentage = total > 0 ? Math.round((quantity / total) * 100) : 0;

            return (
              <li key={id} className="rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
                <div className="flex items-start gap-3">
                  <span className={`grid size-9 shrink-0 place-items-center rounded-full ${iconClass}`}>
                    <Icon aria-hidden="true" className="size-4.5" />
                  </span>

                  <div className="min-w-0">
                    <h3 className="truncate text-xs text-slate-600">{name}</h3>
                    <p className="mt-1 text-sm font-semibold tabular-nums text-slate-900">
                      {quantity.toLocaleString("en-US")}
                    </p>
                    <p className="mt-0.5 text-xs tabular-nums text-slate-500">{percentage}%</p>
                  </div>
                </div>

                <div
                  role="progressbar"
                  aria-label={`${name} share of stock`}
                  aria-valuenow={percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  className="mt-3 h-1 overflow-hidden rounded-full bg-slate-100"
                >
                  <div className={`h-full rounded-full ${barClass}`} style={{ width: `${percentage}%` }} />
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
