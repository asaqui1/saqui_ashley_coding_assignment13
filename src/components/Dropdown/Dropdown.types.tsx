export interface DropdownProps {
  options: string[];
  selected?: string;
  disabled?: boolean;
  backgroundColor?: string;
  onChange?: (value: string) => void;
}