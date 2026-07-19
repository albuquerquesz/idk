import type { CSSProperties } from "react";

const signalCells = new Map<number, "signal" | "trace" | "marker">([
  [2, "trace"],
  [5, "signal"],
  [9, "marker"],
  [13, "trace"],
  [17, "signal"],
  [22, "marker"],
  [27, "trace"],
  [31, "signal"],
  [34, "marker"],
  [39, "trace"],
  [43, "signal"],
  [46, "marker"],
]);

const staggeredCells = new Set([5, 9, 17, 22, 31, 34, 43, 46]);

export default function SignalField() {
  return (
    <div aria-hidden="true" className="signal-field">
      <div className="signal-field__header">
        <span>signal field</span>
        <span>local / static output</span>
      </div>
      <div className="signal-field__grid">
        {Array.from({ length: 48 }, (_, index) => {
          const cellIndex = index + 1;
          const variant = signalCells.get(cellIndex);
          const isStaggered = staggeredCells.has(cellIndex);

          return (
            <span
              key={cellIndex}
              className={[
                "signal-field__cell",
                variant ? `signal-field__cell--${variant}` : "",
                isStaggered ? "signal-field__cell--active" : "",
              ]
                .filter(Boolean)
                .join(" ")}
              style={{ "--signal-index": cellIndex } as CSSProperties}
            />
          );
        })}
      </div>
    </div>
  );
}
