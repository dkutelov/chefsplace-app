import {
  View,
  Image,
  FlatList,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import React from "react";

export const ImageCarousel = ({ images }: { images: string[] }) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onFlatlistUpdate = React.useCallback(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  }, []);

  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({ item }) => (
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
      />
      <View style={styles.dots}>
        {images.map((_, index) => (
          <View
            key={`dot-${index}`}
            style={[
              styles.dot,
              {
                backgroundColor: activeIndex === index ? "#c9c9c9" : "#ededed",
              },
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginVertical: 10,
  },
  image: {
    margin: 10,
    height: 350,
    resizeMode: "contain",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#c9c9c9",

    margin: 5,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
