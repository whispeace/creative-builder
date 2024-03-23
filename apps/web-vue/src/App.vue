<script setup lang="ts">
import UtilList from "@/components/UtilList.vue";
import FloatLabel from "primevue/floatlabel";
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Button from "primevue/button";
import {ref} from "vue";

const value = ref(null);
</script>

<template>
  <div>
    <div class="px-10 py-8">
      <Card class="w-[340px]">
        <template #title> Simple Card </template>
        <template #content>
          <UtilList class="mb-4" />
          <FloatLabel class="mb-2">
            <InputText  class="w-full" id="username" v-model="value" />
            <label for="username">Username</label>
          </FloatLabel>
          <Button class="w-full" label="Save" size="small" />
        </template>
      </Card>
    </div>
  </div>
</template>