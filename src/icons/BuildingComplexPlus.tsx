import { forwardRef, type SVGProps, type Ref } from "react";
const BuildingComplexPlus = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M10 12h4m-4 9v-3a2 2 0 0 1 3.05-1.702M10 8h4m2 11h6M18 7h2a2 2 0 0 1 2 2v4.355M19 16v6" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8.535" /><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v7.126" /></svg>);
BuildingComplexPlus.displayName = "BuildingComplexPlus";
export default BuildingComplexPlus;