import { forwardRef, type SVGProps, type Ref } from "react";
const FileLock = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 2v5a1 1 0 0 0 1 1h5M9 17v-2a2 2 0 0 0-4 0v2m5 0H4a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1" /></svg>);
FileLock.displayName = "FileLock";
export default FileLock;