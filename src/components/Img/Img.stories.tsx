import { Meta, StoryObj } from '@storybook/react-webpack5';
import { Img } from './Img';
import type { ImgProps } from './Img.types';

const meta: Meta<typeof Img> = {
  title: 'Components/Img',
  component: Img,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<ImgProps>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1639398483621-ae27706deb65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
    alt: 'Placeholder Image',
    width: '400px',
    height: '200px',
    borderRadius: '4px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1639398483621-ae27706deb65?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=764',
    alt: 'Disabled Image',
    width: '400px',
    height: '200px',
    borderRadius: '4px',
    disabled: true,
  },
};
