import { Formik } from 'formik';
import PropTypes from 'prop-types';
import * as yup from 'yup';
import { ContactForm } from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.number().min(6).required(),
});

const initialValues = {
  name: '',
  number: '',
};