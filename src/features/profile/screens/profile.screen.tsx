import { useContext, useEffect } from "react";
import { SafeArea } from "@components/utils/safe-area.component";
import { AuthenticationContext } from "@services/authentication/authentication.context";
import { LoginScreen } from "../../account/screens/login.screen";
import { ProfileMenu } from "../components/profile-menu/profile-menu.component";
import { getAllOrders } from "@infrastructure/api/orders/get-all-orders";
import { getConfig } from "@infrastructure/api/config";
import { Profile } from "@types/Profile";

export const ProfileScreen = () => {
  const { isAuthenticated, profile, setProfile } = useContext(
    AuthenticationContext
  );
  const config = getConfig();

  useEffect(() => {
    if (profile && profile.isAdmin && !profile.allOrders) {
      getAllOrders(config)
        .then((orders) => {
          //console.log(orders);
          const updatedProfile: Profile = { ...profile, allOrders: orders };
          setProfile(updatedProfile);
        })
        .catch(console.error);
    }
    return () => {
      null;
    };
  }, [profile]);

  return (
    <>
      {isAuthenticated ? (
        <SafeArea>
          <ProfileMenu />
        </SafeArea>
      ) : (
        <LoginScreen />
      )}
    </>
  );
};
