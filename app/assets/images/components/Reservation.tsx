import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={31}
    height={30}
    viewBox="0 0 26 24"
    fill={props.color}
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M25.5 9.5V22C25.5 22.3315 25.3683 22.6495 25.1339 22.8839C24.8995 23.1183 24.5815 23.25 24.25 23.25H1.75C1.41848 23.25 1.10054 23.1183 0.866116 22.8839C0.631696 22.6495 0.5 22.3315 0.5 22V9.5H25.5ZM24.25 0.75C24.5815 0.75 24.8995 0.881696 25.1339 1.11612C25.3683 1.35054 25.5 1.66848 25.5 2V7H0.5V2C0.5 1.66848 0.631696 1.35054 0.866116 1.11612C1.10054 0.881696 1.41848 0.75 1.75 0.75H24.25Z"
      fill={props.color}
    />
  </Svg>
);
export default SVGComponent;
