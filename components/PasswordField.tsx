"use client";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

interface PasswordFieldProps {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  password: string;
  name: string;
  label: string;
}

export default function PasswordField(props: PasswordFieldProps) {
  const [isVisible, setVisibility] = useState(false);
  return (
    <TextField
      fullWidth
      name={props.name}
      onChange={props.handleChange}
      value={props.password}
      label={props.label}
      type={isVisible ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={() => {
                setVisibility(!isVisible);
              }}
            >
              {isVisible ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
}
