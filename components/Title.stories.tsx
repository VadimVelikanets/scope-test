import type { Meta } from '@storybook/react';
import Title from './Title';
import type { TitleProps } from './Title.types';

export default {
  title: 'Scope/Title',
  component: Title,
} as Meta;

export function Default({children}: TitleProps): JSX.Element {
  return <Title type='title'>{children}</Title>;
}

Default.args = {
  children: 'Content',
};
