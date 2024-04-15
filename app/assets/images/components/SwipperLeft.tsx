import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={14}
    height={28}
    viewBox="0 0 14 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M0 14L13.5 0.5V27.5L0 14Z" fill="white" />
  </Svg>
);
export default SVGComponent;
