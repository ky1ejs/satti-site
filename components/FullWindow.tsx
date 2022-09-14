import React, { ReactElement } from "react";
import css from "./FullWindow.module.css"

export function FullWindow({children}: {children: ReactElement}) {
  return (
    <div className={css.container}>
      {children}
    </div>
  );
};
