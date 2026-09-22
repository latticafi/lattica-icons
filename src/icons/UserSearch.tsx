import { forwardRef, type SVGProps, type Ref } from "react";
const UserSearch = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8m.3 4H7a4 4 0 0 0-4 4v2m14-1a3 3 0 1 0 0-6 3 3 0 0 0 0 6m4 1-1.9-1.9" /></svg>);
UserSearch.displayName = "UserSearch";
export default UserSearch;