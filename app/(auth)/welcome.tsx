import CustomButton from "@/components/custom-button";
import { onboarding } from "@/constants";
import { router } from "expo-router";
import React, { useRef, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Swiper from "react-native-swiper";

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null); // for controll swiper
  const [activeIndex, setActiveIndex] = useState<Number>(0);
  const isLastSlide = activeIndex === onboarding.length - 1;
  return (
    <SafeAreaView className="relative flex h-full w-full items-center justify-between bg-white">
      <TouchableOpacity
        className="absolute top-3 right-4"
        onPress={() => router.replace("/(auth)/sign-up")}
      >
        <Text className="text-black text-md font-JakartaBold">skip</Text>
      </TouchableOpacity>
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#E2E8F0] rounded-full" />
        }
        activeDot={
          <View className="w-[32px] h-[4px] mx-1 bg-[#0286FF] rounded-full" />
        }
        onIndexChanged={(index) => setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View
            key={item.id}
            className="flex flex-col items-center justify-center gap-10 p-10"
          >
            <Image
              source={item.image}
              alt=""
              className="w-full h-[300px]"
              resizeMode="contain"
            />
            <Text className="text-black text-3xl font-bold text-center">
              {item.title}
            </Text>
            <Text className="text-lg font-JakartaSemiBold text-center text-[#858585]">
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        title={isLastSlide ? "Get Started" : "Next"}
        onPress={() =>
          isLastSlide
            ? router.replace("/(auth)/sign-up")
            : swiperRef.current?.scrollBy(1)
        }
        className="w-11/12 mt-10"
      />
    </SafeAreaView>
  );
};

export default Welcome;
