"use client";

import { Pagination as PaginationApi } from "antd";
import { useState } from "react";

function Pagination({ pageSize, total }) {
  const [current, setCurrent] = useState(1);

  const itemRender = (page, type, originalElement) => {
    // Keep Prev and Next buttons
    if (type === "prev" || type === "next") {
      return originalElement;
    }

    // Keep ONLY the active page number
    if (type === "page" && page === current) {
      return (
        <span
          style={{
            padding: "0 8px",
            fontWeight: 600,
            lineClamp: 1,
            display: "inline-block",
            border: "none",
          }}
        >
          {page}
        </span>
      );
    }

    return null;
  };

  return (
    <PaginationApi
      current={current}
      align="center"
      itemRender={itemRender}
      onChange={(page) => setCurrent(page)}
      defaultPageSize={pageSize}
      total={total}
    />
  );
}

export default Pagination;
