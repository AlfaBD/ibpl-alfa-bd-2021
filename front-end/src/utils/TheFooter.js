import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="https://sites.google.com/view/projeto-alfa-bd"
          target="_blank"
          rel="noopener noreferrer"
        >
          ALFA-BD
        </a>
        <span className="ml-1">&copy; 2021 ITA.</span>
      </div>
      <div className="mfs-auto"></div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
