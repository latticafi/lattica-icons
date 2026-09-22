import { forwardRef, type SVGProps, type Ref } from "react";
const UserRoundKey = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 11v6m0-4h2M2 21a8 8 0 0 1 12.868-6.349" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10m9 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
UserRoundKey.displayName = "UserRoundKey";
export default UserRoundKey;