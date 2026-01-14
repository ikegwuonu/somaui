import {
  XMarkIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';

export default function FeedbackBlock() {
  return (
    <div className="relative h-[60px] w-full rounded-lg border border-gray-300 bg-white p-3 ring-[0.5px] ring-gray-300 dark:bg-gray-50">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-200">
          <ExclamationTriangleIcon className="h-auto w-4" strokeWidth={2} />
        </div>
        <div className="h-4 w-28 bg-gray-200 transition-all group-hover/card:w-20" />
      </div>
      <XMarkIcon
        className="absolute top-2.5 right-2.5 h-auto w-4 scale-0 transition-all group-hover/card:scale-100"
        strokeWidth={2}
      />
    </div>
  );
}
