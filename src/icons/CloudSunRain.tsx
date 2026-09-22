import { forwardRef, type SVGProps, type Ref } from "react";
const CloudSunRain = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v2m-7.07.93 1.41 1.41M20 12h2m-2.93-7.07-1.41 1.41m-1.713 6.31a4 4 0 0 0-5.925-4.128M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24M11 20v2m-4-3v2" /></svg>);
CloudSunRain.displayName = "CloudSunRain";
export default CloudSunRain;