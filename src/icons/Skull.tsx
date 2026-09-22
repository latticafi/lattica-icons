import { forwardRef, type SVGProps, type Ref } from "react";
const Skull = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m12.5 17-.5-1-.5 1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 22a1 1 0 0 0 1-1v-1a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20v1a1 1 0 0 0 1 1z" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M15 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2m-6 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2" /></svg>);
Skull.displayName = "Skull";
export default Skull;