import * as React from "react"

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100px"
      height="100px"
      viewBox="0 0 128 128"
      {...props}
    >
      <rect width="100%" height="100%" fill="#FFF" />
      <g>
        <path
          fill="#f8ead4"
          d="M99.359 10.919a60.763 60.763 0 100 106.162 63.751 63.751 0 110-106.162z"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="840ms"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <path
          fill="#f1d3a5"
          d="M28.641 117.081a60.763 60.763 0 100-106.162 63.751 63.751 0 110 106.162z"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="1260ms"
          repeatCount="indefinite"
        />
      </g>
      <g>
        <path
          fill="#e7b365"
          d="M117.081 99.313a60.763 60.763 0 10-106.162 0 63.751 63.751 0 11106.162 0z"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 64 64"
          to="360 64 64"
          dur="2520ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  )
}

export default SvgComponent
