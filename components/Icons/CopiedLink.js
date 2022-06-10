import * as React from 'react';

const CopiedLink = (props) => (
  <svg
    pointerEvents="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    width={24}
    height={24}
    {...props}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="#e8979f"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1M8 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M8 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m0 0h2a2 2 0 0 1 2 2v3m2 4H10m0 0 3-3m-3 3 3 3"
    />
  </svg>
);

export default CopiedLink;
