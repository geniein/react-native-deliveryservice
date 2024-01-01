import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { useSelector } from "react-redux";
import { MyState } from "../store/MyState";

type HomeScreenProps = NativeStackScreenProps<ParamListBase, 'Home'>;

function HomeScreen({navigation}: HomeScreenProps) {
    const onClick = useCallback(() => {
      navigation.navigate('Details');
    }, [navigation]);
  
    const theme = useSelector((state: MyState) => state.theme);
    return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme === false ? 'black' : "yellow"}}>
              <TouchableHighlight onPress={onClick}>
                <Text style={{color: "white"}}>Home Screen</Text>
              </TouchableHighlight>
            </View>
    );
  }

export default HomeScreen