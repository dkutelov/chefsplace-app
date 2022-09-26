export const getPaymentOptions = (
  city: string
): { label: string; value: string }[] => {
  let paymentOptions = [
    { label: "Наложен платеж или ППП", value: "0" },
    { label: "Банков път", value: "1" },
    // { label: "С кредитна/ дебитна карта", value: "2" },
  ];

  const cityName = city?.trim().toLowerCase();

  if (cityName === "софия" || cityName === "sofia" || cityName === "sofya") {
    paymentOptions = [
      ...paymentOptions,
      { label: "В брой (само за София)", value: "3" },
    ];
  }

  return paymentOptions;
};

export const paymentOptions: {
  [k: string]: string;
} = {
  "0": "Наложен платеж или ППП",
  "1": "По банков път",
  "2": "С кредитна/ дебитна карта",
  "3": "В брой (само за София)",
};
