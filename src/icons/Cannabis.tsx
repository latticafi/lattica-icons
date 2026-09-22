import { forwardRef, type SVGProps, type Ref } from "react";
const Cannabis = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M12 22v-4m0 0c-1.5 1.5-3.5 3-6 3 0-1.5.5-3.5 2-5 0 0-2.5.5-6-1 .5-1.5 3.5-3 5-3-1.5-1-4-4-4-6 2.5 0 5.5 1.5 7 3 0-2.5.5-5 2-7 1.5 2 2 4.5 2 7 1.5-1.5 4.5-3 7-3 0 2-2.5 5-4 6 1.5 0 4.5 1.5 5 3-3.5 1.5-6 1-6 1 1.5 1.5 2 3.5 2 5-2.5 0-4.5-1.5-6-3" /></svg>);
Cannabis.displayName = "Cannabis";
export default Cannabis;