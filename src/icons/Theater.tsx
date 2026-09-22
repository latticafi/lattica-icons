import { forwardRef, type SVGProps, type Ref } from "react";
const Theater = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M2 10s3-3 3-8m17 8s-3-3-3-8" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 2c0 4.4-3.6 8-8 8 0 0 2 2 2 5M14 2c0 4.4 3.6 8 8 8 0 0-2 2-2 5M8 15h8M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1m4 0v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1" /></svg>);
Theater.displayName = "Theater";
export default Theater;