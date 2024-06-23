import type { VariableFC } from '@xenopomp/advanced-types';

import type { HtmlHeadingProps } from './HtmlHeading.props';

const HtmlHeading: VariableFC<'h1', HtmlHeadingProps> = ({
  as: Component = 'h1',
  children,
  ...props
}) => {
  return <Component {...props}>{children}</Component>;
};

export default HtmlHeading;
