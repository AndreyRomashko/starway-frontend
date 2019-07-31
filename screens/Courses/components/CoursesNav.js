import React from "react";
import { createDrawerNavigator } from "react-navigation";
import AllCourses from "../Screens/AllCourses";
import OwnCourses from "../OwnCourses";
import DrawerIcon from "../../../components/DrawerIcon";
import { Platform } from "react-native";
import OneCourse from "../OneCourse";
import UpdateCourse from "../UpdateCourse";
import AddCourse from "../Screens/AddCourse";
export const CoursesNav = createDrawerNavigator({
  AllCourses: {
    screen: AllCourses,
    navigationOptions: {
      title: "All Courses",
      drawerIcon: ({ focused }) => (
        <DrawerIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-folder" : "md-folder"}
        />
      )
    }
  },
  OwnCourses: {
    screen: OwnCourses,
    navigationOptions: {
      title: "Own Courses",
      drawerIcon: ({ focused }) => (
        <DrawerIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-folder-open" : "md-folder-open"}
        />
      )
    }
  },
  AddCourse: {
    screen: AddCourse,
    navigationOptions: {
      title: "Add Course",
      drawerIcon: ({ focused }) => (
        <DrawerIcon
          focused={focused}
          name={Platform.OS === "ios" ? "ios-add" : "md-add"}
        />
      )
    }
  },
  OneCourse: {
    screen: OneCourse,
    navigationOptions: {
      title: ""
    }
  },
  UpdateCourse: {
    screen: UpdateCourse,
    navigationOptions: {
      title: ""
    }
  }
});
