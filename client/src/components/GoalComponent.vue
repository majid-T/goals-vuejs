<template>
<div class="container">
    <h1>Your Goals</h1>

    <div class="create-goal">
        <label for="create-goal">What is your new Goal?</label>
        <input type="text" id="create-goal" class="input-goal" v-model="newGoal" placeholder="My new Goal" />
        <button @click="addGoal">Add</button>
    </div>
    <hr />
    <p class="error" v-if="error">{{ error }}</p>
    <div class="loadingDiv">
        <i class="fas fa-sync-alt fa-spin fa-5x" v-if="loading"></i>
    </div>
    <div class="goals-container" v-if="!loading">
        <div class="goal" v-for="(goal, index) in goals" v-bind:item="goal" v-bind:index="index" v-bind:key="goal._id">
            {{
          `${goal.createdAt.getDate()}/${goal.createdAt.getMonth()}/${goal.createdAt.getFullYear()}`
        }}
            <span class="delete-icon" @click="deleteGoal(goal._id)">
                <i class="fas fa-trash-alt"></i>
            </span>
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
            loading: false,
        };
    },
    async created() {
        try {
            this.loading = true;

            this.goals = await GoalService.getGoals();

            this.loading = false;
        } catch (err) {
            this.error = err.message;
        }
    },
    methods: {
        async addGoal() {
            this.loading = true;

            await GoalService.insertGoal(this.newGoal);
            this.goals = await GoalService.getGoals();
            this.newGoal = "";

            this.loading = false;
        },

        async deleteGoal(id) {
            this.loading = true;

            await GoalService.deleteGoal(id);
            this.goals = await GoalService.getGoals();
            this.newGoal = "";
            this.loading = false;
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
/* 
COLOR palette used:
1- 46A093
2- 6BBD98
3- AECFA3
4- C4E8BF
 */
div.container {
    max-width: 900px;
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
    border-radius: 10px;
    border: 1px solid #aecfa3;
    background-color: #6bbd98;
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

div.loadingDiv {
    text-align: center;
}

p.text {
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 0;
}

.deleteGoal {
    position: relative;
}

.delete-icon {
    margin-left: 85%;
}

.delete-icon:hover {
    background-color: #46a093;
    border-radius: 3px;
}

.input-goal {
    display: block;
    width: 100%;
    border: 1px solid #aecfa3;
    background-color: #6bbd98;
}
</style>
