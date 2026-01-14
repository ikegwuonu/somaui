import { useHistory } from '@docusaurus/router';
import { cn } from '@site/src/utils/cn';
import { Title } from '@somaui/ui/title';
import { Text } from '@somaui/ui/text';

export default function ComponentCard({ item }: any) {
  const history = useHistory();

  return (
    <div
      onClick={() => history.push(item.path)}
      className={cn(
        'border-border group/card relative flex flex-shrink-0 cursor-pointer flex-col overflow-hidden rounded-xl border [box-shadow:0_1.5px_0_var(--border-color)] transition-all'
      )}
    >
      <div className="relative flex h-full min-h-[256px] items-center justify-center px-6 py-12 before:absolute before:inset-[3px] before:-z-[1] before:h-[calc(100%-6px)] before:w-[calc(100%-6px)] before:rounded-t-lg before:bg-gradient-to-b before:from-gray-100/60">
        {item.component}
      </div>

      <div className="p-6">
        <Title as="h5" className="!mb-1 !text-lg font-semibold">
          {item.name}
        </Title>
        <Text className="!mb-0 text-gray-500">{item.count} components</Text>
      </div>
    </div>
  );
}
