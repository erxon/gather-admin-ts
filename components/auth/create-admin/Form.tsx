import PasswordField from "@/components/PasswordField";
import { TextField, Box, Button } from "@mui/material";
import { useState } from "react";
import Layout from "../Layout";

export default function Form() {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;

    setValues({ ...values, [name]: value });
  };
  const handleSubmit = async () => {
    console.log(values);
  };
  return (
    <Layout heading="Create-Admin">
      <TextField
        fullWidth
        name="username"
        label="username"
        onChange={handleChange}
        value={values.username}
      />
      <PasswordField
        name="password"
        label="password"
        handleChange={handleChange}
        password={values.password}
      />
      <Button variant="contained" onClick={handleSubmit}>
        Create Admin
      </Button>
    </Layout>
  );
}
