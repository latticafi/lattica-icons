import { forwardRef, type SVGProps, type Ref } from "react";
const CodeXml = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m18 16 4-4-4-4M6 8l-4 4 4 4m8.5-12-5 16" /></svg>);
CodeXml.displayName = "CodeXml";
export default CodeXml;