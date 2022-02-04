export interface FormSet {
  field: string;
  label: string;
  type: string;
  hidden: boolean;
  mandatory: boolean;
}

export enum FormType {
  text = 'text',
  password = 'password',
  checkbox = 'checkbox'
}
