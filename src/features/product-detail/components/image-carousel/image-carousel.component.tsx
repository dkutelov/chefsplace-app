import { View, Image, StyleSheet, useWindowDimensions } from "react-native";
import React from "react";

import {
  ContainerView,
  ImageFlatList,
  DotsContainer,
} from "./image-carousel.styles";

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onFlatlistUpdate = React.useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <ContainerView>
      <ImageFlatList
        data={images}
        renderItem={({ item }: { item: string | undefined }) => (
          <Image
            source={{ uri: item }}
            style={[styles.image, { width: windowWidth - 40 }]}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={"center"} //center, end
        decelerationRate={"fast"}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
          minimumViewTime: 100, // item should be on the screen min 300 ms
        }}
        onViewableItemsChanged={onFlatlistUpdate}
        keyExtractor={(_, index) => index}
      />
      <DotsContainer style={{ transform: [{ translateX: "-50%" }] }}>
        {images.map((_, index) => (
          <View
            key={`dot-${index}`}
            style={[
              styles.dot,
              {
                backgroundColor: activeIndex === index ? "#a9a9a9" : "#dddddd",
              },
            ]}
          />
        ))}
      </DotsContainer>
    </ContainerView>
  );
};

const styles = StyleSheet.create({
  image: {
    margin: 10,
    height: 300,
    resizeMode: "contain",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: 5,
  },
});
