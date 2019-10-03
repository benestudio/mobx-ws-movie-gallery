import React, { useCallback } from 'react';
import SearchInputView from './SearchInputView';

export interface IProps {
  onChange: (value: string) => void;
  value: string;
  placeholder?: string;
};

const SearchInput = ({ onChange, value, placeholder }: IProps) => {
  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), [onChange]);
  return <SearchInputView onChange={handleChange} value={value} placeholder={placeholder} />;
}

export default SearchInput;
