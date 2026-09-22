import { forwardRef, type SVGProps, type Ref } from "react";
const TrashOff = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 11v6m4 0v-3m2-8V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-1.576.768M19 6v7.344M2 2l20 20M21 6h-9.344M3 6h3M5 6v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1" /></svg>);
TrashOff.displayName = "TrashOff";
export default TrashOff;