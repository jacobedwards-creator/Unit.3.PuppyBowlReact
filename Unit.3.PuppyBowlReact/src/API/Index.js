const cohortName = "2411-FTB-ET-WEB-PT";
const API_URL = `https://fsa-puppy-bowl.herokuapp.com/api/2411-FTB-ET-WEB-PT/players`;

export async function getPuppies() {
    try{
    const response = await fetch(API_URL);
    const result = await response.json();
    if (!result.success) {
        throw result.error;
    }
    const feedback = result.data;
    return feedback.players;
    }
    catch (error) {
        console.log(error);
    }
}

export async function getPuppydetails(id) {
    try{
        const response=await fetch(`${API_URL}/${id}`);
        const result = await response.json();
        const feedback = result.data;
        return feedback.player;
    } 
    catch(error) {
        console.log(error)
    }
}

export async function addPuppy(newPlayer) {
    try {
      const response = await fetch(`${API_URL}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPlayer),
      });
      console.log(response);
      window.location.reload();
    } 
    catch (error) {
      console.log(error);
    }
  }

export async function deletePuppy(playerId) {
    try {
      const response = await fetch(`${API_URL}/${playerId}`, {
        method: "DELETE",
      });
      const result = await response.json();
      console.log(result);
      window.location.reload();
  
    if (!response.ok) {
        throw new Error(
          "Server Error: " + response.status
        );
      }
    } 
    catch (err) {
      console.error(err);
    }
  }
  
  export async function getTeams() {
    try {
      const response = await fetch(`${API_URL}/teams`);
      const result = await response.json();
      const feedback = result.data;
      return feedback.teams;
    }
    catch (error) {
      console.log(error);
    }
  }