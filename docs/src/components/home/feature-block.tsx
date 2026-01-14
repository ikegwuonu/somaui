import { Title } from '@somaui/ui/title';
import { Text } from '@somaui/ui/text';
import MegaPhoneIcon from '../icons/mega-phone';
import ColorSwatchIcon from '../icons/color-swatch';
import RocketIcon from '../icons/rocket';
import ShieldIcon from '../icons/shield';

const features = [
  {
    icon: <ColorSwatchIcon className="h-auto w-6" />,
    title: 'Fully Customizable',
    description:
      "If you need to customize a component beyond what is available through TailwindCSS classes, you can easily do so by using the component's props.",
  },
  {
    icon: <RocketIcon className="h-auto w-6" />,
    title: 'Easy to Use',
    description:
      'Our components have a simple and intuitive API that makes them easy to use in your React application.',
  },
  {
    icon: <ShieldIcon className="h-auto w-[26px]" />,
    title: 'Type Safety',
    description:
      'Build type safe applications, all components export types it easier to use TypeScript in your project and provide better type support',
  },
  {
    icon: <MegaPhoneIcon className="h-auto w-[25px]" />,
    title: 'Accessibility',
    description:
      'We have made sure that our components meet accessibility standards so that they can be used by people with disabilities',
  },
];

export default function FeatureBlock() {
  return (
    <section className="py-16 lg:py-20">
      <div className="container! mx-auto px-4 md:px-6">
        <header className="mb-8 text-center sm:mb-10 md:mb-12">
          <Text className="mb-3! text-[11px] tracking-[4px] text-gray-500 uppercase sm:text-xs lg:mb-4! lg:text-sm">
            Why SomaUI?
          </Text>
          <Title as="h2" className="page-section-heading-title">
            A Next Gen UI Library with <br className="hidden sm:inline-block" />{' '}
            Limitless Customization Options
          </Title>
        </header>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 2xl:gap-5">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="border-border rounded-xl border px-6 py-7 [box-shadow:0_1.5px_0_var(--border-color)] 2xl:px-7 2xl:pt-8"
            >
              <div className="border-border mb-6 flex h-11 w-11 items-center justify-center rounded-lg border bg-gradient-to-t from-gray-100/60 text-gray-900 xl:h-12 xl:w-12">
                {feature.icon}
              </div>
              <Title as="h5" className="text-lg! font-semibold">
                {feature.title}
              </Title>
              <Text className="mb-0 leading-loose text-gray-600 dark:text-gray-500">
                {feature.description}
              </Text>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
