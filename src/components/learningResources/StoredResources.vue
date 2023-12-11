<template>
  <ul>
    <ResourceListItem
      v-for="resource in resources"
      :key="resource.id"
      :resource="resource"
    />
  </ul>
</template>

<script>
import ResourceListItem from '@/components/learningResources/ResourceListItem.vue';
export default {
  inject: {
    resources: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  components: {
    ResourceListItem,
  },
};
</script>
