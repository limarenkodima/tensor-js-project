import axios from "axios";

const create = async (name, city, university, telephone, mail) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/auth/create",
      { name, city, university, telephone, mail }
    );
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
};

export default create
