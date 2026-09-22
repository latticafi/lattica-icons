import { forwardRef, type SVGProps, type Ref } from "react";
const ThermometerSun = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m0 4a4 4 0 0 0-1.645 7.647M2 12h2m.93-7.07 1.41 1.41m0 11.32-1.41 1.41M20 14.54a4 4 0 1 1-4 0V4a2 2 0 1 1 4 0z" /></svg>);
ThermometerSun.displayName = "ThermometerSun";
export default ThermometerSun;