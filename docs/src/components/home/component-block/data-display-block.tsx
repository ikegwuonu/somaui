import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

export default function DataDisplayBlock() {
  return (
    <div className="grid w-full grid-cols-1 gap-2">
      <div className="flex h-8 items-start rounded bg-gray-200 px-2 transition-all group-hover/card:h-20">
        <ChevronRightIcon
          strokeWidth={2}
          className="mt-2 h-auto w-3.5 text-gray-500 transition-transform group-hover/card:rotate-90"
        />
      </div>
      <div className="flex h-20 w-full items-start rounded bg-gray-200 px-2 transition-all group-hover/card:h-8">
        <ChevronDownIcon
          strokeWidth={2}
          className="mt-2 h-auto w-3.5 text-gray-500 transition-transform group-hover/card:-rotate-90"
        />
      </div>
      <div className="flex h-8 items-start rounded bg-gray-200 px-2">
        <ChevronRightIcon
          strokeWidth={2}
          className="mt-2 h-auto w-3.5 text-gray-500"
        />
      </div>
    </div>
  );
}
