import { forwardRef, type SVGProps, type Ref } from "react";
const Turtle = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 0 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4m4 0H8m4 0 3.18-2.1M8 10 4.82 7.9" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M16.93 10H20a2 2 0 0 1 0 4H2" /></svg>);
Turtle.displayName = "Turtle";
export default Turtle;