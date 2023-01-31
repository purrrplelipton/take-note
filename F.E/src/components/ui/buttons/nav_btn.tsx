import { ReactNode } from "react";

const NavBtn = ({
  className,
  children,
  ariaLabel,
  tooltipText,
  clicked,
}: {
  className: undefined | string;
  children: ReactNode;
  ariaLabel: string;
  tooltipText: string;
  clicked: Function;
}) => (
  <button
    className={className}
    type={"button"}
    aria-label={ariaLabel}
    data-tooltip-text={tooltipText}
    onClick={() => clicked()}
  >
    {children}
  </button>
);

export default NavBtn;
