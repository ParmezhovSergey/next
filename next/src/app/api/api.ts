import axios from "axios";

export async function getUsers() {
  try {
    const response = await axios.get("data.json");
    const data = response.data;
    console.log("response:", data);
    return data;
  } catch (e) {
    return "error";
  }
}
