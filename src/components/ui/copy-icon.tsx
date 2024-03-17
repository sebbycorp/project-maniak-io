import { useTheme } from 'next-themes';
import React from 'react';

export function CopyIcon(props: React.HTMLAttributes<SVGElement>) {
  const fillColor = 'white';

  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.25 3.75V16.875C16.25 17.0408 16.1842 17.1997 16.0669 17.3169C15.9497 17.4342 15.7908 17.5 15.625 17.5H4.375C4.20924 17.5 4.05027 17.4342 3.93306 17.3169C3.81585 17.1997 3.75 17.0408 3.75 16.875V3.75C3.75 3.58424 3.81585 3.42527 3.93306 3.30806C4.05027 3.19085 4.20924 3.125 4.375 3.125H7.5C7.09344 3.66547 6.87404 4.32369 6.875 5V5.625H13.125V5C13.126 4.32369 12.9066 3.66547 12.5 3.125H15.625C15.7908 3.125 15.9497 3.19085 16.0669 3.30806C16.1842 3.42527 16.25 3.58424 16.25 3.75Z"
        fill={fillColor}
        fill-opacity="0.1"
      />
      <path
        d="M13.125 11.8749C13.125 12.0406 13.0592 12.1996 12.9419 12.3168C12.8247 12.434 12.6658 12.4999 12.5 12.4999H7.5C7.33424 12.4999 7.17527 12.434 7.05806 12.3168C6.94085 12.1996 6.875 12.0406 6.875 11.8749C6.875 11.7091 6.94085 11.5502 7.05806 11.4329C7.17527 11.3157 7.33424 11.2499 7.5 11.2499H12.5C12.6658 11.2499 12.8247 11.3157 12.9419 11.4329C13.0592 11.5502 13.125 11.7091 13.125 11.8749ZM12.5 8.74989H7.5C7.33424 8.74989 7.17527 8.81573 7.05806 8.93295C6.94085 9.05016 6.875 9.20913 6.875 9.37489C6.875 9.54065 6.94085 9.69962 7.05806 9.81683C7.17527 9.93404 7.33424 9.99989 7.5 9.99989H12.5C12.6658 9.99989 12.8247 9.93404 12.9419 9.81683C13.0592 9.69962 13.125 9.54065 13.125 9.37489C13.125 9.20913 13.0592 9.05016 12.9419 8.93295C12.8247 8.81573 12.6658 8.74989 12.5 8.74989ZM16.875 3.74989V16.8749C16.875 17.2064 16.7433 17.5243 16.5089 17.7588C16.2745 17.9932 15.9565 18.1249 15.625 18.1249H4.375C4.04348 18.1249 3.72554 17.9932 3.49112 17.7588C3.2567 17.5243 3.125 17.2064 3.125 16.8749V3.74989C3.125 3.41837 3.2567 3.10042 3.49112 2.866C3.72554 2.63158 4.04348 2.49989 4.375 2.49989H7.20781C7.55899 2.1067 7.98924 1.79212 8.47041 1.57673C8.95158 1.36134 9.47282 1.25 10 1.25C10.5272 1.25 11.0484 1.36134 11.5296 1.57673C12.0108 1.79212 12.441 2.1067 12.7922 2.49989H15.625C15.9565 2.49989 16.2745 2.63158 16.5089 2.866C16.7433 3.10042 16.875 3.41837 16.875 3.74989ZM7.5 4.99989H12.5C12.5 4.33685 12.2366 3.70096 11.7678 3.23212C11.2989 2.76328 10.663 2.49989 10 2.49989C9.33696 2.49989 8.70107 2.76328 8.23223 3.23212C7.76339 3.70096 7.5 4.33685 7.5 4.99989ZM15.625 3.74989H13.5352C13.6773 4.15131 13.75 4.57403 13.75 4.99989V5.62489C13.75 5.79065 13.6842 5.94962 13.5669 6.06683C13.4497 6.18404 13.2908 6.24989 13.125 6.24989H6.875C6.70924 6.24989 6.55027 6.18404 6.43306 6.06683C6.31585 5.94962 6.25 5.79065 6.25 5.62489V4.99989C6.25001 4.57403 6.32267 4.15131 6.46484 3.74989H4.375V16.8749H15.625V3.74989Z"
        fill={fillColor}
      />
    </svg>
  );
}
