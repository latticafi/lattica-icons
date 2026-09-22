import { forwardRef, type SVGProps, type Ref } from "react";
const LassoSelect = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 22a5 5 0 0 1-2-4m2-1.07c.96.43 1.96.74 2.99.91M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.2 7.2 0 0 1-.33 2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6.414 17.414a2 2 0 1 1-2.828-2.829 2 2 0 0 1 2.828 2.83M14.24 22h.09a.35.35 0 0 0 .28-.14l2.57-3.85h4.49a.33.33 0 0 0 .21-.59l-7.34-6a.32.32 0 0 0-.21-.08.34.34 0 0 0-.33.34v10a.35.35 0 0 0 .24.32" /></svg>);
LassoSelect.displayName = "LassoSelect";
export default LassoSelect;