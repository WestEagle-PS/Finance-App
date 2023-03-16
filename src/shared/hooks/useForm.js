import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    console.log('target', target);
    setState(prevState => {
      const { name, value, checked, type } = target;
      const newValue = type === 'checkbox' ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleDateChange = date => {
    setState(prevState => {
      return { ...prevState, transactionDate: date };
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleDateChange, handleSubmit };
};

export default useForm;
