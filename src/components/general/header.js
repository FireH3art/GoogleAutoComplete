import { useTheme } from "@react-navigation/native";
import { Font } from "../../theme/Theme"
import { Text, TouchableOpacity, View } from "react-native";
import { useTranslation } from "react-i18next";
import { AntDesign } from '@expo/vector-icons';

export const Header = ({navigation}) => {
    const { colors } = useTheme();
    const { t } = useTranslation();

    return (
        <View style={{ flexDirection: "row", borderBottomColor: colors.primary, borderBottomWidth: 1, padding: "2%" }}>
            <TouchableOpacity onPress={()=>navigation.pop()}>
                <AntDesign name="left" size={24} color={colors.primary} />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>
                <Text style={[Font.largeFont_bold, { color: colors.primary, textAlign: "center", textTransform: "uppercase" }]}>
                    {t("SEARCH_HISTORY")}
                </Text>
            </View>
            <View style={{ width: 24 }} />
        </View>
    )
}