import { forwardRef, type SVGProps, type Ref } from "react";
const UserCog = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 15H6a4 4 0 0 0-4 4v2m12.305-4.47.923-.382m0-2.296-.923-.383m2.547-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.39-.382-.923m1.624-3.92.924-.383m-.924 2.679.924.383M18 18a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-9-7a4 4 0 1 0 0-8 4 4 0 0 0 0 8" /></svg>);
UserCog.displayName = "UserCog";
export default UserCog;