import { forwardRef, type SVGProps, type Ref } from "react";
const UserRound = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 21a8 8 0 0 0-16 0" /></svg>);
UserRound.displayName = "UserRound";
export default UserRound;