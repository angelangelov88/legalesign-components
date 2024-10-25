export default {
  title: 'Components/legalesign-button',
};

const Template = (args: any) => `
  <legalesign-button variant="${args.variant}" outline="${args.outline}" size="${args.size}" rounded="${args.rounded}">${args.children}</legalesign-button>
`;

export const Default = Template.bind({});
Default.args = {
  // variant: 'secondary',
  // outline: true,
  // size: 'lg',
  // rounded: 'lg',
  // children: 'Click me1',
  // loading: true,
};

export const FirstStory = Template.bind({});
FirstStory.args = {
  variant: 'primary',
  outline: true,
  size: 'sm',
  rounded: 'lg',
  children: 'Click me1',
  loading: true,
};
export const SecondStory = Template.bind({});
SecondStory.args = {
  variant: 'secondary',
  outline: true,
  size: 'sm',
  rounded: 'lg',
  children: 'Click me2',
  loading: false,
};
export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  outline: true,
  size: 'sm',
  rounded: 'lg',
  children: 'Click me3',
  loading: true,
};
export const Destructive = Template.bind({});
Destructive.args = {
  variant: 'destructive',
  outline: true,
  size: 'sm',
  rounded: 'lg',
  children: 'Click me3',
  loading: true,
};

// export default {
//   component: LegalesignButton,
//   title: 'LegalesignButton',
//   tags: ['autodocs'],
//   args: {
//     variant: 'primary',
//     children: 'My button',
//   },
// };

// export const Default = {
//   args: {
//     variant: 'primary',
//     children: 'My button',
//   },
// };
