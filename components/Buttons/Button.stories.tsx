import type { Meta } from '@storybook/react';
import Button from './Button';
import { type ButtonProps } from './Button.types';

export default {
  title: 'Scope/Buttons',
  component: Button,
} as Meta;


export function PrimaryButton({...args}: ButtonProps): JSX.Element {
  return <Button {...args} />;
}

export function SecondaryButton({...args}: ButtonProps): JSX.Element {
  return <Button {...args} />;
}

PrimaryButton.args = {
  label: 'Download',
  styleType: 'primary',
};

SecondaryButton.args = {
  label: 'Download All',
  styleType: 'secondary',
};
