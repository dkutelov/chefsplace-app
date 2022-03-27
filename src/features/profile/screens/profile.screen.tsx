import { useContext } from "react";
import { View, Text } from "react-native";
import { SafeArea } from "../../../components/utils/safe-area.component";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import { LoginScreen } from "../../account/screens/login.screen";
import { AuthForm } from "../components/register-form/auth-form.component";
import { ReviewForm } from "../components/review-form/review-form.component";

export const ProfileScreen = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <>
      {isAuthenticated ? (
        <SafeArea>
          <Text>Profile</Text>
        </SafeArea>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};
