type LogoVariant = "light" | "dark";

type LogoProps = {
  variant?: LogoVariant;
  showSub?: boolean;
  size?: number;
};

export default function Logo({
  variant = "light",
  showSub = true,
  size = 22,
}: LogoProps) {
  const isDark = variant === "dark";
  const beanFill = isDark ? "#D4976A" : "#9E623B";
  const surcoStroke = isDark ? "#170e08" : "white";
  const surcoOpacity = isDark ? 0.4 : 0.45;

  return (
    <span className="flex items-center gap-2.5">
      <svg
        width={size}
        height={size * (28 / 22)}
        viewBox="0 0 28 36"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <ellipse cx="14" cy="18" rx="11" ry="16" fill={beanFill} />
        <ellipse
          cx="14"
          cy="18"
          rx="8"
          ry="12"
          fill="none"
          stroke={beanFill}
          strokeWidth="0.5"
          opacity="0.4"
        />
        <path
          d="M14,4 C 10.5,12 10.5,24 14,32"
          stroke={surcoStroke}
          strokeWidth="1.4"
          fill="none"
          opacity={surcoOpacity}
          strokeLinecap="round"
        />
        <ellipse
          cx="11"
          cy="12"
          rx="2.5"
          ry="1.5"
          fill="white"
          opacity="0.12"
          transform="rotate(-20,11,12)"
        />
      </svg>
      <span className="flex flex-col gap-px whitespace-nowrap leading-none">
        <span
          className="font-display text-[17px] font-medium tracking-[0.04em]"
          style={{ color: isDark ? "var(--cream)" : "var(--dark)" }}
        >
          Cuarto{" "}
          <em
            className="not-italic"
            style={{
              fontStyle: "italic",
              color: isDark ? "#D4976A" : "var(--terra)",
            }}
          >
            y
          </em>{" "}
          Mitá
        </span>
        {showSub && (
          <span
            className="text-[9px] font-light uppercase tracking-[0.18em]"
            style={{
              color: isDark ? "#D4976A" : "var(--terra)",
              opacity: isDark ? 0.7 : 0.7,
            }}
          >
            Café · Tienda · Oviedo
          </span>
        )}
      </span>
    </span>
  );
}
