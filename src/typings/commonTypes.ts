export type PreparedFormData = Record<string, FormDataEntryValue>;
export type FieldError = string;
export type PreparedFormErrors = Map<string, FieldError>;

export type DefaultProps = {
  staticData: Record<string, any>
  styles: Record<string, any>
};
