<script setup>
import footerMenu from "@/data/footerMenu.js";
</script>

<template>
  <div class="flex flex-1 justify-between">
    <div v-for="(item, index) in footerMenu" :key="index">
      <span class="text-[20px] font-bold">{{ item.title }}</span>
      <ul class="flex flex-col gap-[12px] text-[18px] mt-[16px]">
        <li v-for="(menuItem, menuItemIndex) in item.items" :key="menuItemIndex"
            class="mt-[12px] cursor-pointer text-slate-600 hover:text-slate-950 transition">
          {{ menuItem }}
        </li>
      </ul>
    </div>
  </div>
</template>
