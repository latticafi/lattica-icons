import { forwardRef, type SVGProps, type Ref } from "react";
const SaveAll = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2v3a1 1 0 0 0 1 1h5m2 12v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 22H4a2 2 0 0 1-2-2V6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z" /></svg>);
SaveAll.displayName = "SaveAll";
export default SaveAll;