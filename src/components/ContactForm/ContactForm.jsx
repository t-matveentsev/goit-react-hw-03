import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import onlyLetters from "../../helpers/validation-name";
import onlyPhone from "../../helpers/validation-phone";

const ContactForm = ({ handleAdd }) => {
  const initialValues = {
    name: "",
    number: "",
  };

  const applySchema = Yup.object().shape({
    name: Yup.string()
      .required()
      .matches(onlyLetters, "Імʼя має містити тільки літери")
      .min(3, "Мінімум 3 сиволи!")
      .max(50, "Максимум 50 символів"),
    number: Yup.string()
      .required()
      .matches(
        onlyPhone,
        "Будь ласка введіть номер телефону в форматі 459-12-56"
      )
      .min(7, "Мінімум 7 сиволи!")
      .max(11, "Максимум 11 символів"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleAdd}
        validationSchema={applySchema}
      >
        <Form>
          <Field name="name" />
          <ErrorMessage name="name" component="p" />
          <Field name="number" />
          <ErrorMessage name="number" component="p" />
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
