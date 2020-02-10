import * as React from 'react';
import Animated from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { Svg, Defs, LinearGradient, Stop, Path } from "react-native-svg";

const { Value, interpolate, multiply } = Animated;
const { PI } = Math;
const AnimatedPath = Animated.createAnimatedComponent(Path);
const { width } = Dimensions.get("window");
const size = width - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth) / 2;
const cx = size / 2;
const cy = size / 2;
const A = PI + PI * 0.4;
const startAngle = PI + PI * 0.2
const endAngle = 2 * PI - PI * 0.2

const startX = cx - radius * Math.cos(startAngle);
const startY = cy - radius * Math.sin(startAngle);
const endX = cx - radius * Math.cos(endAngle);
const endY = cx - radius * Math.sin(endAngle);

const d = `M ${startX} ${startY} A ${radius} ${radius} 0 1 0 ${endX} ${endY}`

interface CircularProgressProps {
    progress: typeof Value
};

export default ({ progress }: CircularProgressProps) => {
    const length = radius * A;
    const alpha = interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, A]
    });

    const strokeDashoffset = multiply(alpha, radius);

    return <Svg width={size} height={size}>
        <Defs>
            <LinearGradient id='grad' x1='0' y1='0' x2='100%' y2='0'>
                <Stop offset="0" stopColor="#f7cd46"></Stop>
                <Stop offset="1" stopColor="#ef9837"></Stop>
            </LinearGradient>
        </Defs>
        <Path
            fill="none"
            stroke="white"
            strokeDasharray={`${length} ${length}`}
            {...{ strokeWidth, d }}
        />
        <AnimatedPath
            fill="none"
            stroke="url(#grad)"
            strokeDasharray={`${length} ${length}`}
            {...{ strokeWidth, strokeDashoffset, d }}
        />
    </Svg>
};