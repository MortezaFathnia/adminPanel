import React from 'react';

const SVG = ({
  style = {},
  fill = '#000',
  width = '100%',
  className = '',
  viewBox = '0 0 27.036 8.547'
}) => (
  <svg
    width={width}
    style={style}
    height={width}
    fill={fill}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ''}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g
      id="Symbols"
      stroke="none"
      stroke-width="1"
      fill="none"
      fill-rule="evenodd"
    >
      <g
        id="Sidebar-Dashboard"
        transform="translate(-207.000000, -525.000000)"
        fill="#737381"
        fill-rule="nonzero"
      >
        <g id="ic_rahnamaee" transform="translate(207.000000, 525.000000)">
          <path
            d="M10.9874696,4.93819257 C10.246723,4.69130068 9.38260135,4.93819257 8.76530068,5.43197635 C8.148,5.92576014 7.77766216,6.66650676 7.77766216,7.53069932 C7.77766216,7.90103716 8.02455405,8.148 8.39496284,8.148 C8.76530068,8.148 9.01226351,7.90110811 9.01226351,7.53069932 C9.01226351,7.16036149 9.13570946,6.66650676 9.5060473,6.41961486 C9.87638514,6.17272297 10.2467939,6.04927703 10.7405777,6.17272297 C11.3578784,6.29616892 11.7282162,6.79002365 11.8516622,7.28380743 C11.9751081,7.90110811 11.8516622,8.39489189 11.3578784,8.76530068 C10.3702399,9.5060473 9.87638514,10.6171318 9.87638514,11.7282162 C9.87638514,12.0985541 10.123277,12.3455169 10.4936858,12.3455169 C10.8640236,12.3455169 11.1109865,12.098625 10.9874696,11.7282162 C10.9874696,10.9874696 11.4812534,10.246723 12.0985541,9.75293919 C12.9627466,9.01219257 13.3330845,8.02455405 13.0861926,7.03691554 C12.8392297,5.92583108 11.9751081,5.18508446 10.9874696,4.93819257 L10.9874696,4.93819257 Z"
            id="Path"
          />
          <path
            d="M9.99983108,14.9380236 C9.87638514,15.0614696 9.87638514,15.3083615 9.87638514,15.4318074 C9.87638514,15.5552534 9.87638514,15.6786993 9.99983108,15.8021453 C10.123277,15.9255912 10.3701689,16.0490372 10.4936149,16.0490372 C10.6170608,16.0490372 10.8639527,15.9255912 10.8639527,15.8021453 C10.9873986,15.8021453 11.1108446,15.5552534 11.1108446,15.4318074 C11.1108446,15.1849155 10.9873986,15.0614696 10.8639527,14.9380236 C10.6170608,14.6910608 10.246723,14.6910608 9.99983108,14.9380236 Z"
            id="Path"
          />
          <path
            d="M10.4936149,0 C4.69122973,0 0,4.69122973 0,10.4936149 C0,16.296 4.69122973,20.9872297 10.4936149,20.9872297 C16.296,20.9872297 20.9872297,16.296 20.9872297,10.4936149 C20.9872297,4.69122973 16.296,0 10.4936149,0 Z M10.4936149,19.7526993 C5.43197635,19.7526993 1.23453041,15.5552534 1.23453041,10.4936149 C1.23453041,5.43197635 5.43197635,1.23453041 10.4936149,1.23453041 C15.5552534,1.23453041 19.7526993,5.43197635 19.7526993,10.4936149 C19.7526993,15.5552534 15.5552534,19.7526993 10.4936149,19.7526993 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
