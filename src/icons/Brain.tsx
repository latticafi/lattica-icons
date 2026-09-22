import { forwardRef, type SVGProps, type Ref } from "react";
const Brain = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 18V5m0 0a3 3 0 1 1 5.598 1.5M12 5a3 3 0 1 0-5.598 1.5M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17.997 5.125a4 4 0 0 1 2.526 5.77" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 18a4 4 0 0 0 2-7.464" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M19.967 17.483A4 4 0 1 1 12 18a4.002 4.002 0 0 1-5.824 3.556 4 4 0 0 1-2.143-4.073" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 18a4 4 0 0 1-2-7.464" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.003 5.125a4 4 0 0 0-2.526 5.77" /></svg>);
Brain.displayName = "Brain";
export default Brain;