import { FieldError, UseFormRegister } from "react-hook-form";
import { string } from "zod";

export type FormData = {
  email: string;
  githubUrl: string;
  yearsOfExperience: number;
  password: string;
  confirmPassword: string;
};

export type FormFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<FormData> | string;
  error: FieldError | undefined;
  valueAsNumber?: boolean;
};

export type ValidFieldNames = {
  email: string;
  githubUrl: string;
  yearsOfExperience: string;
  password: string;
  confirmPassword: string;
};
