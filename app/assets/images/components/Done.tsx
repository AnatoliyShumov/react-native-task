import * as React from 'react';
import Svg, {Circle, G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={150}
    height={150}
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={75} cy={75} r={75} fill="#FE734C" />
    <G clipPath="url(#clip0_85_632)">
      <Path
        d="M74.1708 78.6665L77.1124 81.6081L94.7499 63.9706L97.6958 66.9165L77.1124 87.4998L63.8541 74.2415L66.7999 71.2956L71.227 75.7227L74.1708 78.6644V78.6665ZM74.1749 72.7748L84.4916 62.4561L87.4291 65.3936L77.1124 75.7123L74.1749 72.7748ZM68.2853 84.5561L65.3416 87.4998L52.0833 74.2415L55.0291 71.2956L57.9728 74.2394L57.9708 74.2415L68.2853 84.5561Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_85_632">
        <Rect
          width={50}
          height={50}
          fill="white"
          transform="translate(50 50)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
