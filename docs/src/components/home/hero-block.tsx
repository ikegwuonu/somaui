import { useHistory } from '@docusaurus/router';
import { Announcement } from '@somaui/ui/announcement';
import { Button } from '@somaui/ui/button';
import { Title } from '@somaui/ui/title';
import { Text } from '@somaui/ui/text';
import { cn } from '@somaui/ui/lib/cn';
import { GovernfulLogo } from '../icons/governful-logo';
// import { TrueBeepLogo } from '../icons/truebeep-logo';
import { RedQLogo } from '../icons/redq-logo';
import { ProaLogo } from '../icons/proa-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const data = {
  title: `A Shadcn-inspired version of SomaUI
  <br className="hidden md:inline-block" /> <span className="italic">React UI Library</span>`,
  description: `Built with Tailwind CSS. Beautifully crafted, production-ready components designed for creators who value elegant simplicity and performance.`,
};

export default function HeroBlock() {
  const history = useHistory();

  return (
    <section className="border-border relative border-b py-16 before:absolute before:bottom-0 before:h-3/5 before:w-full before:bg-gradient-to-t before:from-gray-50/30 md:py-20 lg:py-32 2xl:py-36">
      {/* Dashed Top Fade Grid */}
      <div
        className="absolute inset-0 z-0 -mt-2 opacity-90 dark:opacity-50"
        style={{
          backgroundImage: `
        linear-gradient(to right, var(--border-color) 1px, transparent 1px),
        linear-gradient(to bottom, var(--border-color) 1px, transparent 1px)
      `,
          backgroundSize: '20px 20px',
          backgroundPosition: '0 0, 0 0',
          maskImage: `
        repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          WebkitMaskImage: `
 repeating-linear-gradient(
              to right,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            repeating-linear-gradient(
              to bottom,
              black 0px,
              black 3px,
              transparent 3px,
              transparent 8px
            ),
            radial-gradient(ellipse 70% 60% at 50% 0%, #000 60%, transparent 100%)
      `,
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      <div className="relative container! mx-auto">
        <header className="flex flex-col items-center justify-center text-center">
          <Announcement
            badgeText="⚡ SomaUI"
            className="border-border mx-auto mb-6! border [box-shadow:0_1px_0_var(--border-color)] sm:hidden md:mb-7!"
          ></Announcement>
          <Announcement
            badgeText="⚡ SomaUI"
            highlightedTextClassName="ml-1.5"
            className="border-border mx-auto mb-6! hidden border [box-shadow:0_1px_0_var(--border-color)] sm:block md:mb-7!"
          ></Announcement>
          <Title
            as="h1"
            dangerouslySetInnerHTML={{ __html: data.title }}
            className={'home-page-hero-block-title'}
          />
          <Text className="mx-auto mb-8! max-w-[786px] text-[15px] leading-[1.9] text-gray-600 md:mb-12 md:text-base md:leading-[1.9] 2xl:text-lg dark:text-gray-500">
            {data.description}
          </Text>
          <Text className="mx-auto mb-8! max-w-[786px] text-[12px] leading-[1.9] text-gray-600 md:mb-12 md:text-base md:leading-[1.9] 2xl:text-lg dark:text-gray-500">
            Built with ❤️ by{' '}
            <a className="" href="https://github.com/ikegwuonu">
              ikegwuonu
            </a>
          </Text>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row md:gap-5">
            <Button
              size="lg"
              className="relative h-12 min-w-[160px] px-8 text-sm transition-all hover:shadow-2xl md:text-base"
              onClick={() => history.push('/docs/guide/getting-started')}
            >
              Get Started{' '}
              <ArrowRightIcon strokeWidth={2} className="ms-2 size-[18px]" />
            </Button>
            <a
              target="_blank"
              href="https://github.com/somaui/somaui"
              className="focus:ring-offset-background focus:ring-primary inline-flex items-center rounded-[var(--border-radius)] outline-none hover:no-underline! focus:ring-1 focus:ring-offset-1 focus:outline-none"
              rel="noreferrer noopener"
            >
              <Button
                size="lg"
                variant="outline"
                className="relative h-12 bg-white px-6 text-sm transition-all hover:no-underline! md:text-base dark:bg-gray-50"
              >
                View on Github
              </Button>
            </a>
          </div>

          <div className="hidden pt-20 md:pt-24 lg:pt-28 xl:pt-32 2xl:pt-40">
            <Text className="text-xs font-medium tracking-widest text-gray-500 uppercase">
              Trusted by teams at
            </Text>
            <div className="mt-5 flex items-center justify-center gap-5 md:gap-5 lg:gap-8 2xl:gap-10">
              <RedQLogo className="text-primary h-5 w-auto opacity-70 grayscale filter transition-all hover:opacity-100 hover:grayscale-0" />
              <GovernfulLogo className="h-7 w-auto opacity-70 grayscale filter transition-all hover:opacity-100 hover:grayscale-0 dark:invert" />
              <ProaLogo className="text-primary h-[18px] w-auto opacity-70 grayscale filter transition-all hover:opacity-100 hover:grayscale-0 dark:invert" />
              {/*
                <TrueBeepLogo className="w-auto h-7 filter grayscale opacity-70 hover:opacity-100 transition-all hover:grayscale-0 dark:invert" />
              */}
            </div>
          </div>
        </header>
      </div>
    </section>
  );
}
