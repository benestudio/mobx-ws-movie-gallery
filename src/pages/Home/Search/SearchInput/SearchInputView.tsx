import React from "react";
import { Icon } from "@iconify/react";
import magnifierIcon from "@iconify/icons-simple-line-icons/magnifier";

import './style.css';

export interface IProps {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  placeholder?: string;
};

const SearchInputView = ({ onChange, placeholder, value }:  IProps) => (
  <div className="SearchInput">
    <Icon icon={magnifierIcon} />
    <input placeholder={placeholder} onChange={onChange} value={value} />
  </div>
);

export default SearchInputView;
