<template>
<div class="create-goal">
    <input type="text" id="create-goal" class="input-goal" v-model="newGoal" placeholder="My new Goal" />
    <button @click="addGoal"><i class="fas fa-plus"></i></button>
</div>
</template>

<script>
import GoalService from "../GoalsService";

export default {
    name: "AddGoal",
    data() {
        return {
            newGoal: "",
            loading: false,
        };
    },
    methods: {
        async addGoal() {
            this.loading = true;

            await GoalService.insertGoal(this.newGoal);
            this.goals = await GoalService.getGoals();
            this.newGoal = "";

            this.loading = false;
        },
    },
};
</script>

<style scoped>
.create-goal {
    display: flex;
}

.create-goal.input[type="text"] {
    flex: 10;
    padding: 5px;
}

.create-goal.input[type="submit"] {
    flex: 2;
}

.input-goal {
    display: block;
    width: 100%;
    border: 1px solid #aecfa3;
    background-color: #6bbd98;
}
</style>
