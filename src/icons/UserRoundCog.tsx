import { forwardRef, type SVGProps, type Ref } from "react";
const UserRoundCog = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m14.305 19.53.923-.382m0-2.296-.923-.383m2.547-1.24-.383-.924m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924M2 21a8 8 0 0 1 10.434-7.62m8.338 3.472.924-.383m-.924 2.68.924.382" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10m8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
UserRoundCog.displayName = "UserRoundCog";
export default UserRoundCog;