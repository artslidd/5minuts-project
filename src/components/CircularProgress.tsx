import * as React from 'react';
import Animated from 'react-native-reanimated';
import { Dimensions } from 'react-native';
import { Svg, Circle } from "react-native-svg";

const { Value, interpolate, multiply } = Animated;
const AnimatedCircle = Animated.createAnimatedComponent(Circle);
const { width } = Dimensions.get("window");
const size = width - 32;
const strokeWidth = 50;
const radius = (size - strokeWidth) / 2;
const circumference = radius * 2 * Math.PI;

interface CircularProgressProps {
    progress: typeof Value
};

export default ({ progress }: CircularProgressProps) => {
    const alpha = interpolate(progress, {
        inputRange: [0, 1],
        outputRange: [0, 2 * Math.PI]
    });

    const strokeDashoffset = multiply(alpha, radius);

    return <Svg width={size} height={size}>
        <AnimatedCircle
            fill="none"
            stroke="#2162cc"
            cx={size / 2}
            cy={size / 2}
            r={radius}
            strokeDasharray={`${circumference} ${circumference}`}
            {...{ strokeWidth, strokeDashoffset }}
        />
    </Svg>
};