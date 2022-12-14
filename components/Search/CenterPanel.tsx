import React, { createRef, useEffect } from 'react';

type CenterPanelPropsType = {
  centerWidth: number | undefined;
  setCenterWidth: (value: number) => void;
  children: React.ReactNode;
};

function CenterPanel({ children, centerWidth, setCenterWidth }: CenterPanelPropsType): JSX.Element {
  const centerRef = createRef<HTMLDivElement>();

  useEffect(() => {
    const percentageMaxWidth = 48;
    const screenWidth = window.screen.width; // total px across width
    const maxWidth = Math.round((percentageMaxWidth / 100) * screenWidth);

    const percentageMinWidth = 30;
    const minWidth = Math.round((percentageMinWidth / 100) * screenWidth);

    if (centerRef.current) {
      if (!centerWidth) {
        setCenterWidth(centerRef.current?.clientWidth);
        return;
      }
      // Set max width
      if (centerWidth > maxWidth) {
        setCenterWidth(maxWidth);
      }

      // Set min width
      if (centerWidth < minWidth) {
        setCenterWidth(minWidth);
      }
      centerRef.current.style.width = `${centerWidth}px`;
    }
  }, [centerRef, centerWidth, setCenterWidth]);

  return <div className=" md:flex-1 min-w-full  md:min-w-0" ref={centerRef}>{children}</div>;
}

export default CenterPanel;
