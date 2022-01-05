import axios from "axios";

const create = async (
  uuid,
  name,
  city,
  university,
  telephone,
  mail,
  avatar
) => {
  try {
    const response = await axios.post("http://localhost:5000/api/auth/create", {
      uuid,
      name,
      city,
      university,
      telephone,
      mail,
      avatar,
    });
    alert(response.data.message);
  } catch (e) {
    alert(e);
  }
};

export default create;
