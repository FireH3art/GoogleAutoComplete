import { useTheme } from '@react-navigation/native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Linking, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { Header } from '../../components/general/header';
import { Font } from '../../theme/Theme';
import { useDispatch, useSelector } from 'react-redux';
import * as dashboardActions from '../../stores/actions/dashboard';
import LottieView from 'lottie-react-native';

const ListComponent = ({ item, navigation }) => {
    const { colors } = useTheme();
    const styles = Styles(colors);
    const { t } = useTranslation();
    const dispatch = useDispatch();

    const [showInfo, setShowInfo] = useState(false)
    const toggleShowInfo = () => setShowInfo(!showInfo);

    return (
        <View style={{ width: "90%", alignSelf: "center" }}>
            <TouchableOpacity
                style={{ borderWidth: 1, borderColor: colors.primary, marginTop: 15, padding: 5, borderRadius: 10, backgroundColor: colors.white, zIndex: 10 }}
                activeOpacity={1}
                onPress={toggleShowInfo}
            >
                <View style={{ flexDirection: "row" }}>
                    <View style={{ flex: 1, height: 60, justifyContent: "center" }}>
                        <Text style={[Font.xxSmallFont, { color: colors.dark_grey }]}>{item?.searchTime}</Text>
                        <Text style={[Font.largeFont_bold, { color: colors.primary }]} numberOfLines={2}>{item?.name}</Text>
                    </View>
                    <View style={{ alignItems: "center", justifyContent: "center" }}>
                        <AntDesign name={showInfo ? "down" : "right"} size={24} color={colors.primary} />
                    </View>
                </View>
            </TouchableOpacity>

            {showInfo && <View style={{ backgroundColor: colors.light_grey, borderWidth: 1, borderTopWidth: 0, borderColor: colors.primary, padding: 5, paddingTop: 20, marginTop: -15, zIndex: 1, borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                <View>
                    <Text style={styles.title}>{t("ADDRESS")}:</Text>
                    <Text style={styles.info}>{item?.formatted_address}</Text>
                </View>

                <View style={{ flexDirection: "row", marginVertical: 5 }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.title}>{t("PHONE_NO")}: </Text>
                        <Text styles={styles.info}>{item?.formatted_phone_number ? item?.formatted_phone_number : "-"}</Text>
                    </View>
                    <TouchableOpacity
                        style={{ flex: 1 }}
                        onPress={() => item?.website && Linking.openURL(item?.website)}
                        activeOpacity={1}
                    >
                        <Text style={styles.title}>{t("WEBSITE")}: </Text>
                        <Text styles={styles.info}>{item?.website ? item?.website : "-"}</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ flexDirection: "row", paddingBottom: 5 }}>
                    <TouchableOpacity style={styles.button} onPress={() => Linking.openURL(item?.url)}>
                        <MaterialCommunityIcons name="google-maps" size={24} color={colors.white} />
                        <Text style={[Font.regularFont_bold, { color: colors.white }]}>{t("GOOGLE_MAPS")}</Text>
                    </TouchableOpacity>
                    <View style={{ width: 10 }} />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={async () => {
                            await dispatch(dashboardActions.ShowHistory(item)).then(() => {
                                navigation.pop()
                            })
                        }}>
                        <AntDesign name="back" size={24} color={colors.white} />
                        <Text style={[Font.regularFont_bold, { color: colors.white }]}>{t("SHOW_IN_MAP")}</Text>
                    </TouchableOpacity>
                </View>
            </View>}
        </View>
    )
}

const EmptyListComponent = () => {
    const { colors } = useTheme();
    const { t } = useTranslation();
    
    return (
        <View style={{ justifyContent: "center", alignItems: "center" }}>
            <LottieView
                style={{
                    alignItems: 'center',
                    width: 300,
                    zIndex: 1,
                    aspectRatio: 1
                }}
                source={require('../../assets/lottie/no-list.json')}
                autoPlay
                loop={false}
            />

            <Text style={[Font.xLargeFont_bold, { color: colors.primary }]}>
                {t("NO_HIST")}
            </Text>
        </View>
    )
}

export default function SearchHistory({ navigation }) {
    const { colors } = useTheme();
    const styles = Styles(colors);
    const { t } = useTranslation();

    const histList = useSelector((state) => state.dashboard.searchHistory)

    return (
        <SafeAreaView style={styles.container}>
            <Header navigation={navigation} />

            <FlatList
                data={histList}
                keyExtractor={(item, index) => item + index}
                renderItem={({ item }) => <ListComponent item={item} navigation={navigation} />}
                ListEmptyComponent={<EmptyListComponent />}
            />

        </SafeAreaView>
    );
}

const Styles = (colors) =>
    StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
        },
        button: {
            backgroundColor: colors.primary,
            padding: 5,
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            flex: 1,
            borderRadius: 5
        },
        title: [Font.xSmallFont_bold,
        { color: colors.primary }
        ],
        info: [Font.regularFont]
    });