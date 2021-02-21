import React, {useCallback} from 'react';

const Picker = ({
  value,
  onChange,
  options,
}) => {
  const onSelectChange = useCallback(e => {
    onChange(e.target.value);
  }, [onChange]);
  return (
    <span>
      <h1>{value}</h1>
      <select onChange={onSelectChange} value={value}>
        {options.map(option => (
          <option value={option} key={option}>
            {option}
          </option>
        ))}
      </select>
    </span>
  );
};

export default Picker;
