import { Stack, Box, Paper, Typography, Divider } from "@mui/material";
import React from "react";

interface LayoutProps {
    heading: string,
    children: React.ReactNode
}
export default function Layout(props: LayoutProps) {
  return (
    <Box>
      <Paper sx={{ p: 3, width: 350, textAlign: "center" }} variant="outlined">
        <Typography variant="h6">{props.heading}</Typography>
        <Divider sx={{ mt: 1 }} />
        <Stack
          sx={{ mb: 2, p: 2 }}
          alignItems="center"
          justifyContent="center"
          spacing={2}
        >
          {props.children}
        </Stack>
      </Paper>
    </Box>
  );
}
