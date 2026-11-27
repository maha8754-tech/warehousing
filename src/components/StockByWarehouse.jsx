import Link from "next/link";
import { Package, Warehouse } from "lucide-react";

const WAREHOUSES = [
  { id: "main", name: "Main Warehouse", quantity: 8000, icon: Warehouse, iconClass: "bg-blue-50 text-blue-600", barClass: "bg-blue-500" },
  { id: "east", name: "East Warehouse", quantity: 8320, icon: Warehouse, iconClass: "bg-teal-50 text-teal-600", barClass: "bg-teal-500" },
  { id: "west", name: "West Warehouse", quantity: 5550, icon: Warehouse, iconClass: "bg-violet-50 text-violet-600", barClass: "bg-violet-500" },
  // { id: "other", name: "Other", quantity: 1000, icon: Package, iconClass: "bg-slate-100 text-slate-500", barClass: "bg-violet-400" },
];

export default function StockByWarehouse({ warehouses = WAREHOUSES, viewAllHref = "/Movements" }) {
  const total = warehouses.reduce((sum, { quantity }) => sum + quantity, 0);

  return (
    <section className="rounded-xl border border-slate-200 bg-white shadow-sm">
      <header className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
        <h2 className="text-sm font-semibold text-slate-900">Stock by Warehouse</h2>
        <Link href={viewAllHref} className="text-xs font-medium text-blue-600 hover:underline">
          View All
        </Link>
      </header>

      {warehouses.length === 0 ? (
        <p className="p-6 text-center text-sm text-slate-500">No warehouse data yet.</p>
      ) : (
        <ul className="px-4 py-2">
          {warehouses.map(({ id, name, quantity, icon: Icon, iconClass, barClass }) => {
            const percentage = total > 0 ? Math.round((quantity / total) * 100) : 0;

            return (
              <li key={id} className="flex items-center gap-3 py-2.5">
                <span className={`grid size-9 shrink-0 place-items-center rounded-full ${iconClass}`}>
                  <Icon aria-hidden="true" className="size-4.5" />
                </span>

                <span className="w-28 shrink-0 truncate text-xs text-slate-600">{name}</span>

                <div className="min-w-0 flex-1">
                  <div className="mb-1.5 flex items-baseline justify-between tabular-nums">
                    <span className="text-sm font-medium text-slate-900">{quantity.toLocaleString("en-US")}</span>
                    <span className="text-xs text-slate-500">{percentage}%</span>
                  </div>

                  <div
                    role="progressbar"
                    aria-label={`${name} share of stock`}
                    aria-valuenow={percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    className="h-1 overflow-hidden rounded-full bg-slate-100"
                  >
                    <div className={`h-full rounded-full ${barClass}`} style={{ width: `${percentage}%` }} />
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
