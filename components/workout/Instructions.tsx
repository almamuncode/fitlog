type InstructionsProps = {
  instructions: string[];
};

export default function Instructions({
  instructions,
}: InstructionsProps) {
  return (
    <div className="mt-8">
      <h2 className="font-display text-2xl font-bold uppercase">
        Instructions
      </h2>

      <div className="mt-5 space-y-4">
        {instructions.map((instruction, index) => (
          <div
            key={index}
            className="flex gap-4 border-b border-[var(--border)] pb-4 last:border-b-0"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center bg-[var(--accent)] text-sm font-bold text-black">
              {index + 1}
            </div>

            <p className="pt-1 text-sm leading-6 text-[var(--muted)]">
              {instruction}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}