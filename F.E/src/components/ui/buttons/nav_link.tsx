import { ReactNode } from "react";

const NavLink = ({
  children,
  to,
  target,
}: {
  children: ReactNode | string;
  to: string;
  target: string;
}) => (
  <a href={to} target={target} referrerPolicy={"no-referrer"}>
    {children}
  </a>
);

export default NavLink;
