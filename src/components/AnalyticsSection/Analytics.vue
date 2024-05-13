<script setup>
defineProps({
  type: String,
  image: String,
  title: String,
  subtitle: String,
  paragraph: String,
  list: Object
})
</script>

<template>
  <div class="flex gap-[100px] items-center mt-[200px]">

    <div class="max-w-[50%]" v-if="type === 'Left'">
      <img class="max-w-[100%] h-auto object-scale-down hover:shadow-2xl transition rounded-[34px]" :src="image"
           alt="Analytic 1">
    </div>

    <div class="flex flex-col max-w-[675px] flex-1">
      <span class="text-[22px] text-[#FC4B37]">{{ subtitle }}</span>
      <h2 class="text-[72px] font-bold mt-[40px] leading-tight max-w-[100%]">
        {{ title }}
      </h2>
      <p class="text-[22px] leading-normal mt-[40px] font-normal">{{
          paragraph
        }}</p>
      <ul class="mt-[40px] flex flex-col gap-[12px]">
        <li class="flex gap-[12px] items-center" v-for="(value, key) in list" :key="key"><img src="/check.svg" alt="">{{
            value
          }}
        </li>
      </ul>
    </div>

    <div class="max-w-[50%]" v-if="type === 'Right'">
      <img class="max-w-[100%] h-auto object-scale-down hover:shadow-2xl transition rounded-[34px]" :src="image"
           alt="Analytic 1">
    </div>


  </div>

</template>

