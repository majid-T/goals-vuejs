<template>
<div class="container">
    <h1>Your Goals</h1>
    <div class="create-goal">
        <label for="create-goal">What is your new Goal?</label>
        <input type="text" id="create-goal" v-model="newGoal" placeholder="My new Goal" />
        <button @click="addGoal">Add</button>
    </div>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="goals-containe">
        <div class="goal" v-for="(goal, index) in goals" v-bind:item="goal" v-bind:index="index" v-bind:key="goal._id">
            {{
          `${goal.createdAt.getDate()}/${goal.createdAt.getMonth()}/${goal.createdAt.getFullYear()}`
        }}
            <p class="text">{{ goal.goal }}</p>
        </div>
    </div>
</div>
</template>

<script>
import GoalService from "../GoalsService";
export default {
    name: "GoalComponent",
    data() {
        return {
            goals: [],
            error: "",
            newGoal: "",
        };
    },
    async created() {
        try {
            this.goals = await GoalService.getGoals();
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async addGoal() {
            await GoalService.insertGoal(this.newGoal);
            this.goals = await GoalService.getGoals();
            this.newGoal = "";
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
div.container {
    max-width: 800px;
    margin: 0 auto;
}

p.error {
    border: 1px solid tomato;
    background-color: orange;
    padding: 10px;
    margin-bottom: 15px;
}

div.goal {
    position: relative;
    border: 1px solid olivedrab;
    background-color: lightgreen;
    padding: 10px 10px 30px 10px;
    margin-bottom: 15px;
}

div.createdAt {
    position: absolute;
    top: 0;
    left: 0;
    padding: 5px 15px 5px 15px;
    background-color: green;
    color: white;
    font-size: 15px;
}

p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
}
</style>
