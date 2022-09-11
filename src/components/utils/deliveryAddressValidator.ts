import * as Yup from "yup";

export const DeliveryAddressSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  firstName: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  lastName: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  phoneNumber: Yup.string()
    .required("Задължително поле!")
    .matches(/(\+359|0)[0-9]{6,9}/, "Въведете валиден телефонен номер!")
    .min(7, "Въведете валиден телефонен номер!"),
  city: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  postCode: Yup.string().matches(
    /[0-9]{4}/,
    "Въведете пощенски код с 4 цифри!"
  ),
});

export const GuestDeliveryAddressSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  lastName: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  phoneNumber: Yup.string()
    .required("Задължително поле!")
    .matches(/(\+359|0)[0-9]{6,9}/, "Въведете валиден телефонен номер!")
    .min(7, "Въведете валиден телефонен номер!"),
  city: Yup.string()
    .min(3, "Въведете поне 3 символа!")
    .max(50, "Максимална дължина 50 символа!")
    .required("Задължително поле!"),
  postCode: Yup.string().matches(
    /[0-9]{4}/,
    "Въведете пощенски код с 4 цифри!"
  ),
});
