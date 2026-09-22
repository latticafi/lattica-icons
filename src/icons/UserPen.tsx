import { forwardRef, type SVGProps, type Ref } from "react";
const UserPen = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M11.5 15H7a4 4 0 0 0-4 4v2m18.378-4.374a2.124 2.124 0 1 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837c.323-.094.616-.268.854-.506zM10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>);
UserPen.displayName = "UserPen";
export default UserPen;