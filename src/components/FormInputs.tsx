import { useState } from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  FormHelperText,
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
  validate: (value: string) => boolean;
  helperText: string;
  showHelperText?: boolean;
}

export function TextInput({
  onChange,
  validate,
  helperText,
  ...props
}: InputProps) {
  const [showError, setShowError] = useState(false);

  // if the input is valid while typing, remove error
  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    onChange(e);
    if (validate(e.target.value)) setShowError(false);
  }

  // show error if the input value is invalid when user focuses out of input
  function handleBlur(
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) {
    if (!validate(e.target.value)) setShowError(true);
  }

  return (
    <TextField
      {...props}
      error={showError}
      helperText={showError && helperText}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
}

export function PasswordInput({
  label,
  name,
  defaultValue,
  onChange,
  validate,
  helperText,
  showHelperText,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [showError, setShowError] = useState(false);

  // if the input is valid while typing, remove error
  function handleChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    onChange(e);
    if (validate(e.target.value)) setShowError(false);
  }

  // show error if the input value is invalid when user focuses out of input
  function handleBlur(
    e: React.FocusEvent<HTMLTextAreaElement | HTMLInputElement, Element>
  ) {
    if (!validate(e.target.value)) setShowError(true);
  }

  return (
    <FormControl required error={showError}>
      <InputLabel htmlFor={`${name}-input`}>{label}</InputLabel>
      <OutlinedInput
        aria-describedby={`${name}-helper-text`}
        id={`${name}-input`}
        type={showPassword ? "text" : "password"}
        label={label}
        name={name}
        defaultValue={defaultValue}
        onChange={handleChange}
        onBlur={handleBlur}
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
      {(showHelperText || showError) && (
        <FormHelperText id={`${name}-helper-text`}>{helperText}</FormHelperText>
      )}
    </FormControl>
  );
}
