export const translatedError = (text: string) => {
  if (text.includes("user-not-found")) {
    return "Не съществува такъв потребител!";
  } else if (text.includes("email-already-in-use")) {
    return "Потребител с този имейл вече съществува!";
  } else if (text.includes("requires-recent-login")) {
    return "Смяна на паролата изисква да сте влезли наскоро в профила.";
  } else if (text.includes("wrong-password")) {
    return "Грешна парола!";
  } else if (text.includes("weak-password")) {
    return "Слаба парола!";
  } else if (text.includes("invalid-email")) {
    return "Невалиден имейл!";
  } else {
    return "Грешка!";
  }
};

export const errors: { [key: string]: string } = {
  "FirebaseError: Firebase: Error (auth/email-already-in-use).":
    "Имейлът вече съществува. Пробвайте с друг имейл.",
  "FirebaseError: Firebase: Error (auth/requires-recent-login).":
    "Смяна на паролата изисква да сте влезли наскоро в профила.",
  "FirebaseError: Firebase: Error (auth/wrong-password).": "Грешна парола!",
  "FirebaseError: Firebase: Password should be at least 6 characters (auth/weak-password).":
    "Паролата трябва да е дълга поне 6 символа!",
  "FirebaseError:Firebase:Error (auth/user-not-found).":
    "Не съществува такъв потребител!",
};
