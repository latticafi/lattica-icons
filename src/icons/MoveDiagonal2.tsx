import { forwardRef, type SVGProps, type Ref } from "react";
const MoveDiagonal2 = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M13 19h6v-6m0 6L5 5m6 0H5v6" /></svg>);
MoveDiagonal2.displayName = "MoveDiagonal2";
export default MoveDiagonal2;