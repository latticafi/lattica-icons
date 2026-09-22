import { forwardRef, type SVGProps, type Ref } from "react";
const SaveOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 35 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 13H8a1 1 0 0 0-1 1v7m7-13h1m2 13v-4M2 2l20 20" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M20.41 20.41A2 2 0 0 1 19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 .59-1.41M29.5 11.5s5 5 4 5M9 3h6.2a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V15" /></svg>);
SaveOff.displayName = "SaveOff";
export default SaveOff;