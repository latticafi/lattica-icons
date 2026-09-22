import { forwardRef, type SVGProps, type Ref } from "react";
const UsersRound = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 21a8 8 0 0 0-16 0" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10m12 7c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg>);
UsersRound.displayName = "UsersRound";
export default UsersRound;