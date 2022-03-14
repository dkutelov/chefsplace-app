import { View, Text } from "react-native";
import { AuthForm } from "../components/register-form/auth-form.component";
import { ReviewForm } from "../components/review-form/review-form.component";

export const ProfileScreen = () => {
  return (
    <View>
      <Text>Profile</Text>
      <AuthForm />
    </View>
  );
};
