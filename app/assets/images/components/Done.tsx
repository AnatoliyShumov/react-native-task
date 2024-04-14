import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={150}
    height={150}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={75} cy={75} r={75} fill="#FE734C" />
  </Svg>
);
export default SVGComponent;
