import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

interface InputProps {
  required?: boolean;
  label: string;
  name: string;
  defaultValue: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function TextInput({ onChange, ...props }: InputProps) {
  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    onChange(e);
  }

  return <TextField {...props} onChange={handleChange} />;
}

export function PasswordInput({
  label,
  name,
  defaultValue,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    onChange(e);
  }

  return (
    <FormControl required>
      <InputLabel htmlFor={`${name}-input`}>{label}</InputLabel>
      <OutlinedInput
        id={`${name}-input`}
        type={showPassword ? "text" : "password"}
        label={label}
        name={name}
        defaultValue={defaultValue}
        onChange={handleChange}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={`toggle ${label} visibility`}
              onClick={() => setShowPassword((prev) => !prev)}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
