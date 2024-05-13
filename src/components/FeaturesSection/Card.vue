<script setup>
defineProps({
  icon: String,
  title: String,
  paragraph: String
})
</script>

<template>
  <div class="px-[40px] py-[50px] rounded-[12px] bg-[#F4F4F4] hover:shadow-2xl transition">
    <div class="w-[80px] h-[80px] bg-[#F4DFDD] rounded-full flex items-center justify-center">
      <img :src="icon" alt="icon">
    </div>
    <h4 class="mt-[24px] text-[30px] sm:text-[22px] md:text-[24px] font-bold whitespace-normal">{{ title }}</h4>
    <p class="mt-[20px] text-[22px] sm:text-[14px]">{{
        paragraph
      }}</p>
  </div>
</template>
