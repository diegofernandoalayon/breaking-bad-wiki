const Menu = (props:any) => (
  <svg
  height={21}
  width={21}
  viewBox="0 0 21 21"
  xmlns="http://www.w3.org/2000/svg"
  {...props}>
    <g
      fill="none"
      fillRule="evenodd"
      stroke={props.stroke || 'currentColor'}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 6.5h12M4.498 10.5h11.997M4.5 14.5h11.995" />
    </g>
  </svg>
)

export default Menu
