"use client"
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";
interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined
  id?: string;
  placeholder?: string;
  validation?: string;
  label ?: string;
  // defaultValue?: string;
}


const FormInput = ({ placeholder, type, name, id, validation, label, size,value }:IInput ) => {
  const { control} = useFormContext()
  return (
    <>
{ label ? label: null}
      <Controller
        control={control}
        name={name}
        render={({field}) => (
          <Input placeholder={placeholder} type={type} size={size} {...field} value={ value ? value : field.value}/>
        )}
      />
      
    </>
  );
};

export default FormInput;