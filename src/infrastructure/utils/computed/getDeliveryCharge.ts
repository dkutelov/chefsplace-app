export const calculateDeliveryCharge = (weight: number): number => {
  let charge = 5;
  const weightCeiled = Math.ceil(weight);

  if (weightCeiled <= 1) {
    return 4.95;
  }

  switch (true) {
    case weightCeiled === 1:
    case weightCeiled === 2:
      charge = 4.95;
      break;
    case weightCeiled === 3:
      charge = 7.45;
      break;
    case weightCeiled === 4:
      charge = 8.45;
      break;
    case weightCeiled === 5:
      charge = 8.95;
      break;
    case weightCeiled > 6:
      charge = 8.95 + (weightCeiled - 6) * 0.8;
    default:
      charge = 8.95 + (weightCeiled - 6) * 0.8;
  }

  return charge;
};
