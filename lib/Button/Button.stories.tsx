import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button';

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Text: Story = {
  args: {
   children: "Text"
  },
};

export const Contained: Story = {
    args: {
     variant: "contained",
     children: "Default"
    }
};

export const Outlined: Story = {
    args: {
     variant: "outlined",
     children: "Outlined"
    }
};