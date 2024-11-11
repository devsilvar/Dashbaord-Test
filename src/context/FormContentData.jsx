import { useContext } from 'react';
import { FormContext } from './FormContext';

export const useFormData = () => useContext(FormContext);
