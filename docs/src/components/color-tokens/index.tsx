import React from 'react';
import { cn, Tab, Popover, Button } from '@somaui/ui';
import { ArrowPathIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { CopyButton } from '../copy-button';
import { tokens, darkThemeTokens } from './tokens';
import { hexToOklch } from '@site/src/utils/hex-to-oklch';
import RangeSlider from '@site/src/components/range-slider';
import { useSomaUITheme } from '@site/src/contexts/somaui-theme-context';

type TokenTypes = {
  name: string;
  hex: string;
  oklch: string;
  description: string;
};

export default function ColorTokens() {
  const { lightTokens, darkTokens } = useSomaUITheme();
  const [activeTab, setActiveTab] = React.useState(0);

  // Convert tokens object back to array format for rendering
  const lightTokensArray = React.useMemo(() => {
    return tokens.map((token) => ({
      ...token,
      hex: lightTokens[token.name]?.hex || token.hex,
      oklch: lightTokens[token.name]?.oklch || token.oklch,
    }));
  }, [lightTokens]);

  const darkTokensArray = React.useMemo(() => {
    return darkThemeTokens.map((token) => ({
      ...token,
      hex: darkTokens[token.name]?.hex || token.hex,
      oklch: darkTokens[token.name]?.oklch || token.oklch,
    }));
  }, [darkTokens]);

  return (
    <Tab selectedIndex={activeTab} onChange={(index) => setActiveTab(index)}>
      <Tab.List>
        <Tab.ListItem>Light Theme</Tab.ListItem>
        <Tab.ListItem>Dark Theme</Tab.ListItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <TokensTable tokens={lightTokensArray} theme="light" />
        </Tab.Panel>
        <Tab.Panel>
          <TokensTable tokens={darkTokensArray} theme="dark" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab>
  );
}

function TokensTable({
  tokens,
  theme,
}: {
  tokens: TokenTypes[];
  theme: 'light' | 'dark';
}) {
  return (
    <div className="@container">
      <table className="!block !border-0 !shadow-none @3xl:!table @3xl:!border @3xl:!shadow-sm">
        <thead className="hidden @3xl:table-header-group">
          <tr>
            <th className="w-40">
              <span className="sr-only">Color</span>
            </th>
            <th>Name</th>
            <th>Value (OKLCH)</th>
            <th className="!text-left @3xl:!ps-6">Description</th>
          </tr>
        </thead>
        <tbody className="grid grid-cols-1 gap-5 @md:grid-cols-2 @3xl:table-row-group">
          {tokens.map((token: TokenTypes) => (
            <TokenRow key={token.name} token={token} theme={theme} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TokenRow = React.memo(function TokenRow({
  token,
  theme,
}: {
  token: TokenTypes;
  theme: 'light' | 'dark';
}) {
  const { updateToken, resetToken } = useSomaUITheme();
  const [hex, setHex] = React.useState(token.hex);
  const [oklch, setOklch] = React.useState(token.oklch);
  const [isChange, setIsChange] = React.useState(false);

  const cssVariable = `${token.name}: ${oklch}; /* ${hex} */`;
  const isColorToken = token.hex !== '';
  const isSizeToken =
    token.name === '--border-radius' || token.name === '--border-width';

  // Determine if this token should have visual separation (bottom border)
  // Separate after: muted-foreground, border-color, text-secondary, and all *-lighter tokens
  const shouldSeparate =
    token.name === '--border-radius' ||
    token.name === '--text-primary' ||
    token.name.includes('lighter');

  // Convert rem to number for slider (e.g., "0.5rem" -> 0.5)
  function remToNumber(remValue: string): number {
    const match = remValue.match(/^([\d.]+)rem$/);
    return match ? parseFloat(match[1]) : 0;
  }

  // Convert number to rem format (e.g., 0.5 -> "0.5rem")
  // Format to avoid floating point precision issues
  function numberToRem(value: number): string {
    // Round to avoid floating point precision issues
    // For border-radius (step 0.125), round to 3 decimal places
    // For border-width (step 0.0625), round to 4 decimal places
    const decimals = token.name === '--border-width' ? 4 : 3;
    const rounded =
      Math.round(value * Math.pow(10, decimals)) / Math.pow(10, decimals);
    return `${rounded}rem`;
  }

  // Memoize hex to OKLCH conversion to avoid recalculating
  const handleOnChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const tokenValue = e.target.value;
      setHex(tokenValue);
      // Convert hex to OKLCH
      const oklchValue = hexToOklch(tokenValue);
      setOklch(oklchValue);
      setIsChange(true);
      // Update CSS variable via context (optimized with RAF batching)
      updateToken(token.name, oklchValue, theme);
    },
    [token.name, theme, updateToken]
  );

  const handleSizeChange = React.useCallback(
    (value: number) => {
      const remValue = numberToRem(value);
      setOklch(remValue);
      setIsChange(true);
      // Update CSS variable via context (optimized with RAF batching)
      updateToken(token.name, remValue, theme);
    },
    [token.name, theme, updateToken, numberToRem]
  );

  function handleOnReset() {
    setHex(token.hex);
    setOklch(token.oklch);
    setIsChange(() => false);
    // Reset CSS variable via context
    resetToken(token.name, theme);
  }

  // Get slider configuration based on token type
  const getSliderConfig = () => {
    if (token.name === '--border-radius') {
      return {
        min: 0,
        max: 2,
        step: 0.125,
      };
    }
    if (token.name === '--border-width') {
      return {
        min: 0,
        max: 0.25,
        step: 0.0625,
      };
    }
    return { min: 0, max: 1, step: 0.01 };
  };

  return (
    <tr
      className={cn(
        '!border-border flex flex-col rounded-lg !border shadow-sm @3xl:table-row @3xl:shadow-none',
        shouldSeparate ? '@3xl:!border-x-0 @3xl:!border-b-0' : '@3xl:!border-0'
      )}
    >
      <td>
        <TokenColor
          hex={hex}
          name={token.name}
          isChange={isChange}
          isColorToken={isColorToken}
          isSizeToken={isSizeToken}
          remValue={oklch}
          onChange={(e) => handleOnChange(e)}
          onSizeChange={handleSizeChange}
          onReset={() => handleOnReset()}
          sliderConfig={isSizeToken ? getSliderConfig() : undefined}
        />
      </td>
      <td className="!pt-0 @3xl:!pt-3">
        <TokenClipboard name={token.name} value={cssVariable} />
      </td>
      <td className="!pt-0 @3xl:!pt-3">
        <TokenOklchValue oklch={oklch} />
      </td>
      <td className="!pt-0 !text-left @3xl:!ps-6 @3xl:!pt-3">
        <span className="text-gray-900">{token.description}</span>
      </td>
    </tr>
  );
});

const TokenColor = React.forwardRef<HTMLInputElement, any>(
  ({
    hex,
    name,
    isChange,
    isColorToken,
    isSizeToken,
    remValue,
    onSizeChange,
    onReset,
    sliderConfig,
    ...inputProps
  }) => {
    // For size tokens (border-radius, border-width), show a popover with range slider
    if (isSizeToken && sliderConfig) {
      // Parse rem value to number (e.g., "0.5rem" -> 0.5)
      const match = remValue.match(/^([\d.]+)rem$/);
      const currentValue = match ? parseFloat(match[1]) : 0;

      return (
        <div className="relative flex items-center gap-2">
          <Popover>
            <Popover.Trigger>
              <Button
                variant="outline"
                size="sm"
                className="w-full justify-between font-mono text-xs"
              >
                <span>{remValue}</span>
                <ChevronDownIcon className="h-4 w-4 opacity-50" />
              </Button>
            </Popover.Trigger>
            <Popover.Content className="w-64 p-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                    {name.replace('--', '').replace(/-/g, ' ')}
                  </span>
                  <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
                    {remValue}
                  </span>
                </div>
                <RangeSlider
                  size="sm"
                  min={sliderConfig.min}
                  max={sliderConfig.max}
                  step={sliderConfig.step}
                  value={currentValue}
                  onChange={(value) => onSizeChange(value as number)}
                />
                <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                  <span>{sliderConfig.min}rem</span>
                  <span>{sliderConfig.max}rem</span>
                </div>
              </div>
            </Popover.Content>
          </Popover>
          {isChange ? (
            <button
              title="Reset"
              onClick={onReset}
              className="flex-shrink-0 border-0 p-0 text-gray-900 shadow-none outline-none dark:text-gray-100"
            >
              <ArrowPathIcon strokeWidth={2} className="me-1 h-4 w-4" />
            </button>
          ) : null}
        </div>
      );
    }

    // For non-color tokens that aren't size tokens, show a visual indicator
    if (!isColorToken) {
      return (
        <div className="relative flex items-center gap-2">
          <div className="border-muted bg-muted/30 flex h-10 w-full items-center justify-center rounded border-2 border-dashed shadow-md">
            <span className="text-xs font-medium text-gray-600">
              Size Token
            </span>
          </div>
        </div>
      );
    }

    return (
      <div className="relative flex items-center gap-2">
        <Popover>
          <Popover.Trigger>
            <Button
              variant="outline"
              size="sm"
              className="h-10 w-full justify-between overflow-hidden p-0"
            >
              <span
                className={cn(
                  'inline-flex h-full w-12 flex-shrink-0 rounded-l shadow-md',
                  'border-border border-r',
                  hex === '#ffffff' && 'border-2',
                  hex === '#000000' && 'dark:border-2'
                )}
                style={{ backgroundColor: hex }}
              />
              <span className="flex-1 px-3 text-left font-mono text-xs text-gray-700 dark:text-gray-300">
                {hex.toUpperCase()}
              </span>
              <ChevronDownIcon className="me-2 h-4 w-4 flex-shrink-0 opacity-50" />
            </Button>
          </Popover.Trigger>
          <Popover.Content className="w-64 p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-900 dark:text-gray-100">
                  {name.replace('--', '').replace(/-/g, ' ')}
                </span>
                <span className="font-mono text-xs text-gray-600 dark:text-gray-400">
                  {hex.toUpperCase()}
                </span>
              </div>
              <div className="relative">
                <label className="relative block flex-1">
                  <span
                    className={cn(
                      'mb-2 inline-flex h-20 w-full cursor-pointer rounded shadow-md',
                      'border-border border',
                      hex === '#ffffff' && 'border-2',
                      hex === '#000000' && 'dark:border-2'
                    )}
                    style={{ backgroundColor: hex }}
                  />
                  <input
                    type="color"
                    name={name}
                    value={hex}
                    className="invisible absolute inset-0 opacity-0"
                    {...inputProps}
                  />
                </label>
                <div className="text-center text-xs text-gray-500 dark:text-gray-400">
                  Click the color swatch to pick a color
                </div>
              </div>
            </div>
          </Popover.Content>
        </Popover>
        {isChange ? (
          <button
            title="Reset"
            onClick={onReset}
            className="flex-shrink-0 border-0 p-0 text-gray-900 shadow-none outline-none dark:text-gray-100"
          >
            <ArrowPathIcon strokeWidth={2} className="me-1 h-4 w-4" />
          </button>
        ) : null}
      </div>
    );
  }
);

function TokenClipboard({ name, value }: { name: string; value: string }) {
  return (
    <div className="text-text-primary flex items-center justify-between py-1 ps-3 pe-2.5 whitespace-nowrap @3xl:inline-flex">
      {name}
      <CopyButton value={value} />
    </div>
  );
}

function TokenOklchValue({ oklch }: { oklch: string }) {
  return (
    <div className="font-mono text-sm whitespace-nowrap text-gray-700">
      {oklch}
    </div>
  );
}
