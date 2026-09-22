import { forwardRef, type SVGProps, type Ref } from "react";
const UserRoundGroup = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 21a5 5 0 0 0-10 0m15-10.5a3.5 3.5 0 0 0-5.507-2.868m-8.986 0A3.5 3.5 0 0 0 2 10.5" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6.5-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5m-13 0a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" /></svg>);
UserRoundGroup.displayName = "UserRoundGroup";
export default UserRoundGroup;