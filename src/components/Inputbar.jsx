import { useFormData } from '../context/FormContentData';

const Inputbar = ({ text, value, changer, id, placeholder }) => {
  const { ErrorMsg } = useFormData();
  return (
    <div>
      <label
        htmlFor='email'
        className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
      >
        {text}
      </label>
      <input
        type={id == 'phonenumber' ? 'number' : 'text'}
        id={id}
        value={value}
        onChange={changer}
        className='input-style'
        placeholder={placeholder}
        required
      />
      <small className='text-red-600'>{value && ErrorMsg[id]}</small>
    </div>
  );
};

export default Inputbar;
