<script setup>

</script>

<template>
  <section class="bg-[#FC4B37] px-[16px] pb-[140px] sm:pb-12 w-full">
    <header class="max-w-[1600px] flex justify-between items-center mx-auto py-[20px]">
      <span class="text-[30px] font-bold text-white cursor-pointer">Groclone.</span>
      <ul class="sm:hidden md:hidden lg:hidden xl:hidden flex gap-[38px] text-white text-[16px]">
        <li class="cursor-pointer">Home</li>
        <li class="cursor-pointer">Pricing</li>
        <li class="cursor-pointer">Blog</li>
        <li class="cursor-pointer">About</li>
        <li class="cursor-pointer">Contact</li>
      </ul>
      <img class="hidden sm:block md:block lg:block xl:block" src="/icons/menu.svg" alt="">
      <button
          class="sm:hidden md:hidden lg:hidden xl:hidden bg-white px-[34px] py-[18px] rounded-full text-[18px] font-bold hover:bg-slate-100 transition active:bg-slate-200 transition hover:shadow-2xl transition">
        Get
        started
      </button>
    </header>
    <div class="mt-[110px] sm:mt-[50px] mx-auto max-w-[1160px] flex flex-col items-center">
      <h1 class=" text-[100px] xl:text-[80px] lg:text-[60px] md:text-[44px] sm:text-[44px] font-bold leading-none text-white text-center mb-[50px]">
        Presenting the
        next-gen
        anaylitics software</h1>
      <div class="flex gap-[22px]">
        <button
            class="bg-white px-[34px] py-[18px] rounded-full text-[18px] font-bold hover:bg-slate-100 transition active:bg-slate-200 transition hover:shadow-2xl transition">
          Let's talk
        </button>
        <button
            class=" px-[34px] sm:px-3.5 py-[18px] sm:px-8
             text-white border border-white border-[1px] rounded-full rounded-full text-[18px] font-bold hover:bg-slate-100  transition hover:text-black active:bg-slate-200 transition hover:shadow-2xl transition">
          Get
          started
        </button>
      </div>
      <img class="mt-[80px]" src="/laptop.png" alt="Laptop Image">
    </div>
  </section>
</template>

