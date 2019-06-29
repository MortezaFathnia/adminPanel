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
        transform="translate(-207.000000, -582.000000)"
        fill="#737381"
        fill-rule="nonzero"
      >
        <g id="ic_gozareshat" transform="translate(207.000000, 582.000000)">
          <path
            d="M20.8791962,6.17990112 L16.485878,0.248977641 C16.3697205,0.0924453633 16.1864319,0 15.9914475,0 C15.796463,0 15.6130142,0.0924453633 15.4971771,0.248977641 L11.1038589,6.17990112 C10.9655914,6.36655425 10.9442825,6.61537168 11.0489044,6.82285308 C11.1533661,7.03033447 11.3659744,7.16139219 11.5982895,7.16139219 L13.1796341,7.16139219 L13.1796341,10.135025 C12.8699341,9.97544863 12.5192185,9.88476562 12.1473541,9.88476562 L11.0490646,9.88476562 C9.80145264,9.88476562 8.78647613,10.8997421 8.78647613,12.1473541 L8.78647613,13.4298935 C8.47677612,13.2703171 8.12590029,13.1796341 7.75419619,13.1796341 L6.65590669,13.1796341 C5.40829468,13.1796341 4.39331817,14.1947708 4.39331817,15.4423828 L4.39331817,16.724762 C4.08345796,16.5653458 3.73274229,16.4745025 3.36103819,16.4745025 L2.26258848,16.4745025 C1.01497651,16.4745025 0,17.4896393 0,18.7372513 L0,20.3847656 C0,20.7245865 0.275413523,21 0.615234375,21 L18.1880264,21 C18.5278473,21 18.8032608,20.7245865 18.8032608,20.3847656 L18.8032608,7.16139219 L20.3847656,7.16139219 C20.6170807,7.16139219 20.829689,7.03033447 20.9341507,6.82285308 C21.0387726,6.61537168 21.0174637,6.36655425 20.8791962,6.17990112 Z M1.23046875,18.7372513 C1.23046875,18.1681595 1.69349668,17.7049713 2.26258848,17.7049713 L3.36087798,17.7049713 C3.93012998,17.7049713 4.39315796,18.1681595 4.39315796,18.7372513 L4.39315796,19.7695312 L1.23046875,19.7695312 L1.23046875,18.7372513 Z M5.62362671,18.7372513 L5.62362671,15.4423828 C5.62362671,14.8731308 6.08665468,14.4101028 6.65590669,14.4101028 L7.75419619,14.4101028 C8.32328798,14.4101028 8.78631592,14.8731308 8.78631592,15.4423828 L8.78631592,19.7695313 L5.62362671,19.7695313 L5.62362671,18.7372513 Z M10.0169449,15.4423828 L10.0169449,12.1473541 C10.0169449,11.5782623 10.4799728,11.1152344 11.0490646,11.1152344 L12.1473541,11.1152344 C12.7164459,11.1152344 13.1796341,11.5782623 13.1796341,12.1473541 L13.1796341,19.7695312 L10.0169449,19.7695312 L10.0169449,15.4423828 Z M18.1880264,5.93092344 C17.8482056,5.93092344 17.572792,6.20633696 17.572792,6.54615782 L17.572792,19.7695313 L14.4101028,19.7695313 L14.4101028,6.54615782 C14.4101028,6.20633696 14.1345291,5.93092344 13.7948685,5.93092344 L12.8196259,5.93092344 L15.9914475,1.64879609 L19.1634293,5.93092344 L18.1880264,5.93092344 Z"
            id="Shape"
          />
        </g>
      </g>
    </g>
  </svg>
);

export default SVG;
