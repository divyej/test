import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { Skeleton } from "@mui/material";

const renderSkeletonRow = () => (
  <TableRow>
    {Array.from({ length: 10 }).map((_, idx) => (
      <TableCell key={idx} style={{ border: "1px solid #b0bec5" }}>
        <Skeleton variant="rectangular" height={10} />
      </TableCell>
    ))}
    <TableCell style={{ border: "1px solid #b0bec5" }}>
      <Skeleton variant="rectangular" height={10} />
    </TableCell>
  </TableRow>
);

export default renderSkeletonRow;
