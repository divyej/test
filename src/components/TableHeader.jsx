import React from "react";
import { TableCell, TableRow, Stack, Box } from "@mui/material";
import {
  headers as TABLE_HEADERS,
  mapping,
} from "../utils/datasets/TableFields";
import { COLORS } from "../utils/datasets/colors";
import { Tooltip, IconButton } from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import { CallProgressHeader, PutProgressHeader } from "../utils/Styled";

const TableHeader = ({ onSort }) => (
  <>
    <TableRow sx={{ height: "30px" }}>
      <TableCell
        colSpan={5}
   
        align="right"
        sx={{
          backgroundColor: COLORS.callBackground,
          border: COLORS.border,
          fontSize: "1.5rem",
          textTransform: "none",
          color: COLORS.callColor,
        }}
      >
        Calls
      </TableCell>
      <TableCell align="center" sx={{ border: COLORS.border }} />
      <TableCell
        colSpan={5}
        sx={{
          backgroundColor: COLORS.putBackground,
          border: COLORS.border,
          fontSize: "1.5rem",
          textTransform: "none",
          color: COLORS.putColor,
        }}
      >
        Puts
      </TableCell>
    </TableRow>
    <TableRow>
      {TABLE_HEADERS.calls.map((header, index) => (
        <TableCell
          key={index}
          align="right"
          sx={{
            border: COLORS.border,
            cursor: "pointer",
          }}
          onClick={() => onSort(header)}
        >
          {" "}
          <Stack
            direction={header !== "Call OI (Lakh)" ? "row" : "row-reverse"}
            sx={{
              justifyContent:
                header !== "Call OI (Lakh)" ? "flex-end" : "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems={"center"}>
              <Tooltip title={`Info about ${header}`}>
                <IconButton size="small">
                  <HelpOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
              <span>{header}</span>
            </Stack>

            {header === "Call OI (Lakh)" && (
              <Stack direction="row" alignItems={"center"}>
                <CallProgressHeader />
              </Stack>
            )}
          </Stack>
        </TableCell>
      ))}
      <TableCell align="center" sx={{ border: COLORS.border }}>
        Strike Price
        <Stack direction={"row"} alignItems={"center"}>
        <Tooltip title="Info about Strike Price">
          <IconButton size="small">
            <HelpOutlineIcon fontSize="small" />
          </IconButton>
        </Tooltip>
       </Stack>
      </TableCell>
      {TABLE_HEADERS.puts.map((header, index) => (
        <TableCell
          key={index}
          sx={{
            border: COLORS.border,
            cursor: "pointer",
          }}
          onClick={() => onSort(header)}
        >
          <Stack
            direction={header !== " Put OI (Lakh)" ? "row" : "row-reverse"}
            sx={{
              justifyContent:
                header !== "Put OI (Lakh)" ? "flex-start" : "space-between",
              alignItems: "center",
            }}
          >
            <Stack direction="row" alignItems={"center"}>
             
              <span>{header}</span>
              <Tooltip title={`Info about ${header}`}>
                <IconButton size="small">
                  <HelpOutlineIcon fontSize="small" />
                </IconButton>
              </Tooltip>
            </Stack>

            {header === "Put OI (Lakh)" && (
              <Stack direction="row" alignItems={"center"}>
                <PutProgressHeader />
              </Stack>
            )}
          </Stack>
        </TableCell>
      ))}
    </TableRow>
  </>
);


export default TableHeader;
