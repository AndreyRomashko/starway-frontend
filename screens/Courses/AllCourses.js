import React, { useEffect } from "react";
import { View, Text } from "react-native";

const AllCourses = props => {
  useEffect(() => {
    props.navigation.openDrawer();
  }, []);
  return (
    <View>
      <Text>All courses</Text>
    </View>
  );
};

export default AllCourses;
