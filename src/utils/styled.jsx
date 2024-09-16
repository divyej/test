
import {  Box } from "@mui/material";
import { styled } from "@mui/system";


export const CallProgressBar = styled(Box)(({ theme, width }) => ({
  height: "30px",
  borderRadius: "12px 0px 0px 12px",  
  backgroundColor: "#ffccbc", 
  position: "absolute",
  top: "50%",
  right: 0,
  transform: "translateY(-50%)",
  width: ` ${50+width}px`,
}));

export const PutProgressBar = styled(Box)(({ theme, width }) => ({
  height: 30,
  borderRadius: "0px 12px 12px 0px",  
  backgroundColor: "#c8e6c9",
  position: "absolute",
  top: "50%",
  left: 0,
  transform: "translateY(-50%)",
  width: `${50+width}px`,
}));