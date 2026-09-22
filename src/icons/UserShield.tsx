import { forwardRef, type SVGProps, type Ref } from "react";
const UserShield = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 15H6a4 4 0 0 0-4 4v2m20-3.5c0 2.5-1.75 3.75-3.83 4.474a.5.5 0 0 1-.335-.005C15.75 21.25 14 20 14 17.5V14a.5.5 0 0 1 .5-.499c1 0 2.25-.6 3.12-1.36a.6.6 0 0 1 .76 0c.875.764 2.12 1.36 3.12 1.36a.5.5 0 0 1 .5.5zM9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>);
UserShield.displayName = "UserShield";
export default UserShield;