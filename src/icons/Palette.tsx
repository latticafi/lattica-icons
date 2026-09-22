import { forwardRef, type SVGProps, type Ref } from "react";
const Palette = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22a10 10 0 0 1 0-20c2.652 0 5.196.948 7.071 2.636S22 8.613 22 11a5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z" /><path fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13.5 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m4 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m-11 2a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1m2-5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1" /></svg>);
Palette.displayName = "Palette";
export default Palette;