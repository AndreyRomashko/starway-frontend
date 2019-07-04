import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Colors from "../constants/Colors";

export default function DrawerIcon(props) {
  return (
    <Ionicons
      name={props.name}
      size={20}
      color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
    />
  );
}
