import React from 'react';
import {
  CheckIcon,
  PlusCircleIcon,
  XMarkIcon,
} from '@heroicons/react/20/solid';
import {
  MultiSelect,
  type MultiSelectProps,
  type MultiSelectOption,
  Text,
  cn,
  Button,
} from '@somaui/ui';
import { z } from 'zod';
import { Controller, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import toast, { Toaster } from 'react-hot-toast';

const options = [
  { label: 'Apple 🍎', value: 'apple', customOptionKey: 'movie' },
  { label: 'Banana 🍌', value: 'banana', customOptionKey: 'footballPlayer' },
  { label: 'Cherry 🍒', value: 'cherry', customOptionKey: 'fight' },
  { label: 'Orange 🍊', value: 'orange', customOptionKey: 'quote' },
  { label: 'Strawberry 🍓', value: 'strawberry', customOptionKey: 'buy' },
  { label: 'Watermelon 🍉', value: 'watermelon', customOptionKey: 'dragon' },
  { label: 'Pineapple 🍍', value: 'pineapple', customOptionKey: 'pLanguage' },
  { label: 'Mango 🥭', value: 'mango', customOptionKey: 'education' },
  { label: 'Kiwi 🥝', value: 'kiwi', customOptionKey: 'serial' },
  { label: 'Blueberry 🫐', value: 'blueberry', customOptionKey: 'name' },
  { label: 'Peach 🍑', value: 'peach', customOptionKey: 'movie' },
  { label: 'Plum 🍑', value: 'plum', customOptionKey: 'footballPlayer' },
  { label: 'Raspberry 🍇', value: 'raspberry', customOptionKey: 'fight' },
  { label: 'Blackberry 🫐', value: 'blackberry', customOptionKey: 'quote' },
  { label: 'Pear 🍐', value: 'pear', customOptionKey: 'buy' },
  { label: 'Grapes 🍇', value: 'grapes', customOptionKey: 'dragon' },
  { label: 'Lemon 🍋', value: 'lemon', customOptionKey: 'pLanguage' },
  { label: 'Lime 🫒', value: 'lime', customOptionKey: 'education' },
  { label: 'Cucumber 🥒', value: 'cucumber', customOptionKey: 'serial' },
  { label: 'Avocado 🥑', value: 'avocado', customOptionKey: 'name' },
];

export default function MultiSelectBox({
  label = 'Multi Select',
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([]);
  console.log('customOptionKey', value);
  return (
    <>
      <MultiSelect
        label={label}
        value={value}
        options={options}
        onChange={setValue}
        {...props}
      />
    </>
  );
}

export function MultiSelectWithSearchAble({
  label = 'Multi Select',
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([]);
  console.log('customOptionKey', value);
  return (
    <>
      <MultiSelect
        label={label}
        value={value}
        options={options}
        onChange={setValue}
        searchable
        clearable
        onClear={() => setValue([])}
        {...props}
      />
    </>
  );
}

export function MultiSelectBoxClearable({
  label = 'Multi Select',
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([
    options[0].value,
    options[1].value,
  ]);

  return (
    <>
      <MultiSelect
        label={label}
        value={value}
        options={options}
        onChange={setValue}
        clearable
        onClear={() => setValue([])}
        {...props}
      />
    </>
  );
}

const customOptions = [
  {
    label: 'Wolverine',
    value: 'wolverine@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/43.jpg',
  },
  {
    label: 'MessiJr',
    value: 'messijr@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/women/65.jpg',
  },
  {
    label: 'Fighter',
    value: 'fighter@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/40.jpg',
  },
  {
    label: 'Missme',
    value: 'missme@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/79.jpg',
  },
  {
    label: 'Price',
    value: 'price@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    label: 'Nightfury',
    value: 'nightfury@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/35.jpg',
  },
  {
    label: 'Django',
    value: 'django@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/12.jpg',
  },
  {
    label: 'Professor',
    value: 'professor@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/48.jpg',
  },
  {
    label: 'Top 4',
    value: 'top4@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/64.jpg',
  },
  {
    label: 'Bucky',
    value: 'bucky@somaui.io',
    avatar: 'https://randomuser.me/api/portraits/men/41.jpg',
  },
];

export function MultiSelectBoxCustomOption({
  label = 'Multi Select',
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([
    customOptions[0].value,
    customOptions[1].value,
  ]);

  return (
    <MultiSelect
      clearable
      label={label}
      value={value}
      onChange={setValue}
      optionClassName="p-0"
      options={customOptions}
      onClear={() => setValue([])}
      displayValue={renderDisplayValue}
      getOptionDisplayValue={renderOptionDisplayValue}
      {...props}
    />
  );
}

function renderDisplayValue(
  selectedItems: string[],
  options: MultiSelectOption[],
  handleClearItem: (value: string) => void
) {
  const filteredItems = options.filter((option) =>
    selectedItems.includes(option.value)
  );
  const isEmpty = filteredItems.length === 0;

  if (isEmpty) {
    return (
      <div className="text-muted-foreground flex w-full flex-wrap items-center gap-2 text-start">
        Select...
      </div>
    );
  }

  return (
    <>
      <div className="flex w-full flex-wrap items-center gap-2 text-start">
        {filteredItems.slice().map((item, idx) => (
          <div
            key={idx}
            className="border-muted flex items-center gap-3 rounded border p-1 ps-2"
          >
            <img
              src={item.avatar}
              alt={item.label}
              className="bg-muted size-8 rounded-full object-cover"
            />
            <div className="[&>p]:!mb-0 [&>p]:leading-snug!">
              <Text fontWeight="medium">{item.label}</Text>
              <Text>{item.value}</Text>
            </div>
            <button
              type="button"
              aria-label={`Remove ${item.label}`}
              className="hover:bg-muted cursor-pointer rounded-full border-0 bg-transparent p-1"
              onClick={(e) => {
                e.stopPropagation();
                handleClearItem(item.value);
              }}
            >
              <XMarkIcon className="size-4" aria-hidden="true" />
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export function MultiSelectBoxCustomOptionTwo({
  label = 'Multi Select',
  ...props
}: MultiSelectProps<MultiSelectOption>) {
  const [value, setValue] = React.useState([
    customOptions[0].value,
    customOptions[1].value,
    customOptions[2].value,
  ]);

  return (
    <MultiSelect
      clearable
      label={label}
      value={value}
      suffix={<></>}
      onChange={setValue}
      optionClassName="p-0"
      options={customOptions}
      dropdownClassName="min-w-80"
      onClear={() => setValue([])}
      displayValue={renderDisplayValueTwo}
      getOptionDisplayValue={renderOptionDisplayValue}
      {...props}
    />
  );
}

function renderDisplayValueTwo(
  selectedItems: string[],
  options: MultiSelectOption[],
  handleClearItem: (value: string) => void
) {
  const filteredItems = options.filter((option) =>
    selectedItems.includes(option.value)
  );
  const isEmpty = filteredItems.length === 0;
  const isLongerThanTwo = filteredItems.length > 2;

  return (
    <div
      className={cn(
        'flex w-full flex-wrap items-center gap-2 text-start',
        !isEmpty && 'me-6'
      )}
    >
      <div className="flex items-center gap-1">
        <PlusCircleIcon className="text-muted-foreground size-5" />
        Status
      </div>
      {isLongerThanTwo ? (
        <span className="border-muted ms-2 border-s ps-2">
          {filteredItems.length} Selected
        </span>
      ) : (
        <div className="border-muted flex items-center gap-2 border-s ps-2">
          {filteredItems.slice(0, 2).map((item, idx) => (
            <div
              key={idx}
              className="border-muted flex items-center gap-3 rounded border ps-2 [&>p]:!mb-0 [&>p]:leading-snug!"
            >
              <Text fontWeight="medium">{item.label}</Text>
              <button
                type="button"
                aria-label={`Remove ${item.label}`}
                className="hover:bg-muted cursor-pointer rounded-full border-0 bg-transparent p-1"
                onClick={(e) => {
                  e.stopPropagation();
                  handleClearItem(item.value);
                }}
              >
                <XMarkIcon className="size-4" aria-hidden="true" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function renderOptionDisplayValue(
  option: MultiSelectOption,
  selected: boolean
) {
  return (
    <div className={cn('flex w-full items-center gap-3 px-3 py-1.5 pe-4')}>
      <img
        src={option.avatar}
        alt={option.label}
        className="bg-muted size-9 rounded object-cover"
      />
      <div className="[&>p]:!mb-0">
        <Text fontWeight="medium">{option.label}</Text>
        <Text>{option.value}</Text>
      </div>
      {selected && <CheckIcon className="ms-auto size-5" />}
    </div>
  );
}

// with react hook form and zod validation

const schema = z.object({
  multiSelect: z
    .array(z.string())
    .min(1, { message: 'Minimum 1 item required!' }),
});

type SchemaType = z.infer<typeof schema>;

export function MultiSelectWithForm() {
  const { handleSubmit, control } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: SchemaType) => {
    console.log('Submitted data', data);
    toast.success('Successfully Submitted.');
  };

  return (
    <>
      <Toaster />

      <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md">
        <Controller
          control={control}
          name="multiSelect"
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <MultiSelect
              label="Multi Select"
              value={value}
              options={options}
              onChange={onChange}
              error={error?.message}
              className="w-full max-w-md"
              clearable
              onClear={() => onChange([])}
            />
          )}
        />

        <Button type="submit" className="mt-4 w-full">
          Submit
        </Button>
      </form>
    </>
  );
}
