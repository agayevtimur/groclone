<script setup>

import Menu from "@/components/Footer/Menu.vue";
</script>

<template>
  <footer class="flex flex-col justify-center items-center pt-[180px] sm:pt-[100px] pb-[60px] sm:pb-[24px] px-[16px]">

    <div class="w-full max-w-[1660px] flex items-start gap-[300px] sm:gap-[60px] flex-wrap justify-between">

      <div class="max-w-[410px]">
        <span class="text-[56px] sm:text-[24px] text-[#FC4B37] font-bold">Groclone.</span>
        <p class="text-[22px] sm:text-[14px] leading-normal mt-[30px]">"Maximize your decision-making
          capabilities with our powerful analytical
          tools. Harness the power of your data
          to drive growth and success."</p>
      </div>

      <Menu/>


    </div>

    <div
        class="w-full mt-[80px] flex justify-between gap-[16px] items-center flex-wrap pt-[48px] border-black border-t">
      <span class="text-center">© 2023 Groclone, We love our users!</span>
      <ul class="flex gap-[16px]">
        <li class="cursor-pointer text-slate-500 hover:text-slate-950 transition">Terms & Conditions</li>
        <li class="cursor-pointer text-slate-500 hover:text-slate-950 transition">Privacy Policy</li>
        <li class="cursor-pointer text-slate-500 hover:text-slate-950 transition">Sitemap</li>
      </ul>
    </div>

  </footer>
</template>

