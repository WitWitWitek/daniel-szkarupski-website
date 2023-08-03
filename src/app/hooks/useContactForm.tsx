import { useReducer } from 'react';
import type { FormContent } from '../components/Contact/ContactForm/ContactForm';

interface FormState {
  loading: boolean;
  success: boolean;
  error: boolean;
}

type FormAction = { type: 'SET_LOADING' } | { type: 'SET_SUCCESS' } | { type: 'SET_ERROR' };

const initialFormState: FormState = {
  loading: false,
  success: false,
  error: false,
};

const formStateReducerFn = (state: FormState, action: FormAction) => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: true, success: false, error: false };
    case 'SET_SUCCESS':
      return { ...state, loading: false, success: true, error: false };
    case 'SET_ERROR':
      return { ...state, loading: false, success: false, error: true };
    default:
      return state;
  }
};

const useContactForm = () => {
  const [formState, dispatch] = useReducer(formStateReducerFn, initialFormState);

  const sendContactForm = async (data: FormContent) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      await fetch('/api/contact', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      dispatch({ type: 'SET_SUCCESS' });
    } catch (err) {
      dispatch({ type: 'SET_ERROR' });
    }
  };

  return {
    formState,
    sendContactForm,
  };
};

export default useContactForm;
