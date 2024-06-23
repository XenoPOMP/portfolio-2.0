import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import HtmlHeading from '@/src/components/ui/HtmlHeading';
import { calc, cssVar } from '@/src/utils/css';

import type { SectionProps } from './Section.props';

const Section: VariableFC<'section', SectionProps> = ({
  className,
  children,
  heading,
  ...props
}) => {
  return (
    <section
      className={cn(className)}
      {...props}
    >
      {heading && (
        <HtmlHeading
          className={cn('font-bold p24-[1.875]')}
          {...heading}
          style={{
            marginBottom: calc(`${cssVar('--p-level-2')} * 1.25`),
            ...heading.style,
          }}
        />
      )}

      {children}
    </section>
  );
};

export default Section;
