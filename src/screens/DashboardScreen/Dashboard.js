import { useTheme } from '@react-navigation/native';
import { Font } from "../../theme/Theme";
import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';
import * as dashboardActions from '../../stores/actions/dashboard';
import { useDispatch, useSelector } from 'react-redux';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const HistoryButton = ({ onPress }) => {
  const { colors } = useTheme();
  const { t } = useTranslation();

  return (
    <TouchableOpacity style={{ position: "absolute", height: 65, aspectRatio: 1, backgroundColor: colors.primary, bottom: "5%", right: "5%", zIndex: 101, borderRadius: 5, justifyContent: 'center', alignItems: "center" }}
      onPress={onPress}>
      <AntDesign name="profile" size={24} color={colors.white} />
      <Text style={[Font.xSmallFont_bold, { color: colors.white }]}>{t("HISTORY")}</Text>
    </TouchableOpacity>
  )
}

export default function Dashboard({ navigation }) {
  const { colors } = useTheme();
  const styles = Styles(colors);
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.dashboard.currentSearch)

  const addToList = async (details) => {
    await dispatch(dashboardActions.AddHistory(details))
  }

  return (
    <SafeAreaView style={styles.container}>

      <GooglePlacesAutocomplete
        styles={styles.textbox}
        placeholder='Press here to search!'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          addToList(details)
        }}
        query={{
          key: 'AIzaSyA52PS60Mquw1hmtBfGeWTOcdvuMThJTBE',
          language: 'en',
        }}
        fetchDetails={true}
        enablePoweredByContainer={false}
      />

      <MapView
        style={styles.map}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 3.147224,
          longitude: 101.6977118,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
        region={{
          latitude: data?.geometry?.location?.lat,
          longitude: data?.geometry?.location?.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01
        }}
      >
        {data &&
          <Marker
            coordinate={{
              latitude: data?.geometry?.location?.lat,
              longitude: data?.geometry?.location?.lng,
            }}
            title={data?.name}
            description={data?.website}
            isPreselected={true}
          />}
      </MapView>
      <HistoryButton onPress={() => navigation.push("SearchHistory")} />
    </SafeAreaView>
  );
}

const Styles = (colors) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    map: {
      width: Dimensions.get("window").width,
      height: Dimensions.get("window").height,
      zIndex: 1,
      position: "absolute"
    },
    textbox: {
      container: {
        flex: 1,
        zIndex: 100,
        width: "90%",
        alignSelf: "center",
        marginTop: 15,
      },
      textInput: {
        borderWidth: 1,
        borderColor: colors.dark_grey
      },
      row: {
        zIndex: 100,
      }
    }
  });