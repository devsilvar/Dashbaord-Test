import { useState, createContext, useContext, useEffect } from 'react';
import { ValidateEmail } from '../utils/validation';
import axios from 'axios';
import { BASE_URL } from '../api/api';
const FormContext = createContext();

const Formprovider = ({ children }) => {
  const [Loading, setLoading] = useState(false);
  const [category, setcategory] = useState([]);
  const [inputData, setinputData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phonenumber: '',
    age: '',
    gender: 'Select an option',
    role: 'Select an option',
  });

  const [inStock, setinStock] = useState([]);
  const [tableData, settableData] = useState([]);

  const handleEdits = (e) => {
    setinputData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const getProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get(BASE_URL);
      const data = response.data;
      console.log(data.products);
      let categories = data.products.map((item) => item.category);
      let currentStock = data.products.map(
        (item) => item.availabilityStatus == 'In Stock' && item
      );
      setinStock(currentStock);
      setcategory(categories);
      settableData(data.products);
    } catch (err) {
      throw err;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ErrorMsg);
    console.log(inputData);
  };

  const ErrorMsg = {
    firstname:
      inputData.firstname.length < 4 &&
      'username has to be more than 4 characters',
    lastname:
      inputData.lastname.length < 4 && 'last has to be more than 4 characters',
    email: ValidateEmail(inputData.email) && 'Your Email is Invalid',
    gender: inputData.gender === 'Select an option' && 'Select an option',
    role: inputData.role === 'Select an option' && 'Select an option',
    age: inputData.age.length > 3 && 'Enter a valid Age',
    phonenumber:
      inputData.phonenumber.length < 10 && 'Enter a valid Phone Number',
  };

  const validateSubmit = () => {
    return Object.values(ErrorMsg).every((val) => val === false);
  };

  return (
    <FormContext.Provider
      value={{
        inputData,
        handleEdits,
        handleSubmit,
        getProducts,
        tableData,
        ErrorMsg,
        category,
        Loading,
        inStock,
        validateSubmit,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export { Formprovider, FormContext };
