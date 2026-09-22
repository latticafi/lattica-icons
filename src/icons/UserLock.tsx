import { forwardRef, type SVGProps, type Ref } from "react";
const UserLock = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19 16v-2a2 2 0 0 0-4 0v2m-5.5-1H7a4 4 0 0 0-4 4v2m7-10a4 4 0 1 0 0-8 4 4 0 0 0 0 8m10.101 5h-6.202a.9.9 0 0 0-.899.899v3.202c0 .497.402.899.899.899h6.202a.9.9 0 0 0 .899-.899v-3.202a.9.9 0 0 0-.899-.899" /></svg>);
UserLock.displayName = "UserLock";
export default UserLock;