<template>
  <BaseCard>
    <form @submit="handleSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="resource title"
          :ref="titleInput"
        />
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <textarea
          type="text"
          id="desc"
          name="desc"
          placeholder="write your description here"
          :ref="descInput"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
          type="url"
          id="link"
          placeholder="link to your resource"
          name="link"
          :ref="linkInput"
        />
      </div>
      <BaseButton type="submit"> Submit Resource </BaseButton>
    </form>
  </BaseCard>
</template>

<script>
export default {
  inject: ["addNewResource"],
  methods: {
    handleSubmit(event) {
      event.preventDefault();

      const newResource = {
        id: new Date().toISOString(),
        title: this.$refs.titleInput.value,
        description: this.$refs.descInput.value,
        link: this.$refs.linkInput.value,
      };

      this.addNewResource(newResource);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
