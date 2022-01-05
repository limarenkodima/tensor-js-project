import axios from "axios";
import { Student } from "../components/Student";

var content = [];
const read = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/auth/read", {});
    for (let i = 0; i < response.data.length; i++) {
      const item = response.data[i];
      content[i] = new Student(
        item.uuid,
        item.name,
        item.city,
        item.university,
        item.telephone,
        item.mail,
        item.avatar
      );
    }
    return content;
    //const students_array = JSON.parse(response.data)
    //alert(students_array[0].name)
  } catch (e) {
    alert(e);
  }
};
export default read;
