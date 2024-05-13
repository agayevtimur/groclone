<script setup>
import Analytics from "@/components/AnalyticsSection/Analytics.vue";
</script>

<template>
  <section class="py-[300px] flex justify-center items-center px-[16px]">

    <div class="max-w-[1660px] flex flex-col items-center mx-auto">
      <h2 class="text-[72px] font-bold text-center">
        All-in-one anaytics tool
      </h2>
      <p class="text-[22px] leading-normal mt-[40px] text-center max-w-[817px] font-normal">"Maximize your
        decision-making
        capabilities with our
        powerful
        analytical tools.
        Harness the power of your data to drive growth and success."</p>

      <Analytics
          type="Left"
          image="/left%20side.jpg"
          subtitle="Advance campaign monitoring"
          title="All-in-one anaytics tool"
          paragraph="Stay ahead of the game. Monitor your marketing
                   campaigns in
                   real-time with our intuitive tools, and make data-driven decisions
                   for optimal results."
          :list="{
                    firstItem: 'Realtime analytics',
                    secondItem: 'Best campaign manager',
                    ThirdItem: 'Detailed contact data'
                    }
        "/>
      <Analytics
          type="Right"
          image="/right%20side.jpg"
          subtitle="Details User Analytics"
          title="Have all customer
  data in one place"
          paragraph="Streamline your customer insights. Keep all your customer data in
  one place, and get a complete view of their behavior and preferences
  for personalized engagement"
          :list="{
                    firstItem: 'Advance reports',
                    secondItem: 'Us path analytics',
                    ThirdItem: 'Predictive user trends'
                    }
        "/>

    </div>

  </section>
</template>

