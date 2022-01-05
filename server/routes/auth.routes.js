const Router = require("express");
const Student = require("../models/Student");

const router = new Router();

router.post("/create", async (req, res) => {
  try {
    const uuid = req.body.uuid;
    const name = req.body.name;
    const city = req.body.city;
    const university = req.body.university;
    const telephone = req.body.telephone;
    const mail = req.body.mail;
    const avatar = req.body.avatar;

    const student = new Student({
      uuid,
      name,
      city,
      university,
      telephone,
      mail,
      avatar,
    });
    await student.save();
    return res.json({ message: "Новый студент успешно добавлен" });
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.get("/read", async (req, res) => {
  try {
    const candidate = await Student.find({});

    console.log(candidate);
    return res.json(candidate);
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

router.delete("/:uuid", async (req, res) => {
  try {
    const id = req.params.uuid;
    console.log("Будет удалён элемент с uuid = " + id);
    return res.send(await Student.deleteOne({ uuid: id }));
  } catch (e) {
    console.log(e);
    res.send({ message: "Server error" });
  }
});

module.exports = router;
