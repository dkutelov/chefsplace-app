import React, { useEffect, useState, useRef, useContext } from "react";
import { View } from "react-native";
import { List } from "react-native-paper";

import { Order } from "@types/Order";
import { colors } from "@infrastructure/theme/colors";
import { Picker } from "@react-native-picker/picker";
import { AdminOrderItemView } from "./admin-order-item-view.component";
import { Spacer, Text } from "@components";
import { paymentOptions } from "@components/utils";
import { Row } from "./order-view.styles";
import { HorizontalRow } from "@components/forms/address/address-form.styles";
import { ViewField } from "../view-field/view-field.component";
import { updateOrderStatus } from "@infrastructure/api/orders/update-order-status";
import { getConfig } from "@infrastructure/api/config";
import { AuthenticationContext } from "@services";
import { Profile } from "@types/Profile";
import { getAllOrders } from "@infrastructure/api/orders/get-all-orders";

export const AdminOrderView = ({ order }: { order: Order }) => {
  const orderAmount = order.items.reduce(
    (prev, current) => prev + Number(current.price) * Number(current.quantity),
    0
  );
  const config = getConfig();
  const [orderStatus, setOrderStatus] = useState(order.status || "0");
  let initialiseStatus = useRef(true);
  const { profile, setProfile } = useContext(AuthenticationContext);
  useEffect(() => {
    if (initialiseStatus.current) {
      initialiseStatus.current = false;
      return () => null;
    }

    updateOrderStatus(config, order._id, orderStatus).then(() => {
      getAllOrders(config)
        .then((orders) => {
          const updatedProfile: Profile = { ...profile, allOrders: orders };
          setProfile(updatedProfile);
        })
        .catch(console.error);
    });
    return () => {
      // ...
    };
  }, [orderStatus]);
  return (
    <View>
      <Spacer position="bottom" size="medium">
        <Text variant="title" style={{ color: colors.ui.primary }}>
          Поръчка № {order.orderNumber}
        </Text>
      </Spacer>
      <Spacer position="bottom" size="large">
        <Text variant="caption">
          Получена на{" "}
          {new Date(order.created).toLocaleDateString("bg-BG", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
          ,{" "}
          {new Date(order.created).toLocaleTimeString("bg-BG", {
            hour12: false,
            hour: "2-digit",
            minute: "2-digit",
          })}{" "}
          ч.
        </Text>
      </Spacer>
      <List.Section
        style={{
          backgroundColor: colors.monochromes.veryLightGray,
          borderRadius: 8,
        }}
      >
        <List.Subheader style={{ fontSize: 20, paddingBottom: 0 }}>
          Поръчани Продукти
        </List.Subheader>
        {order.items.map((x) => (
          <AdminOrderItemView key={x.productId} item={x} />
        ))}
      </List.Section>
      <Spacer position="top" size="medium">
        <Row style={{ marginBottom: 4 }}>
          <Text variant="body">Общо продукти (без ДДС)</Text>
          <Text variant="body">{(orderAmount / 100).toFixed(2)}лв.</Text>
        </Row>
        <Row style={{ marginBottom: 4 }}>
          <Text variant="body">Доставка (без ДДС)</Text>
          <Text variant="body">
            {(order.deliveryCharge / 100).toFixed(2)}лв.
          </Text>
        </Row>
      </Spacer>
      <Row style={{ marginBottom: 4 }}>
        <Text variant="body" style={{ color: colors.ui.primary }}>
          Общо (без ДДС)
        </Text>
        <Text variant="body" style={{ color: colors.ui.primary }}>
          {((orderAmount + order.deliveryCharge) / 100).toFixed(2)}лв.
        </Text>
      </Row>
      <Row style={{ marginBottom: 4 }}>
        <Text variant="body">ДДС</Text>
        <Text variant="body">
          {(((orderAmount + order.deliveryCharge) / 100) * 0.2).toFixed(2)}лв.
        </Text>
      </Row>
      <Row style={{ marginBottom: 4 }}>
        <Text variant="body" style={{ color: colors.ui.primary }}>
          Сума (с ДДС)
        </Text>
        <Text variant="body" style={{ color: colors.ui.primary }}>
          {(((orderAmount + order.deliveryCharge) / 100) * 1.2).toFixed(2)}лв.
        </Text>
      </Row>
      <Spacer position="top" size="xl">
        <Row>
          <Text variant="body">Начин на плащане</Text>
          <Text variant="body">{paymentOptions[order.payment]}</Text>
        </Row>
      </Spacer>
      <Spacer position="top" size="medium">
        <Row>
          <Text variant="body">Статус</Text>
        </Row>
      </Spacer>
      <Spacer position="top" size="medium">
        <Picker
          selectedValue={orderStatus}
          onValueChange={(itemValue, itemIndex) => setOrderStatus(itemValue)}
          mode="dropdown"
          style={{
            backgroundColor: colors.monochromes.veryLightGray,
            borderRadius: 8,
          }}
        >
          <Picker.Item label="Промени статус" value="0" key={101} />
          {[
            {
              label: "Нова",
              value: "PENDING",
            },
            {
              label: "Потвърдена",
              value: "CONFIRMED",
            },
            {
              label: "Очаква плащане",
              value: "AWAITINGPAYMENT",
            },
            {
              label: "Завършена",
              value: "COMPLETED",
            },
            {
              label: "Отказана",
              value: "CANCELLED",
            },
          ].map(({ label, value }) => (
            <Picker.Item label={label} value={value} key={value} />
          ))}
        </Picker>
      </Spacer>
      <Spacer position="top" size="xl">
        <Spacer position="bottom" size="medium">
          <Row>
            <Text variant="title">Адрес за Доставка</Text>
          </Row>
        </Spacer>
      </Spacer>
      <HorizontalRow>
        <ViewField
          label="Име"
          text={order.deliveryAddressId.firstName ?? ""}
          containerStyles={{ flexBasis: "49%" }}
        />
        <ViewField
          label="Фамилия"
          text={order.deliveryAddressId.lastName ?? ""}
          containerStyles={{ flexBasis: "49%" }}
        />
      </HorizontalRow>
      <ViewField
        label="Телефон"
        text={order.deliveryAddressId.phoneNumber ?? ""}
      />
      <ViewField
        label="Фирма/ Обект"
        text={order.deliveryAddressId.company ?? ""}
      />
      <HorizontalRow>
        <ViewField
          label="Нас. място"
          text={order.deliveryAddressId.city ?? ""}
          containerStyles={{ flexBasis: "76%" }}
        />
        <ViewField
          label="ПК"
          text={order.deliveryAddressId.postCode ?? ""}
          containerStyles={{ flexBasis: "23%" }}
        />
      </HorizontalRow>
      <ViewField
        label="Жк/Кв./Местност"
        text={order.deliveryAddressId.area ?? ""}
      />
      <HorizontalRow>
        <ViewField
          label="Ул./ бул."
          text={order.deliveryAddressId.street ?? ""}
          containerStyles={{ flexBasis: "76%" }}
        />
        <ViewField
          label="Номер"
          text={order.deliveryAddressId.number ?? ""}
          containerStyles={{ flexBasis: "23%" }}
        />
      </HorizontalRow>
      <HorizontalRow>
        <ViewField
          label="Блок"
          text={order.deliveryAddressId.block ?? ""}
          containerStyles={{ flexBasis: "28%" }}
        />
        <ViewField
          label="Вход"
          text={order.deliveryAddressId.entrance ?? ""}
          containerStyles={{ flexBasis: "22%" }}
        />
        <ViewField
          label="Етаж"
          text={order.deliveryAddressId.floor ?? ""}
          containerStyles={{ flexBasis: "22%" }}
        />
        <ViewField
          label="Ап."
          text={order.deliveryAddressId.apartment ?? ""}
          containerStyles={{ flexBasis: "22%" }}
        />
      </HorizontalRow>
      {order.deliveryAddressId.note && (
        <ViewField
          label="Уточнения"
          text={order.deliveryAddressId.note ?? ""}
        />
      )}
      {order.invoiceAddressId && (
        <>
          <Spacer position="top" size="large">
            <Spacer position="bottom" size="medium">
              <Row>
                <Text variant="title">Клиентът иска фактура на:</Text>
              </Row>
            </Spacer>
          </Spacer>
          <ViewField
            label="Фирма/ Обект"
            text={order.invoiceAddressId.companyName ?? ""}
          />
          <HorizontalRow>
            <ViewField
              label="ЕИК"
              text={order.invoiceAddressId.eik ?? ""}
              containerStyles={{ flexBasis: "49%" }}
            />
            <ViewField
              label="ДДС номер"
              text={
                order.invoiceAddressId.vatNumber
                  ? `BG${order.invoiceAddressId.eik}`
                  : ""
              }
              containerStyles={{ flexBasis: "49%" }}
            />
          </HorizontalRow>
          <ViewField label="МОЛ" text={order.invoiceAddressId.mol ?? ""} />
          <ViewField
            label="Телефон"
            text={order.invoiceAddressId.phoneNumber ?? ""}
          />
          <HorizontalRow>
            <ViewField
              label="Нас. място"
              text={order.invoiceAddressId.city ?? ""}
              containerStyles={{ flexBasis: "76%" }}
            />
            <ViewField
              label="ПК"
              text={order.invoiceAddressId.postCode ?? ""}
              containerStyles={{ flexBasis: "23%" }}
            />
          </HorizontalRow>
          <ViewField
            label="Адрес - жк, кв, ул, номер"
            text={order.invoiceAddressId.addressLine ?? ""}
          />
          <ViewField
            label="Адрес - бл, вх, ет, ап"
            text={order.invoiceAddressId.addressLine2 ?? ""}
          />
        </>
      )}
    </View>
  );
};

// <MyRadioButton
//   value={orderStatus}
//   setValue={setOrderStatus}
//   items={[
//     {
//       label: "Нова",
//       value: "PENDING",
//     },
//     {
//       label: "Потвърдена",
//       value: "CONFIRMED",
//     },
//     {
//       label: "Очаква плащане",
//       value: "AWATING_PAYMENT",
//     },
//     {
//       label: "Завършена",
//       value: "COMPLETED",
//     },
//     {
//       label: "Отказана",
//       value: "CANCELLED",
//     },
//   ]}
// />;
