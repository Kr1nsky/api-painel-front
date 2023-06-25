exports.login = (req, res) => {
    try {
        console.log(req.body);

        const usuarios = [
            { user: "Evandro", pass: "tetasak47" }
        ]
        let loginData = req.body;

        if (loginData.user === usuarios[0].user && loginData.pass === usuarios[0].pass) {
            res.send('Login de usuário bem sucedido');
            return;
        } else {
            res.status(400).send('Login mal sucedido')
        }
    } catch (error) {
        res.status(400).send({ message: error })
    }

};