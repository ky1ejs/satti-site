import React, { ReactElement } from "react";
import css from "./Center.module.css"

export function Center({children}: {children: ReactElement | ReactElement[]}) {
  return (
    <div className={css.container}>
      <div className={css.content}>{children}</div>
    </div>
  );
};
