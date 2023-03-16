import { useState } from 'react';

const useForm = ({ initialState, onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    setState(prevState => {
      const { name, value, checked, type } = target;
      const newValue = type === 'checkbox' ? checked : value;

      return { ...prevState, [name]: newValue };
    });
  };

  const handleDataChange = ({ type, data }) => {
    console.log('type', type);
    if (type === 'date') {
      setState(prevState => {
        console.log('dateType prevState', prevState);
        return { ...prevState, transactionDate: data };
      });
    }
    if (type === 'type') {
      setState(prevState => {
        console.log('transactType prevState', prevState);
        console.log("type", type)
        return { ...prevState, type: data };
      });
    }
    if (type === 'category') {
      setState(prevState => {
        console.log('categoryType prevState', prevState);
        return { ...prevState, categoryId: data };
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  return { state, setState, handleChange, handleDataChange, handleSubmit };
};

export default useForm;
