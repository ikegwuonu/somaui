export default function ButtonBlock() {
  return (
    <div className="flex w-full flex-col items-center gap-3">
      <div className="h-10 w-28 rounded border border-gray-200 bg-white shadow-sm dark:bg-gray-100" />
      <div className="h-10 w-28 rounded bg-gray-900 transition-all group-hover/card:w-10 group-hover/card:rounded-full" />
    </div>
  );
}
