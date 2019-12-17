/** @jsx jsx */
import { useEffect, useState, Fragment } from 'react';
import { jsx } from '@emotion/core';
import Select from 'react-select';
import { useFormContext } from 'react-hook-form';
import { selectBoxOptionsType } from 'utils/types';
import { SelectBoxStyle } from './SelectBoxStyle';

//https://codesandbox.io/s/pkwwq0wlq0

type SelectBoxProps = {
  /** SelectBox name */
  name: string;
  /** SelectBox label */
  label?: string;
  placeholder?: string;
  options: selectBoxOptionsType;
  isMulti: boolean;
};
const SelectBox = ({
  name,
  isMulti,
  label,
  options,
  placeholder,
}: SelectBoxProps) => {
  const methods = useFormContext();

  const [values, setReactSelect] = useState({
    selectedOption: [],
  });

  const handleMultiChange = (selectedOption: any): void => {
    methods.setValue(name, selectedOption);
    console.log(selectedOption);

    setReactSelect({ selectedOption });
  };

  useEffect(() => {
    methods.register({ name });
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <div>{label}</div>
      <Select
        styles={SelectBoxStyle}
        className="reactSelect"
        placeholder={placeholder}
        value={values.selectedOption}
        options={options}
        onChange={handleMultiChange}
        isMulti={isMulti}
      />
    </Fragment>
  );
};
SelectBox.defaultProps = {
  placeholder: 'select Placeholder',
  isMulti: false,
  label: 'selectLabel',
  options: [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ],
};

export default SelectBox;
