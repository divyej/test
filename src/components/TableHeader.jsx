import React from "react";
import { TableCell, TableRow } from "@mui/material";
import {
  headers as TABLE_HEADERS,
  mapping,
} from "../utils/datasets/TableFields";
import { COLORS } from "../utils/datasets/colors";

const TableHeader = ({ onSort }) => (
  <>
    <TableRow>
      <TableCell
        colSpan={5}
        align="right"
        style={{
          backgroundColor: COLORS.callBackground,
          border: COLORS.border,
          fontSize: "1.2rem",
          textTransform: "none",
        }}
      >
        CALLS
      </TableCell>
      <TableCell
        align="center"
        style={{ backgroundColor: "#eeeeee", border: COLORS.border }}
      />

      <TableCell
        colSpan={5}
        style={{
          backgroundColor: COLORS.putBackground,
          border: COLORS.border,
          fontSize: "1.2rem",
          textTransform: "none",
        }}
      >
        PUTS
      </TableCell>
    </TableRow>
    <TableRow>
      {TABLE_HEADERS.calls.map((header, index) => (
        <TableCell
          key={index}
          sx={{
            border: COLORS.border,
            cursor: "pointer",
          }}
          style={{
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => onSort(header)}
        >
          <span>{header}</span>
        </TableCell>
      ))}
      <TableCell
        align="center"
        style={{ backgroundColor: "#eeeeee", border: COLORS.border }}
      >
        Strike Price
      </TableCell>

      {TABLE_HEADERS.puts.map((header, index) => (
        <TableCell
          key={index}
          sx={{
            border: COLORS.border,
            cursor: "pointer",
          }}
          style={{
            display: header === "Put OI (Lakh)" ? "flex" : "table-cell",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          onClick={() => onSort(header)}
        >
          <span>{header}</span>
        </TableCell>
      ))}
    </TableRow>
  </>
);

export default TableHeader;
