/**
 * @file src/components/ui/logo-icon.tsx
 * Logo icon component for Pharmart
 */
import React from "react";

interface LogoIconProps extends React.SVGProps<SVGSVGElement> {}

const LogoIcon = React.forwardRef<SVGSVGElement, LogoIconProps>(
  ({ className, ...props }, ref) => {
    return (
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        ref={ref}
        className={className}
        {...props}
      >
        <rect width="40" height="40" rx="8" fill="#4F46E5" />
        <path
          d="M12 10V30M12 10H24C26.2091 10 28 11.7909 28 14V18C28 20.2091 26.2091 22 24 22H12V10Z"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 22V30"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18 26H23C25.2091 26 27 24.2091 27 22V22"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 16H21"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }
);

LogoIcon.displayName = "LogoIcon";

export default LogoIcon;
