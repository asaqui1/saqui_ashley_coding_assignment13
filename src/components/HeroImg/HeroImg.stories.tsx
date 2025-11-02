import { Meta, StoryObj } from '@storybook/react-webpack5';
import { HeroImg } from './HeroImg';
import type { HeroImgProps } from './HeroImg.types';

const meta: Meta<typeof HeroImg> = {
  title: 'Components/HeroImg',
  component: HeroImg,
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    borderRadius: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};
export default meta;

type Story = StoryObj<HeroImgProps>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1717603545758-88cc454db69b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    alt: 'Hero Image',
    width: '800px',
    height: '400px',
    borderRadius: '8px',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1717603545758-88cc454db69b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    alt: 'Hero Image Disabled',
    width: '800px',
    height: '400px',
    borderRadius: '8px',
    disabled: true,
  },
};
