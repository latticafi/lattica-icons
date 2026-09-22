import { forwardRef, type SVGProps, type Ref } from "react";
const UserGroup = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 21v-1a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2v1m12-11h1a2 2 0 0 1 2 2v1M5 10H4a2 2 0 0 0-2 2v1m10 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6m6-8a2 2 0 1 0 0-4 2 2 0 0 0 0 4M6 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
UserGroup.displayName = "UserGroup";
export default UserGroup;