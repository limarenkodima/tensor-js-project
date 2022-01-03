const Router = require("express");
const Student = require("../models/Student");

const router = new Router()

router.post('/create', async (req, res) => {
    try {
        const name = req.body.name
        const city = req.body.city
        const university = req.body.university
        const telephone = req.body.telephone
        const mail = req.body.mail

        const candidate = await Student.findOne({name})

        if( candidate ) {
            return res.status(400).json({message: 'User founded'})
        }

        const student = new Student({name, city, university, telephone, mail})
        await student.save()
        return res.json({message: "User was created"})
    }
    catch (e) {
        console.log(e)
        res.send({message: "Server error"})
    }
})

module.exports = router