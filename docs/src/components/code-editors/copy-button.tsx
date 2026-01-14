import { cn } from '@somaui/ui/lib/cn';
import React from 'react';

type CopyButtonProps = {
  value: string;
  className?: string;
};

async function copyToClipboardWithMeta(
  value: string,
  meta?: Record<string, unknown>
) {
  navigator.clipboard.writeText(value);
}

export function CopyButton({ value, className }: CopyButtonProps) {
  const [hasCopied, setHasCopied] = React.useState(false);
  React.useEffect(() => {
    setTimeout(() => {
      setHasCopied(false);
    }, 1000);
  }, [hasCopied]);

  const tooltipText = hasCopied ? 'Copied' : 'Copy';

  return (
    <button
      aria-label={tooltipText}
      onClick={() => {
        copyToClipboardWithMeta(value);
        setHasCopied(true);
      }}
      className={cn(
        'relative flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded border-0 p-0 text-sm text-gray-400 transition-all ease-in-out hover:text-gray-200',
        className
      )}
    >
      <svg
        viewBox="0 0 24 24"
        className={cn(
          'h-[18px] w-[18px] transition-all duration-200',
          hasCopied && '[transform:scale(0.33)] opacity-0'
        )}
      >
        <path
          fill="currentColor"
          d="M19 21H8V7h11m0-2H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2m-3-4H4a2 2 0 0 0-2 2v14h2V3h12V1Z"
        />
      </svg>
      <svg
        viewBox="0 0 24 24"
        className={cn(
          'absolute h-[18px] w-[18px] [transform:scale(0.33)] opacity-0 transition-all duration-200',
          hasCopied && '[transform:scale(1)] opacity-100'
        )}
      >
        <path
          fill="#00d600"
          d="M21 7 9 19l-5.5-5.5 1.41-1.41L9 16.17 19.59 5.59 21 7Z"
        />
      </svg>
    </button>
  );
}
