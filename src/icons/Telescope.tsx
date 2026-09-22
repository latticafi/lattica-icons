import { forwardRef, type SVGProps, type Ref } from "react";
const Telescope = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44m-2.875 6.493 4.332-.924M16 21l-3.105-6.21" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m6.158 8.633 1.114 4.456M8 20.999l3.105-6.21m5.38-8.85a2 2 0 0 1 1.455-2.424l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455zM12 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Telescope.displayName = "Telescope";
export default Telescope;