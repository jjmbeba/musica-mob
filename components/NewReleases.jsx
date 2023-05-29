import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import SectionContainer from "./SectionContainer";
import NewReleaseCard from "./NewReleaseCard";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const NewReleases = () => {
  const queryClient = useQueryClient();

  const fetchNewreleases = async () => {
    const res = await fetch("https://musica-api.up.railway.app/new").then(
      (res) => res.json()
    );
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ["newReleases"],
    queryFn: fetchNewreleases,
  });


  return (
    <SectionContainer title={"New Releases"}>
      {isLoading ? (
        <ActivityIndicator size={"small"} color={"#FFF"} />
      ) : (
        <FlatList
          contentContainerStyle={styles.listContainer}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={data}
          renderItem={(item) => (
            <TouchableOpacity>
              <NewReleaseCard data={item}/>
            </TouchableOpacity>
          )}
        />
      )}
    </SectionContainer>
  );
};

export default NewReleases;

const styles = StyleSheet.create({
  listContainer: {
    gap: 30,
  },
});
