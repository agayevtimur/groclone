<script setup>

import ReviewCard from "@/components/ReviewsSection/ReviewCard.vue";
import {ref} from "vue";
import reviews from "@/data/reviews.js";

const activeIndex = ref(0)
const reviewsArray = reviews

const nextReview = () => {
  if (activeIndex.value !== reviewsArray.length - 1) {
    activeIndex.value++
  } else {
    activeIndex.value = reviewsArray.length - 1
  }
}
const prevReview = () => {
  if (activeIndex.value !== 0) {
    activeIndex.value--
  } else {
    activeIndex.value = 0
  }
}


</script>

<template>
  <div class="mt-[80px]">
    <ReviewCard :index="activeIndex"/>
    <div class="mt-[80px] text-center">
      <button @click="prevReview"
              :class="`inline-flex ${activeIndex > 0 ?  'bg-[#FC4B37] hover:bg-orange-500 transition active:bg-orange-600' :  'bg-[#222629]'} w-[60px] h-[60px] rounded-full items-center justify-center `">
        <img src="/icons/arrow-left.svg" alt=""></button>
      <div class="w-[12px] inline-flex"></div>
      <button @click="nextReview"
              :class="`inline-flex w-[60px] h-[60px] rounded-full items-center justify-center ${activeIndex < reviewsArray.length - 1 ? 'bg-[#FC4B37] hover:bg-orange-500 transition active:bg-orange-600' : 'bg-[#222629]' } `">
        <img src="/icons/arrow-right.svg" alt="">
      </button>
    </div>
  </div>
</template>

