import { forwardRef, type SVGProps, type Ref } from "react";
const MousePointer2Off = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m15.55 8.45 5.138 2.087a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063L8.45 15.551M22 2 2 22m4.816-10.472-2.779-6.84a.495.495 0 0 1 .651-.651l6.84 2.779" /></svg>);
MousePointer2Off.displayName = "MousePointer2Off";
export default MousePointer2Off;