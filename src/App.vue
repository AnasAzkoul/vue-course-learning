<template>
  <TheHeader title="WhatEver"/>
  <StoredResources :resources="resources" />
</template>

<script>
import StoredResources from '@/components/learningResources/StoredResources.vue';
import TheHeader from './components/layouts/TheHeader.vue';
export default {
  data() {
    return {
      resources: [
        {
          id: 1,
          title: 'Official Guide',
          description: 'The official vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 2,
          title: 'Google',
          description: 'You need to know how to google and find answers',
          link: 'https://www.google.com',
        },
      ],
    };
  },
  components: {
    StoredResources,
    TheHeader,
},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  border: 0;
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}
</style>
