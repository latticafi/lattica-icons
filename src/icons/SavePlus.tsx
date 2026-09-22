import { forwardRef, type SVGProps, type Ref } from "react";
const SavePlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12.5 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h10.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V12" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16 13H8a1 1 0 0 0-1 1v7m12 1v-6m3 3h-6M7 3v4a1 1 0 0 0 1 1h7" /></svg>);
SavePlus.displayName = "SavePlus";
export default SavePlus;