export default function Loading() {
  return (
    <div className="grid min-h-screen place-items-center bg-[#080808] text-white" role="status">
      <div className="flex flex-col items-center gap-5">
        <div className="grid size-12 place-items-center rounded-lg border border-white/20 font-mono text-sm font-semibold">
          SK
        </div>
        <div className="h-px w-24 overflow-hidden bg-white/15">
          <div className="route-loading-bar h-full bg-white" />
        </div>
        <span className="sr-only">Loading portfolio</span>
      </div>
    </div>
  );
}
