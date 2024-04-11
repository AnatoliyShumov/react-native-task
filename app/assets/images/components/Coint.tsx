import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';

function BUSDTCoinIco(props: any) {
  return (
    <Svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width={25} height={25} rx={12.5} fill="#FCD434" />
      <Path
        d="M9.611 11.35l3.112-3.11 3.113 3.112 1.81-1.81-4.923-4.924L7.8 9.54l1.81 1.81zm-4.9 1.28l1.811-1.811 1.81 1.81-1.81 1.81-1.81-1.81zm4.9 1.278l3.112 3.111 3.113-3.113 1.81 1.81-4.923 4.924L7.8 15.718l-.002-.002 1.812-1.808zm7.502-1.279l1.81-1.81 1.81 1.81-1.81 1.81-1.81-1.81zm-2.554-.001h.002v.001l-1.838 1.838-1.836-1.835-.003-.003.003-.002.322-.322.156-.156 1.358-1.357 1.837 1.836h-.001z"
        fill="#000"
      />
    </Svg>
  );
}

export default BUSDTCoinIco;
