"use client";

import { useEffect, useState } from "react";

type Props = {
  amount: number;
  visible: boolean;
};

export default function MoneyAnimation({
  amount,
  visible,
}: Props) {

  const [show, setShow] = useState(false);

  useEffect(() => {

    if (!visible) return;

    setShow(true);

    const timer = setTimeout(() => {
      setShow(false);
    }, 1200);

    return () => clearTimeout(timer);

  }, [visible]);

  if (!show) return null;

  return (

    <div
      className="
      fixed
      inset-0
      z-[9999]
      flex
      items-center
      justify-center
      pointer-events-none
      "
    >

      <div
        className="
        rounded-3xl
        bg-gradient-to-r
        from-emerald-500
        to-green-600
        px-10
        py-6
        text-center
        shadow-[0_25px_60px_rgba(16,185,129,0.35)]
        animate-pulse
        "
      >        <p className="text-5xl font-black text-white">
          +${amount.toLocaleString("es-MX")}
        </p>

        <p className="mt-3 text-3xl">
          💸 ✨
        </p>

      </div>

    </div>

  );
}