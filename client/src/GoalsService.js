import axios from "axios";

const url = "http://localhost:5000/api/goals/";

class GoalService {
  //Geting Goals
  static getGoals() {
    return new Promise((resolve, reject) => {
      axios
        .get(url)
        .then((res) => {
          const data = res.data;
          resolve(
            data.map((post) => ({
              ...post,
              createdAt: new Date(post.createdAt),
            }))
          );
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  //Creating Goals
  static insertGoal(goal) {
    return axios.post(url, {
      goal,
    });
  }

  //Deleting Goals
  static deleteGoal(id) {
    return axios.delete(`${url}${id}`);
  }
}

export default GoalService;
