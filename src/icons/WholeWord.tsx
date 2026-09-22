import { forwardRef, type SVGProps, type Ref } from "react";
const WholeWord = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6m3-6v6m7 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-3-8v8m8 2v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" /></svg>);
WholeWord.displayName = "WholeWord";
export default WholeWord;