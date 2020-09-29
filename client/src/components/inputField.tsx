import React from "react";
import { useField } from "formik";
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
  Textarea,
} from "@chakra-ui/core";

type inputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  placeholder: string;
  name: string;
  textarea?: boolean;
};

const inputField: React.FC<inputFieldProps> = ({
  label,
  size: _,
  textarea,
  ...props
}) => {
  const [field, { error }] = useField(props);
  let TextareaOrInputComponent;
  if (textarea) {
    TextareaOrInputComponent = Textarea;
  } else {
    TextareaOrInputComponent = Input;
  }
  return (
    <FormControl isInvalid={!!error}>
      <FormLabel htmlFor={field.name}>{label}</FormLabel>
      <TextareaOrInputComponent
        {...props}
        {...field}
        id={field.name}
        placeholder={props.placeholder}
      />
      {error ? <FormErrorMessage>{error}</FormErrorMessage> : null}
    </FormControl>
  );
};

export default inputField;
