import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import css from './ContactForm.module.css';

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Error: Name should be of minimum 3 characters length!')
    .max(50, 'Error:Too Long!')
    .required('Fill the fields'),
  number: Yup.string()
    .min(3, 'Error: Number should be of minimum 3 characters length!!')
    .max(50, 'Error: Too Long!')
    .required('Fill the fields'),
});
const initialValues = {
  name: '',
  number: '',
};
const ContactForm = ({ onAdd }) => {
  const handleSubmit = (values, actions) => {
    const newContact = {
      id: nanoid(),
      ...values,
    };
    onAdd(newContact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label htmlFor="name">Name</label>
        <Field className={css.field} type="text" name="name" id="name" />
        <ErrorMessage name="name" component="div" className={css.error} />
        <label htmlFor="number">Number</label>
        <Field className={css.field} type="text" name="number" id="number" />
        <ErrorMessage name="number" component="div" className={css.error} />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
