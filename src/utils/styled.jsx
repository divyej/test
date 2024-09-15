
import {  Box } from "@mui/material";
import { styled } from "@mui/system";


export const CallProgressBar = styled(Box)(({ theme, width }) => ({
  height: "20px",
  borderRadius: "8px 0px 0px 8px",  
  backgroundColor: "#ffccbc", 
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translateY(-50%)",
  width: ` ${50+width}px`,
}));

export const PutProgressBar = styled(Box)(({ theme, width }) => ({
  height: 20,
  borderRadius: "0px 8px 8px 0px",  
  backgroundColor: "#c8e6c9",
  position: "absolute",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  width: `${50+width}px`,
}));