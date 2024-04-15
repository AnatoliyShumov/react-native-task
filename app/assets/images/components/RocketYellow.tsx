import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const SVGComponent = props => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_85_710)">
      <Path
        d="M7.16868 15.973C7.05346 18.0036 7.45156 20.0458 8.38783 22.0577C8.96049 23.2872 9.17506 24.6692 8.84803 25.9856C8.30572 28.1693 6.99412 29.9183 4.59723 31.3376C3.6513 31.8978 2.72056 32.4857 1.84915 33.1556L0.751432 34.0001C0.112536 34.4914 0.0518204 35.4318 0.621721 36.0017L4.22948 39.6094C4.80559 40.1855 5.75773 40.1158 6.24414 39.4625L7.37981 37.9356C7.97455 37.1366 8.5065 36.2901 9.00327 35.4269C10.379 33.0376 12.0487 31.7233 14.1627 31.1465C15.4592 30.7925 16.8301 30.9857 18.0637 31.519C19.9549 32.3373 21.8736 32.6913 23.7834 32.5878C23.918 32.5802 23.9808 32.4118 23.8855 32.3166L7.44052 15.8716C7.34531 15.7764 7.17627 15.8385 7.16868 15.973Z"
        fill="#DADADA"
      />
      <Path
        d="M12.4212 13.0354C15.8507 13.0354 18.6308 10.2552 18.6308 6.82578C18.6308 3.39633 15.8507 0.616211 12.4212 0.616211C8.99179 0.616211 6.21167 3.39633 6.21167 6.82578C6.21167 10.2552 8.99179 13.0354 12.4212 13.0354Z"
        fill="#ECF0F1"
      />
      <Path
        d="M8.97145 7.5157C8.5899 7.5157 8.28149 7.20729 8.28149 6.82575C8.28149 4.5427 10.1382 2.68604 12.4212 2.68604C12.8028 2.68604 13.1112 2.99444 13.1112 3.37599C13.1112 3.75753 12.8028 4.06594 12.4212 4.06594C10.8992 4.06594 9.6614 5.30371 9.6614 6.82575C9.6614 7.2066 9.3523 7.5157 8.97145 7.5157Z"
        fill="#DADADA"
      />
      <Path
        d="M35.8803 3.88739C31.1017 -0.891218 23.2321 -1.12718 16.8045 2.42745C16.8073 2.43021 16.81 2.43228 16.8121 2.43435C19.2373 4.85954 19.2373 8.79089 16.8121 11.2161C14.4718 13.5564 10.7315 13.6309 8.29325 11.4541C7.63918 12.9258 7.27971 14.4223 7.18726 15.9243C7.22934 15.8284 7.35905 15.7898 7.44047 15.8719L23.8848 32.3162C23.9717 32.4038 23.9234 32.5466 23.8117 32.577C27.3001 32.3804 30.7553 30.6672 33.9547 27.4679C40.7321 20.6905 41.8601 9.86721 35.8803 3.88739Z"
        fill="#FE734C"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_85_710">
        <Rect width={40} height={40} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
