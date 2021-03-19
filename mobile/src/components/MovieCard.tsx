import React from "react";
import { Image, ImageSourcePropType, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import movieImage from "../assets/image.png";

import { theme, text, catalog } from "../styles";

interface MovieProps{
    id: number,
    title: string,
    subTitle: string,
    year: number,
    imgUrl: ImageSourcePropType,
    synopsis: string,

}

const MovieCard: React.FC<MovieProps> = ({id, title,subTitle,year,imgUrl,synopsis}) => {

    const navigation = useNavigation();

    return (
        <View style={catalog.contentMovie}>
            <Image source={{uri: imgUrl}} style={catalog.movie} />
            <Text style={text.catalog_title}>{title}</Text>
            <Text style={text.catalog_year}>{year}</Text>
            <Text style={text.catalog_subTitle}>{subTitle}</Text>
            <TouchableOpacity
                style={catalog.form_btn}
                activeOpacity={0.8}
                onPress={() => { navigation.navigate("DetailsMovie", { id }) }}
            >
                <Text style={text.text_catalog_btn}>VER DETALHES</Text>
            </TouchableOpacity>
        </View>
    )
}

export default MovieCard;