import { ParamListBase } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useCallback } from "react";
import { Text, TouchableHighlight, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { MyState } from "../store/MyState";

type DetailsScreenProps = NativeStackScreenProps<ParamListBase, 'Details'>;

function DetailsScreen({navigation}: DetailsScreenProps) {
    const dispatch = useDispatch();
    const onClick = useCallback(() => {
      navigation.navigate('Home');
    }, [navigation]);
 
    const theme = useSelector((state: MyState) => state.theme);
    const onChangeTheme = useCallback(()=>{
        dispatch({type:"setTheme", theme: !theme})
    },[theme]);
    return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme === false ? 'black' : "yellow"}}>
              <TouchableHighlight onPress={onClick}>
                <Text style={{color: "white"}}>Details Screen</Text>
              </TouchableHighlight>
              <TouchableHighlight onPress={onChangeTheme}>
                <Text style={{color: "white", borderColor: "white"}}>Change Theme</Text>
              </TouchableHighlight>
            </View>
    );
}


export default DetailsScreen;   
  