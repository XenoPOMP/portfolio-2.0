import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import HtmlHeading from '@/src/components/ui/HtmlHeading';
import { PROJECT_LIST_GAP } from '@/src/constants/css-vars.constants.ts';

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
            marginBottom: PROJECT_LIST_GAP,
            ...heading.style,
          }}
        />
      )}

      {children}
    </section>
  );
};

export default Section;
