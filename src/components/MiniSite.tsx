/* Neutral miniature website used inside device frames and showcases. */
export default function MiniSite({ cols }: { cols: 1 | 2 | 3 }) {
  return (
    <div className="flex h-full flex-col bg-paper">
      <div className="flex items-center justify-between bg-black px-3 py-2">
        <span className="h-1.5 w-9 bg-white/80" aria-hidden="true" />
        <span className="hidden gap-1.5 sm:flex" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span key={i} className="h-1 w-5 bg-white/35" />
          ))}
        </span>
        <span className="h-3 w-10 border border-gold-400" aria-hidden="true" />
      </div>
      <div className="bg-black px-4 pb-5 pt-4">
        <div className="h-2.5 w-4/5 bg-white" aria-hidden="true" />
        <div className="mt-1.5 h-2.5 w-3/5 bg-white/55" aria-hidden="true" />
        <div className="mt-3 flex gap-2">
          <span className="h-4 w-14 bg-gold-400" aria-hidden="true" />
          <span className="h-4 w-14 border border-white/40" aria-hidden="true" />
        </div>
      </div>
      <div className={`grid flex-1 gap-2 p-3 ${cols === 1 ? "grid-cols-1" : cols === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {Array.from({ length: cols === 1 ? 2 : cols }).map((_, i) => (
          <div key={i} className="border border-black/10 bg-white p-2">
            <div className="h-7 bg-coal-700" aria-hidden="true" />
            <div className="mt-1.5 h-1.5 w-full bg-black/10" aria-hidden="true" />
            <div className="mt-1 h-1.5 w-2/3 bg-black/10" aria-hidden="true" />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between border-t border-black/10 px-3 py-2">
        <span className="h-1.5 w-12 bg-black" aria-hidden="true" />
        <span className="h-1.5 w-8 bg-gold-500" aria-hidden="true" />
      </div>
    </div>
  );
}
