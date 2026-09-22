import { forwardRef, type SVGProps, type Ref } from "react";
const FileCog = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 2v5a1 1 0 0 0 1 1h5m-6-6a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8m-6-6H6a2 2 0 0 0-2 2v6.592M20 8v12a2 2 0 0 1-2 2h-4.182M3.305 19.53l.923-.382m0-2.296-.924-.383m2.548-1.241-.383-.923m.383 6.467-.383.924m2.679-6.468.383-.923m-.001 7.391-.382-.924m1.625-3.92.922-.383m-.922 2.679.922.383M7 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>);
FileCog.displayName = "FileCog";
export default FileCog;