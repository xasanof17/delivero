import { View, Image, StyleSheet, Text } from "react-native";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { SearchBar } from "./SearchBar";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { Colors } from "@/constants";
import BottomSheet from "./BottomSheet";

const CustomHeader = () => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openModal = () => {
    bottomSheetRef?.current?.present();
  };

  return (
    <SafeAreaView style={styles.safearea}>
      <BottomSheet ref={bottomSheetRef} />
      <View style={[styles.container, { paddingVertical: 6 }]}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <TouchableOpacity onPress={openModal}>
            <Image
              style={styles.bike}
              source={require("@/assets/images/bike.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.titleContainer,
              { flex: 1, justifyContent: "flex-start" },
            ]}
            onPress={openModal}
          >
            <Text style={styles.title}>Delivery Now</Text>
            <View style={styles.locationName}>
              <Text style={styles.subtitle}>Tashkent</Text>
              <Ionicons name="chevron-down" size={20} color={Colors.primary} />
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.profileButton}>
          <Ionicons name="person-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <SearchBar />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    height: 60,
    backgroundColor: "#fff",
    flexDirection: "row",
    gap: 20,
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  bike: {
    width: 40,
    height: 40,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 14,
    color: Colors.medium,
  },
  locationName: { flexDirection: "row", alignItems: "center" },
  subtitle: {
    fontSize: 18,
    fontWeight: "700",
  },
  profileButton: {
    backgroundColor: Colors.lightGrey,
    padding: 10,
    borderRadius: 50,
  },
});

export default CustomHeader;
