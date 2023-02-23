import { ReactNode } from "react";

const NavBtn = ({
  className,
  children,
  ariaLabel,
  clicked,
}: {
  className: undefined | string;
  children: ReactNode;
  ariaLabel: string;
  clicked: Function;
}) => (
  <button
    className={className}
    type={"button"}
    aria-label={ariaLabel}
    onClick={() => clicked()}
  >
    {children}
  </button>
);

export default NavBtn;
