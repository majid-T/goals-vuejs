import axios from "axios";

const url = "http://localhost:5000/api/goals/";

class GoalService {
  //Geting Goals
  static getGoals() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;
        resolve(
          data.map((goal) => ({
            ...goal,
            createdAt: new Date(goal.createdAt),
          }))
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  //Creating Goals
  static insertGoal(text) {
    return axios.post(url, {
      text,
    });
  }

  //Deleting Goals
  static deleteGoal(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default GoalService;
