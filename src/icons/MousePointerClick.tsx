import { forwardRef, type SVGProps, type Ref } from "react";
const MousePointerClick = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M14 4.1 12 6M5.1 8l-2.9-.8M6 12l-1.9 2M7.2 2.2 8 5.1m1.037 4.59a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.95l-4.349 1.04a1 1 0 0 0-.74.74l-1.04 4.35a.5.5 0 0 1-.95.073z" /></svg>);
MousePointerClick.displayName = "MousePointerClick";
export default MousePointerClick;