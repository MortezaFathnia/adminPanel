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
    <g>
      <g>
        <path
          d="M382.56,233.376C379.968,227.648,374.272,224,368,224h-64V16c0-8.832-7.168-16-16-16h-64c-8.832,0-16,7.168-16,16v208h-64
			c-6.272,0-11.968,3.68-14.56,9.376c-2.624,5.728-1.6,12.416,2.528,17.152l112,128c3.04,3.488,7.424,5.472,12.032,5.472
			c4.608,0,8.992-2.016,12.032-5.472l112-128C384.192,245.824,385.152,239.104,382.56,233.376z"
        />
      </g>
    </g>
    <g>
      <g>
        <path d="M432,352v96H80v-96H16v128c0,17.696,14.336,32,32,32h416c17.696,0,32-14.304,32-32V352H432z" />
      </g>
    </g>
  </svg>
);

export default SVG;
