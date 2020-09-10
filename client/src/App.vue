<template>
<div id="app">
    <i class="fas fa-medal fa-8x"></i>
    <GoalComponent />
</div>
</template>

<script>
import GoalComponent from "./components/GoalComponent.vue";

export default {
    name: "App",
    components: {
        GoalComponent,
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
}

body {
    background-color: #46a093;
}
</style>
