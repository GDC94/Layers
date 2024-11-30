import React from "react";

export interface ClientLayoutProps {
  children?: React.ReactNode;
}

const ClientLayout = ({ children }: ClientLayoutProps) => {
  return <main>{children}</main>;
};

export default ClientLayout;
