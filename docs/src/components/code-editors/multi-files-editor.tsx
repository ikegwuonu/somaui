import React from 'react';
import Editor, { EditorProps } from '@monaco-editor/react';
import { PACKAGE_MANAGERS } from './code-editor.config';
import { cn } from '../../utils/cn';
import ClientComponent from '../client-component';
import NpmIcon from '../icons/npm-icon';
import YarnIcon from '../icons/yarn-icon';
import PnpmIcon from '../icons/pnpm-icon';
import BunIcon from '../icons/bun-icon';
import { CopyButton } from './copy-button';

type MultiFilesEditorProps = {
  files: {
    id: string | number;
    name: string;
    manager: `${PACKAGE_MANAGERS}`;
    value: string;
  }[];
  className?: string;
  editorClassName?: string;
  editorWrapperClassName?: string;
  editorOptions?: EditorProps;
};

const PACKAGE_MANAGERS_ICONS = {
  [PACKAGE_MANAGERS.NPM]: <NpmIcon className="size-5" />,
  [PACKAGE_MANAGERS.YARN]: <YarnIcon className="size-5" />,
  [PACKAGE_MANAGERS.PNPM]: <PnpmIcon className="size-5" />,
  [PACKAGE_MANAGERS.BUN]: <BunIcon className="size-5" />,
};

export function MultiFilesEditor({
  files,
  editorClassName,
  className,
  editorWrapperClassName,
  editorOptions,
}: MultiFilesEditorProps) {
  const editorRef = React.useRef(null);
  const [fileName, setFileName] = React.useState(files[0].name);
  const file = files.find((file) => file.name === fileName);

  return (
    <ClientComponent>
      <div className={cn('group/editor', className)}>
        <nav className="mb-4 flex items-center gap-4 border-x-0 border-t-0 border-b border-solid border-gray-300 dark:border-stone-700">
          {files.map((file) => (
            <button
              key={file.id}
              onClick={() => setFileName(file.name)}
              className={cn(
                'font-inter relative flex h-[47px] cursor-pointer items-center border-0 bg-transparent px-2.5 py-3 text-sm transition-all duration-200',
                fileName === file.name &&
                  "pointer-events-none font-medium after:absolute after:start-0 after:-bottom-[1px] after:block after:h-0.5 after:w-full after:bg-gray-900 after:content-[''] dark:after:bg-gray-100"
              )}
            >
              <span
                className={cn(
                  'me-2 inline-flex h-auto w-5 shrink-0 items-center'
                )}
              >
                {PACKAGE_MANAGERS_ICONS[file.manager]}
              </span>
              {file.name}
            </button>
          ))}
        </nav>
        <div className={cn('relative h-12', editorWrapperClassName)}>
          <Editor
            height="100%"
            theme="vs-dark"
            path={file.id.toString()}
            defaultLanguage="shell"
            defaultValue={file.value}
            onMount={(editor) => (editorRef.current = editor)}
            options={{
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              wordWrap: 'on',
              wrappingIndent: 'same',
              wrappingStrategy: 'advanced',
              readOnly: true,
              lineNumbers: 'off',
              fontSize: 16,
              padding: { top: 11, bottom: 11 },
            }}
            {...editorOptions}
            className={cn('overflow-hidden rounded-lg', editorClassName)}
          />
          <CopyButton value={file.value} className="absolute end-2 top-2" />
        </div>
      </div>
    </ClientComponent>
  );
}
