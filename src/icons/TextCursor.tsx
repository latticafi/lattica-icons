import { forwardRef, type SVGProps, type Ref } from "react";
const TextCursor = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M17 22h-1a4 4 0 0 1-4-4m0 0V6m0 12a4 4 0 0 1-4 4H7m5-16a4 4 0 0 1 4-4h1m-5 4a4 4 0 0 0-4-4H7" /></svg>);
TextCursor.displayName = "TextCursor";
export default TextCursor;