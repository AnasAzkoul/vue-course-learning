<template>
  <div class="form-wrapper">
    <form>
      <div class="form-control">
        <label for="title">Title</label>
        <input
          type="text"
          id="title"
          placeholder="resource title"
          v-model="formData.enteredTitle"
        />
      </div>
      <div class="form-control">
        <label for="desc">Description</label>
        <textarea
          type="text"
          id="desc"
          placeholder="write your description here"
        />
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input
          type="url"
          id="link"
          placeholder="link to your resource"
        />
      </div>
      <BaseButton type="submit"
        >Submit Resource</BaseButton
      >
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        enteredTitle: '',
        enteredDesc: '',
        enteredLink: '',
      },
    };
  },
};
</script>

<style scoped>
.form-wrapper {
  max-width: 40rem;
  margin: 0 auto;
}

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
