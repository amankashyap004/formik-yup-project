import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const TextInput = ({ label, name, ...rest }) => (
   <div className="mb-4">
      <label htmlFor={name}>{label}:</label>
      <Field
         type="text"
         id={name}
         name={name}
         className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
         {...rest}
      />
      <ErrorMessage name={name} component="div" className="text-red-500" />
   </div>
);

const App = () => {
   const validationSchema = Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
   });

   const handleSubmit = (values, { setSubmitting }) => {
      setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         setSubmitting(false);
      }, 1000);
   };

   return (
      <div className="flex justify-center items-center h-screen">
         <Formik
            initialValues={{ name: "", email: "" }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
         >
            {({ isSubmitting }) => (
               <Form className="p-8 bg-white rounded-lg shadow-lg">
                  <TextInput label="Name" name="name" />
                  <TextInput label="Email" name="email" type="email" />

                  <button
                     type="submit"
                     disabled={isSubmitting}
                     className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                     {isSubmitting ? "Submitting..." : "Submit"}
                  </button>
               </Form>
            )}
         </Formik>
      </div>
   );
};

export default App;
