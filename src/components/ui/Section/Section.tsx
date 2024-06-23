import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import HtmlHeading from '@/src/components/ui/HtmlHeading';

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
        />
      )}

      {children}
    </section>
  );
};

export default Section;
