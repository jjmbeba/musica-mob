import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SectionContainer from "./SectionContainer";
import NewReleaseCard from "./NewReleaseCard";

const NewReleases = () => {
  return (
    <SectionContainer title={"New Releases"}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
        renderItem={(item) => (
          <TouchableOpacity>
            <NewReleaseCard/>
          </TouchableOpacity>
        )}
      />
    </SectionContainer>
  );
};

export default NewReleases;

const styles = StyleSheet.create({
  listContainer: {
    gap: 30,
  },
});
