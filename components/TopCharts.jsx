import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";

import TopChartCard from "./TopChartCard";
import SectionContainer from "./SectionContainer";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const TopCharts = () => {
  const queryClient = useQueryClient();

  const fetchTopCharts = async () => {
    const res = await fetch("https://musica-api.up.railway.app/popular").then(
      (res) => res.json()
    );
    return res;
  };

  const { isLoading, data } = useQuery({
    queryKey: ["topCharts"],
    queryFn: fetchTopCharts,
  });

  return (
    <SectionContainer title={"Top Charts"}>
      {isLoading ? (
        <ActivityIndicator size={'small'} color={'#FFF'} />
      ) : (
        <FlatList
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          data={data}
          horizontal
          renderItem={(item) => (
            <TouchableOpacity>
              <TopChartCard data={item} />
            </TouchableOpacity>
          )}
        />
      )}
    </SectionContainer>
  );
};

export default TopCharts;

const styles = StyleSheet.create({
  listContainer: {
    gap: 17,
  },
});
