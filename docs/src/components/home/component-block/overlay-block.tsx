import { XMarkIcon } from '@heroicons/react/24/outline';

export default function OverlayBlock() {
  return (
    <div className="relative flex h-32 w-full flex-col rounded-xl border border-gray-300 bg-white p-4 ring-[0.5px] ring-gray-300 dark:bg-gray-50">
      <XMarkIcon
        className="absolute top-2.5 right-2.5 h-auto w-4"
        strokeWidth={2}
      />
      <div className="h-4 w-28 bg-gray-200" />
      <div className="mt-auto ml-[calc(100%-124px)] flex gap-3 transition-all group-hover/card:ml-0">
        <div className="h-8 w-14 rounded border border-gray-200 bg-white dark:bg-gray-100" />
        <div className="h-8 w-14 rounded bg-gray-900" />
      </div>
    </div>
  );
}
