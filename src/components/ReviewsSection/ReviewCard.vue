<script setup>
import reviews from "@/data/reviews.js";

defineProps({
  index: Number,
});
const reviewsArray = reviews
</script>

<template>
  <div class="max-w-[600px] bg-[#222629] rounded-[20px] p-[40px] sm:p-[24px] mx-auto hover:shadow-2xl transition">

    <p class="text-[22px] sm:text-[14px] text-[#B8BCBF] min-h-[120px] sm:min-h-[80px]">
      {{
        reviewsArray[index].review
      }}
    </p>

    <div class="mt-[46px] sm:mt-[20px] flex gap-[16px] items-center">
      <img class=" w-[60px] h-[60px] border-[#B8BCBF] rounded-full
       border-[1px] mt-[8px]" :src="`/${reviewsArray[index].image}.png`" alt="">

      <div class="flex flex-col">
        <h5 class="text-[26px] sm:text-[18px] text-white"> {{
            reviewsArray[index].name
          }}</h5>
        <div class="flex gap-[6px] mt-[12px]">
          <img v-for="star in 5" :key="star" src="/icons/start-filled.svg" alt="Star">
        </div>
      </div>
    </div>
  </div>
</template>

