import { Text } from '@somaui/ui/text';

export default function TypographyBlock() {
  return (
    <div className="flex items-end gap-1 text-gray-400">
      <Text
        as="span"
        className="text-8xl font-bold transition-all duration-200 group-hover/card:font-thin md:text-9xl"
      >
        A
      </Text>
      <Text as="span" className="text-8xl md:text-9xl">
        a
      </Text>
    </div>
  );
}
