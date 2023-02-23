import { ReactNode } from "react";

const NavLink = ({
  className,
  children,
  to,
  target,
}: {
  className: string;
  children: ReactNode | string;
  to: string;
  target: string;
}) => (
  <a
    className={className}
    href={to}
    target={target}
    referrerPolicy={"no-referrer"}
  >
    {children}
  </a>
);

export default NavLink;
