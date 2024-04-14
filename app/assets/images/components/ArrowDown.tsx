import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={20}
    height={11}
    viewBox="0 0 20 11"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="M10 10.6665L0 0.666504L20 0.666504L10 10.6665Z" fill="#FE734C" />
  </Svg>
);
export default SVGComponent;
