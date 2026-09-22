import { forwardRef, type SVGProps, type Ref } from "react";
const Wallpaper = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 17v4m-4 0h8m-7-4 6.1-6.1a2 2 0 0 1 2.81.01L22 15M8 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2" /></svg>);
Wallpaper.displayName = "Wallpaper";
export default Wallpaper;