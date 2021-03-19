import { useNavigation, useRoute } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { doLogout, isAuthenticator } from "../services/auth";
import { nav, text } from "../styles";

const BtnNavbar: React.FC = () => {
    
    const navigation = useNavigation();
    const route = useRoute();
    const [show, setShow] = useState(true);

    const [authenticated, setAuthenticated] = useState(false);

    async function logged() {
        const result = await isAuthenticator();

        result ? setAuthenticated(true) : setAuthenticated(false);
    }

    useEffect(() => {
        logged();
    }, []);
    function navigate(path: any) {
        if (path) {
            setShow(false);
            navigation.navigate(path);
        }
        setShow(false);
    }
    function logout(){
        doLogout();
        navigation.navigate("Login");
    }

    return (
        <>
            {
                authenticated ? (
                    <TouchableOpacity
                        activeOpacity={0.8}
                        onPress={()=>{logout()}}>
                        <View style={nav.btnExit} >
                            <Text style={text.btnExit}>SAIR</Text>
                        </View>
                    </TouchableOpacity>
                ) : null
            }

        </>
    );
};


export default BtnNavbar;