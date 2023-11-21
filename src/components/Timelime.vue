<template>
  <Container>
    <div class="timeline-container">
      <Card
        v-for="card in data"
        :key="card.id"
        :id="card.id"
        :image="card.image"
        :username="card.username"
        :caption="card.caption"
      />
    </div>
  </Container>
</template>

<script setup>
import Container from "./Container.vue";
import Card from "./Card.vue";

const data = [
  {
    id: 1,
    username: "Eder Sena",
    avatar: "https://picsum.photos/200",
    image: "https://fastly.picsum.photos/id/849/500/500.jpg?hmac=HqYFtxKTSdedBv0aVk7rDJSnxyjZ0yXIJYHM4hnoovw",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    likes: 10,
    comments: 2,
    createdAt: "2021-09-01T12:00:00.000Z",
  },
  {
    id: 2,
    username: "John Doe",
    avatar: "https://picsum.photos/200",
    image: "https://fastly.picsum.photos/id/469/500/500.jpg?hmac=BHkrKLd_URIkqjZ1czEQW8VU6jk4NBixFMVPNud2LPg",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    likes: 10,
    comments: 2,
    createdAt: "2021-09-01T12:00:00.000Z",
  },
  {
    id: 3,
    username: "Damaris Monteiro",
    avatar: "https://picsum.photos/200",
    image: "https://fastly.picsum.photos/id/27/500/500.jpg?hmac=D_wNrN3bGJOSSQv_sBFrtocTqvWwtA6vcnT6d1v14qc",
    caption:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    likes: 10,
    comments: 2,
    createdAt: "2021-09-01T12:00:00.000Z",
  },
];
</script>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 0;
  gap: 10px;
}
</style>