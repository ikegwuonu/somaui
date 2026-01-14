import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from '@heroicons/react/24/outline';

export default function InputBlock() {
  return (
    <div className="w-full">
      <div className="flex h-9 items-center justify-between rounded-lg border border-gray-300 bg-white px-3.5 ring-[0.5px] ring-gray-300 dark:bg-gray-50">
        <MagnifyingGlassIcon
          className="h-auto w-4 scale-0 transition-transform group-hover/card:scale-100"
          strokeWidth={2}
        />
        <ChevronDownIcon
          className="h-auto w-4 transition-transform group-hover/card:scale-0"
          strokeWidth={2}
        />
      </div>
    </div>
  );
}
