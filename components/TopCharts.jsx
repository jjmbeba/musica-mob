import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";

import TopChartCard from "./TopChartCard";
import SectionContainer from "./SectionContainer";

const TopCharts = () => {
  return (
    <SectionContainer title={"Top Charts"}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.listContainer}
        data={[1, 2, 3]}
        horizontal
        renderItem={(item) => (
          <TouchableOpacity>
            <TopChartCard />
          </TouchableOpacity>
        )}
      />
    </SectionContainer>
  );
};

export default TopCharts;

const styles = StyleSheet.create({
  listContainer: {
    gap: 17,
  },
});
