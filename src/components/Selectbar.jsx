import React from 'react';

const Selectbar = ({ text, value, changer, options, id }) => {
  return (
    <div>
      <label
        htmlFor={id}
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {text}
      </label>
      <select id={id} value={value} onChange={changer} className='input-style'>
        <option value=''>Select an option</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Selectbar;
