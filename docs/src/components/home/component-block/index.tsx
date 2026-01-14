import React from 'react';
import NumberFlow from '@number-flow/react';
import { useHistory } from '@docusaurus/router';
import { Button } from '@somaui/ui/button';
import { Title } from '@somaui/ui/title';
import { Text } from '@somaui/ui/text';
import ButtonBlock from './button-block';
import TypographyBlock from './typography-block';
import TabBlock from './tab-block';
import FeedbackBlock from './feedback-block';
import DataDisplayBlock from './data-display-block';
import OverlayBlock from './overlay-block';
import InputBlock from './input-block';
import IntegrationBlock from './integration-block';
import ComponentCard from './component-card';
import { useInView } from '@site/src/utils/hooks/useInView';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const components = [
  {
    id: 1,
    component: <ButtonBlock />,
    name: 'Buttons',
    count: 2,
    path: '/docs/buttons/action-icon',
  },
  {
    id: 2,
    component: <InputBlock />,
    name: 'Inputs',
    count: 15,
    path: '/docs/inputs/input',
  },
  {
    id: 3,
    component: <TabBlock />,
    name: 'Navigation',
    count: 3,
    path: '/docs/navigation/dropdown',
  },
  {
    id: 4,
    component: <FeedbackBlock />,
    name: 'Feedback',
    count: 4,
    path: '/docs/feedback/alert',
  },
  {
    id: 5,
    component: <OverlayBlock />,
    name: 'Overlays',
    count: 4,
    path: '/docs/overlays/tooltip',
  },
  {
    id: 6,
    component: <DataDisplayBlock />,
    name: 'Data Display',
    count: 6,
    path: '/docs/data-display/accordion',
  },
  {
    id: 7,
    component: <TypographyBlock />,
    name: 'Typography',
    count: 4,
    path: '/docs/typography/title',
  },
  {
    id: 8,
    component: <IntegrationBlock />,
    name: 'Integrations',
    count: 8,
    path: '/docs/Integrations/rate',
  },
];

export default function ComponentBlock() {
  const ref = React.useRef(null);
  const history = useHistory();
  const isInView = useInView(ref, {
    rootMargin: '-100px',
    threshold: 0.5,
  });

  return (
    <section className="group hidden pt-10 pb-14 md:pt-16 md:pb-20 xl:pt-20 2xl:pt-24">
      <header className="mb-8 text-center sm:mb-10 md:mb-12">
        <div ref={ref} className="container! mx-auto">
          <Text className="mb-3! text-[11px] tracking-[4px] text-gray-500 uppercase sm:text-xs lg:text-sm">
            Beautifully Crafted
          </Text>
          <Title as="h2" className="page-section-heading-title">
            <NumberFlow
              value={isInView ? 50 : 0}
              animated={isInView ? true : false}
            />
            + Production Ready Components
          </Title>
        </div>
      </header>

      <div className="container! mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {components.map((item, idx) => (
            <ComponentCard key={`${item.name}-${idx}`} item={item} />
          ))}
        </div>

        <div className="mt-8! flex items-center justify-center xl:mt-10! 2xl:mt-12!">
          <Button
            size="lg"
            onClick={() => history.push('/docs/guide/components')}
            className="relative min-w-[160px] shadow-sm hover:ring-[0.5px] hover:ring-gray-900"
          >
            Explore More{' '}
            <ArrowRightIcon strokeWidth={2} className="ms-2 size-[18px]" />
          </Button>
        </div>
      </div>
    </section>
  );
}
