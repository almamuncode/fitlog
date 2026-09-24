export type SortOption = "duration" | "calories" | "rating";

type SortDropdownProps = {
  value: SortOption;
  onChange: (value: SortOption) => void;
};

export default function SortDropdown({
  value,
  onChange,
}: SortDropdownProps) {
  return (
    <div className="flex items-center gap-3">
      <label
        htmlFor="sort-workouts"
        className="text-xs font-bold uppercase tracking-wider text-[var(--muted)]"
      >
        Sort by
      </label>

      <select
        id="sort-workouts"
        value={value}
        onChange={(event) =>
          onChange(event.target.value as SortOption)
        }
        className="cursor-pointer border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm text-white outline-none transition focus:border-[var(--accent)]"
      >
        <option value="duration">Duration</option>
        <option value="calories">Calories</option>
        <option value="rating">Rating</option>
      </select>
    </div>
  );
}