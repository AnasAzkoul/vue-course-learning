<template>
  <BaseCard>
    <BaseButton
      @click="setActiveTab('StoredResources')"
      :mode="setStoredResMode"
      >Stored Resources</BaseButton
    >
    <BaseButton
      @click="setActiveTab('AddResource')"
      :mode="setAddResMode"
      >Add Resource</BaseButton
    >
  </BaseCard>
  <component :is="activeTab" />
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';
export default {
  data() {
    return {
      activeTab: 'StoredResources',
      resources: [
        {
          id: 1,
          title: 'Official Guide',
          description:
            'The official vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 2,
          title: 'Google',
          description:
            'You need to know how to google and find answers',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  computed: {
    setStoredResMode() {
      return this.activeTab === 'StoredResources'
        ? null
        : 'flat';
    },
    setAddResMode() {
      return this.activeTab === 'AddResource'
        ? null
        : 'flat';
    },
  },
  provide() {
    return {
      resources: this.resources,
      AddNewResource: this.AddNewResource,
    };
  },
  methods: {
    setActiveTab(tabName) {
      this.activeTab = tabName;
    },
    addNewResource(resource) {
      console.log(resource); 
      this.resources.unshift(resource);
    },
  },
  components: {
    AddResource,
    StoredResources,
  },
};
</script>
