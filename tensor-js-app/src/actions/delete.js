import axios from "axios";

const Delete = async (uuid) => {
  try {
    const response = await axios.delete(
      "http://localhost:5000/api/auth/" + uuid,
      {
        uuid,
      }
    );
  } catch (e) {
    alert(e);
  }
};

export default Delete;
