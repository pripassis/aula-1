import { SafeAreaView, Text, TextInput, View } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 items-center justify-center bg-purple-600 ">
        <Text className="text-5xl font-bold">Home</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
