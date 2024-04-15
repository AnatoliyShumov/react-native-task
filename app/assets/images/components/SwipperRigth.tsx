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
    <Path d="M14 14L0.5 27.5L0.5 0.5L14 14Z" fill="#FE734C" />
  </Svg>
);
export default SVGComponent;
