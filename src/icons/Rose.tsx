import { forwardRef, type SVGProps, type Ref } from "react";
const Rose = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 10h-1a4 4 0 1 1 4-4v.534" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 6h1a4 4 0 0 1 1.42 7.74l-2.29.87a6 6 0 0 1-5.339-10.68l2.069-1.31M4.5 17c2.8-.5 4.4 0 5.5.8s1.8 2.2 2.3 3.7c-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M9.77 12C4 15 2 22 2 22m15-12a2 2 0 1 0 0-4 2 2 0 0 0 0 4" /></svg>);
Rose.displayName = "Rose";
export default Rose;