import type { LucideIcon } from "lucide-react";

interface StatCardProps {
  label: string;
  value: string;
  icon: LucideIcon;
  trend?: string;
}

export default function StatCard({
  label,
  value,
  icon: Icon,
  trend,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-md transition-shadow duration-300 hover:shadow-xl">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-slate-500">
            {label}
          </p>

          <p className="mt-2 text-2xl font-bold text-slate-900">
            {value}
          </p>

          {trend && (
            <p className="mt-1 text-xs font-medium text-emerald-600">
              {trend}
            </p>
          )}
        </div>

        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-600 via-green-500 to-lime-500 text-white shadow-md">
          <Icon className="h-5 w-5" />
        </div>
      </div>
    </div>
  );
}