import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function CloseIcon({width=25, height=25}) {
    return (
        <Svg
            width={width}
            height={height}
            viewBox="0 0 25 25"
            fill="none"
        >
            <Rect
                width={24.9996}
                height={24.9997}
                rx={4}
                fill="#fff"
                fillOpacity={0.1}
            />
            <Path
                d="M18.382 6.618a1.04 1.04 0 00-1.47 0L12.5 11.03 8.088 6.618a1.04 1.04 0 00-1.47 1.47l4.411 4.412-4.412 4.412a1.04 1.04 0 001.471 1.47l4.412-4.411 4.412 4.411a1.04 1.04 0 101.47-1.47L13.97 12.5l4.412-4.412a1.04 1.04 0 000-1.47z"
                fill="#fff"
                fillOpacity={0.4}
            />
        </Svg>
    )
}

export default CloseIcon
