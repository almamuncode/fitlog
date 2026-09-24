type PlanTab = "plan" | "saved";

type PlanTabsProps = {
  activeTab: PlanTab;
  onTabChange: (tab: PlanTab) => void;
  planCount: number;
  savedCount: number;
};

export default function PlanTabs({
  activeTab,
  onTabChange,
  planCount,
  savedCount,
}: PlanTabsProps) {
  return (
    <div className="flex border-b border-[var(--border)]">
      <button
        type="button"
        onClick={() => onTabChange("plan")}
        className={`cursor-pointer border-b-2 px-5 py-4 text-sm font-bold uppercase transition ${
          activeTab === "plan"
            ? "border-[var(--accent)] text-[var(--accent)]"
            : "border-transparent text-[var(--muted)] hover:text-white"
        }`}
      >
        Today&apos;s Plan
        <span className="ml-2 text-xs">({planCount})</span>
      </button>

      <button
        type="button"
        onClick={() => onTabChange("saved")}
        className={`cursor-pointer border-b-2 px-5 py-4 text-sm font-bold uppercase transition ${
          activeTab === "saved"
            ? "border-[var(--accent)] text-[var(--accent)]"
            : "border-transparent text-[var(--muted)] hover:text-white"
        }`}
      >
        Saved
        <span className="ml-2 text-xs">({savedCount})</span>
      </button>
    </div>
  );
}