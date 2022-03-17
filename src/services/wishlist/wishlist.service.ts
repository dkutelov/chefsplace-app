export const wishlistRequest = () => {
  return new Promise<string[]>((resolve, reject) => {
    const mock: string[] = [];
    if (!mock) {
      reject("not found");
    }
    resolve(mock);
  });
};
