import { forwardRef, type SVGProps, type Ref } from "react";
const StarCheck = forwardRef(({
  size = 24,
  ...props
}: SVGProps<SVGSVGElement> & {
  size?: number | string;
}, ref: Ref<SVGSVGElement>) => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" aria-hidden="true" width={size} height={size} ref={ref} {...props}><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="m19.06 12.501 2.78-2.707a.53.53 0 0 0-.294-.905l-5.166-.755a2.1 2.1 0 0 1-1.595-1.16l-2.31-4.68a.53.53 0 0 0-.95.001l-2.309 4.68a2.1 2.1 0 0 1-1.597 1.16l-5.165.754a.53.53 0 0 0-.294.906l3.736 3.637a2.1 2.1 0 0 1 .611 1.88l-.88 5.138a.53.53 0 0 0 .769.56l4.617-2.428.027-.014M15 18l2 2 4-4" /></svg>);
StarCheck.displayName = "StarCheck";
export default StarCheck;