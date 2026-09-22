import { forwardRef, type SVGProps, type Ref } from "react";
const HardDriveDownload = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 2v8M8 6l4 4 4-4m4 8H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2M6 18h.01M10 18h.01" /></svg>);
HardDriveDownload.displayName = "HardDriveDownload";
export default HardDriveDownload;