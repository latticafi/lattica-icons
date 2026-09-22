import { forwardRef, type SVGProps, type Ref } from "react";
const UserKey = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 11v6m0-4h2M3 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 2.072.578M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m10 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
UserKey.displayName = "UserKey";
export default UserKey;