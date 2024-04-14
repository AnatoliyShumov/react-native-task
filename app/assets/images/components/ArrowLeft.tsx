import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={11}
    height={20}
    viewBox="0 0 11 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M10.6667 10L0.666748 20L0.666748 0L10.6667 10Z" fill="white" />
  </Svg>
);
export default SVGComponent;
