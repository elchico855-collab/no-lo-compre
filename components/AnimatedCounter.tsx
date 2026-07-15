"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
};

export default function AnimatedCounter({
  value,
  duration = 900,
  prefix = "",
  suffix = "",
}: Props) {

  const [displayValue, setDisplayValue] = useState(value);

  const previousValue = useRef(value);

  useEffect(() => {

    const startValue = previousValue.current;

    const endValue = value;

    let startTime: number | null = null;

    const animate = (time: number) => {

      if (!startTime) startTime = time;

      const progress = Math.min(
        (time - startTime) / duration,
        1
      );

      const current =
        startValue +
        (endValue - startValue) * progress;

      setDisplayValue(Math.round(current));

      if (progress < 1) {

        requestAnimationFrame(animate);

      } else {

        previousValue.current = endValue;

      }

    };

    requestAnimationFrame(animate);

  }, [value, duration]);

  return (
        <span>

      {prefix}

      {displayValue.toLocaleString("es-MX")}

      {suffix}

    </span>
  );
}