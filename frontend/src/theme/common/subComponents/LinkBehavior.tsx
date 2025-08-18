import { type Ref, forwardRef } from 'react';
import { Link, type LinkProps } from 'react-router';

/**
 * LinkBehavior component
 *
 * It has been passed as a default value for "component" prop of MUI's Link component.
 * It ensures that the MUI link is always rendered as react-router Link component
 */
export const LinkBehavior = forwardRef(
  (props: LinkProps, ref: Ref<HTMLAnchorElement> | undefined) => (
    <Link ref={ref} {...props} />
  ),
);

LinkBehavior.displayName = 'LinkBehavior';
