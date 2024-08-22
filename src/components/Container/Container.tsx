import React, {ReactNode} from "react";
import "./Container.css";

type ContainerProps = {
  children: ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className={"container"}>{children}</div>;
};
