import React from 'react';
import { XIcon } from '@heroicons/react/outline';

type ButtonIconPropsType = {
  onClick: (() => void) | ((e: any) => void) | undefined;
  icon?: React.ComponentType<{ className: string }>;
  color?: string;
  additionalClassNames?: string;
};
function ButtonIcon({
  icon: Icon = XIcon,
  onClick,
  color = 'text-gray-600',
  additionalClassNames,
}: ButtonIconPropsType): JSX.Element {
  return (
    <button type="button" onClick={onClick}>
      <Icon className={`w-5 h-5 ${color} ${additionalClassNames}`} />
    </button>
  );
}

export default ButtonIcon;
