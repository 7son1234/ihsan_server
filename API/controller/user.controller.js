const USER_MODEL = require("../models/user.model")

const createNewUser = (req, res) => {
    const { name, phone, pass, age, id } = req.body;

    USER_MODEL.create({
        name: name, 
        phone: phone,
        pass: pass,
        age: age,
        id:id
    })
        .then((createRes) => {
            res.status(200).json({ user: createRes._doc });
        })
        .catch((e) =>
            res.status(500).json({ error: true, errorMassage: e.massage })
        );
};

const login = async (req, res) => {
    const { phone, pass } = req.body;
    console.log('The User', { phone, pass });

    try {
        const user = await USER_MODEL.findOne({ phone: phone, pass: pass })
        if (!user) {
            console.log('غير موجود');
            return res.status(404).json({ success: false, errorMassage: 'no such user' });
        }
        console.log('seccess', user)
        res.status(200).json({ success: true, user: user });
    }
    catch (e) {
        console.error('Error during login', e.massage);
        res.status(500).json({ success: false, errorMassage: e.massage });

    }


}
module.exports = {
    createNewUser,
    login,
}
