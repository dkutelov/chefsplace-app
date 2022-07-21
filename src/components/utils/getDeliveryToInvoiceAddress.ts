import { DeliveryAddress, InvoiceAddress } from "@types/Profile";

export const deliveryAddressToInvoiceData = ({
  defaultValues,
  editAddress,
}: {
  defaultValues: InvoiceAddress;
  editAddress: DeliveryAddress;
}) => {
  //console.log({ editAddress });
  const street = editAddress?.street ? `ул. ${editAddress?.street}` : "";
  const area = editAddress?.area ? `жк/кв ${editAddress?.area}` : "";
  const number = editAddress?.number ? `№ ${editAddress?.number}` : "";
  const block = editAddress?.block ? `бл. ${editAddress?.block}` : "";
  const entrance = editAddress?.entrance ? `вх. ${editAddress?.entrance}` : "";
  const floor = editAddress?.floor ? `ет. ${editAddress?.floor}` : "";
  const apartment = editAddress?.apartment
    ? `ап. ${editAddress?.apartment}`
    : "";
  const firstName = editAddress?.firstName ? `${editAddress?.firstName}` : "";
  const secondName = editAddress?.lastName ? `${editAddress?.lastName}` : "";

  defaultValues.mol = `${firstName} ${secondName}`;
  defaultValues.city = editAddress?.city || "";
  defaultValues.postCode = editAddress?.postCode || "";
  defaultValues.addressLine = `${area} ${street} ${number}`.trim() || "";
  defaultValues.addressLine2 =
    `${block} ${entrance} ${floor} ${apartment}`.trim() || "";
  defaultValues.phoneNumber = editAddress?.phoneNumber || "";

  return defaultValues;
};
