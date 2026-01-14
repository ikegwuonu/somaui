import React, { useState } from 'react';
import { Button, cn } from '@somaui/ui';

type PaperProps = {
  className?: string;
  disableShowCodeBtn?: boolean;
  isOpen?: boolean;
};

export default function Paper({
  className,
  children,
  isOpen = false,
  disableShowCodeBtn,
}: React.PropsWithChildren<PaperProps>) {
  const [toggleCode, setToggleCode] = useState(isOpen);

  return (
    <div
      className={cn(
        'border-border relative mb-2.5 flex min-h-[200px] flex-col items-center justify-center rounded border px-6 pt-10 pb-12 [box-shadow:0_1.5px_0_var(--border-color)]',
        !toggleCode && '[&+.theme-code-block]:hidden',
        className
      )}
    >
      <>{children}</>

      {!disableShowCodeBtn ? (
        <Button
          size="sm"
          variant="outline"
          className="absolute right-2 bottom-2 h-8 rounded-sm"
          onClick={() => setToggleCode((prevState) => !prevState)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="mr-1.5 h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
          {toggleCode ? 'Hide Code' : 'Show Code'}
        </Button>
      ) : null}
    </div>
  );
}
