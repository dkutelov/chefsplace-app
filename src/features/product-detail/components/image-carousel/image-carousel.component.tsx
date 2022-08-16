import React, { useState, useRef } from "react";
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ViewabilityConfig,
  ViewToken,
} from "react-native";

import {
  ContainerView,
  ImageFlatList,
  DotsContainer,
  DotsInnerContainer,
} from "./image-carousel.styles";
import { K } from "@infrastructure/constants";

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);

  const onFlatlistUpdate = useRef(
    ({ viewableItems }: { viewableItems: ViewToken[] }) => {
      if (viewableItems && viewableItems.length > 0) {
        setActiveIndex(viewableItems[0].index || 0);
      }
    }
  );

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  return (
    <ContainerView>
      <ImageFlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            source={{ uri: K.imageBaseUrl + item }}
            style={[styles.image, { width: width - 40 }]}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onViewableItemsChanged={onFlatlistUpdate.current}
        viewabilityConfig={viewabilityConfig}
        keyExtractor={(_, index) => `${index}`}
        oneImageOnly={images.length === 1}
      />
      {images.length > 1 && (
        <DotsContainer>
          <DotsInnerContainer>
            {images.map((_, index) => (
              <View
                key={`dot-${index}`}
                style={[
                  styles.dot,
                  {
                    backgroundColor:
                      activeIndex === index ? "#a9a9a9" : "#dddddd",
                  },
                ]}
              />
            ))}
          </DotsInnerContainer>
        </DotsContainer>
      )}
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
