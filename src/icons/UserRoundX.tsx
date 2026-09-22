import { forwardRef, type SVGProps, type Ref } from "react";
const UserRoundX = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m16.5 16.5 5 5M2 21a8 8 0 0 1 11.531-7.18M21.5 16.5l-5 5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" /></svg>);
UserRoundX.displayName = "UserRoundX";
export default UserRoundX;