import React from "react";

// @Types
import { PageTitleProps } from "types/ComponentsTypes";

const PageTitle: React.FC<PageTitleProps> = ({ icon, label }) => {
  return (
    <div className="page-title">
      {icon}
      <span>{label}</span>
    </div>
  );
};

export default PageTitle;
