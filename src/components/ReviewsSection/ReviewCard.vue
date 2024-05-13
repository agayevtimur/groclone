<script setup>
import reviews from "@/data/reviews.js";

defineProps({
  index: Number,
});
const reviewsArray = reviews
</script>

<template>
  <div class="max-w-[600px] bg-[#222629] rounded-[20px] p-[40px] mx-auto relative hover:shadow-2xl transition">

    <p class="text-[22px] text-[#B8BCBF] min-h-[120px]">
      {{
        reviewsArray[index].review
      }}
    </p>

    <div class="mt-[46px] flex gap-[16px] items-center">
      <img class=" w-[60px] h-[60px] border-[#B8BCBF] rounded-full
       border-[1px] mt-[8px]" :src="`/${reviewsArray[index].image}.png`" alt="">

      <div class="flex flex-col">
        <h5 class="text-[26px] text-white"> {{
            reviewsArray[index].name
          }}</h5>
        <div class="flex gap-[6px] mt-[12px]">
          <img v-for="star in 5" :key="star" src="/icons/start-filled.svg" alt="Star">
        </div>
      </div>
    </div>

    <img class="absolute bottom-[40px] right-[40px]" src="/comma.png" alt="">
  </div>
</template>

