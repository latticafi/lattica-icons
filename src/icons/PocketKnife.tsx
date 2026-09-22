import { forwardRef, type SVGProps, type Ref } from "react";
const PocketKnife = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2m13-7h.01M6 18h.01m14.82-9.17a4.004 4.004 0 0 0-1.298-6.527 4 4 0 0 0-4.362.867l-12 12a4.002 4.002 0 1 0 5.66 5.66z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M18 11.66V22a4 4 0 0 0 4-4V6" /></svg>);
PocketKnife.displayName = "PocketKnife";
export default PocketKnife;