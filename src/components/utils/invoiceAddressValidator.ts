import * as Yup from "yup";

export const InvoiceAddressSchema = Yup.object().shape({
  addressName: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  companyName: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  eik: Yup.string()
    .required("Задължително поле!")
    .matches(/[0-9]{9}/, "Въведете ЕИК с 9 цифри!"),
  city: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  postCode: Yup.string().matches(
    /[0-9]{4}/,
    "Въведете пощенски код с 4 цифри!"
  ),
  addressLine: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
});

export const GuestInvoiceAddressSchema = Yup.object().shape({
  companyName: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  eik: Yup.string()
    .required("Задължително поле!")
    .matches(/[0-9]{9}/, "Въведете ЕИК с 9 цифри!"),
  city: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  postCode: Yup.string().matches(
    /[0-9]{4}/,
    "Въведете пощенски код с 4 цифри!"
  ),
  addressLine: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
});
