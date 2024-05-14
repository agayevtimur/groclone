<script setup>
import Card from "@/components/FeaturesSection/Card.vue";
import features from "@/data/features.js";
</script>

<template>
  <section class="flex justify-center items-center px-[16px]">
    <div class="w-[1660px]">
      <h2 class="text-[72px] sm:text-[30px] font-bold mt-[40px] leading-tight text-center">
        Simple yet <span class="text-[#FC4B37]">powerful</span> features
      </h2>
      <div
          class="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2  xl:grid-cols-2  grid-rows-2 gap-[24px] mt-[90px] sm:mt-[52px]">
        <Card
            v-for="(feature, index) in features"
            :key="index"
            :icon="feature.icon"
            :title="feature.title"
            :paragraph="feature.paragraph"
        />
      </div>
      <div class="flex gap-[22px] sm:gap-[8px] justify-center mt-[80px] sm:mt-[50px]">
        <button
            class="bg-[#FC4B37] px-[34px] sm:px-[20px] py-[18px] rounded-full text-[18px] sm:text-[14px] hover:shadow-2xl transition text-white font-bold hover:bg-orange-500 transition active:bg-orange-600">
          Get started
        </button>
        <button
            class="px-[34px] sm:px-[20px] py-[18px] text-black  border-black border-[1px]  rounded-full text-[18px] sm:text-[14px] font-bold hover:bg-slate-100 hover:shadow-2xl transition  hover:text-black active:bg-slate-200 transition">
          See more features
        </button>
      </div>
    </div>
  </section>
</template>

