import React from 'react';
import Link from 'next/link';
import { cn } from '@/utils/classnames';
import { sections } from '@/constants/navs';
import useScrollPosition from '@/hooks/useScrollPosition';
import { isEqual, toUpper } from 'lodash';

const Line = ({ isActive, section }: LineProps) => {
  const lineClass = {
    'w-16': isEqual(isActive, section),
    'w-8': !isEqual(isActive, section),
  };

  return (
    <div
      className={cn(
        'h-0.5 bg-white inline-block align-middle mr-4 transition-all duration-300 group-hover:w-16 group-hover:bg-white',
        lineClass
      )}
    />
  );
};

const Navs = () => {
  const { activeSection } = useScrollPosition();

  return (
    <React.Fragment>
      {sections.map((item) => {
        return (
          <Link href={`#${item}`} className="group">
            <Line isActive={activeSection} section={item} />
            <span className="inline-block align-middle text-sm">{toUpper(item)}</span>
          </Link>
        );
      })}
    </React.Fragment>
  );
};

export default Navs;
