import {
  Box,
  Paper,
  TextField,
  Typography,
  Stack,
  Button,
  Divider,
} from "@mui/material";
import PasswordField from "@/components/PasswordField";
import Layout from "../Layout";
import React, { useState } from "react";

export default function Form() {
  const [fieldValues, setFieldValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setFieldValues({ ...fieldValues, [name]: value });
  };

  const handleSubmit = async () => {
    //API Call
    console.log(fieldValues)
    const login = await fetch('/api/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(fieldValues)
    })
    console.log(login)
  };

  return (
    <Layout heading="Login">
      <TextField
        fullWidth
        label="Username"
        name="username"
        onChange={handleChange}
        value={fieldValues.username}
      />
      <PasswordField
        handleChange={handleChange}
        password={fieldValues.password}
        name="password"
        label="Password"
      />
      <Button variant="contained" onClick={handleSubmit}>
        Login
      </Button>
    </Layout>
  );
}
