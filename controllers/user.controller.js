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

exports.list = (req, res) => {
    try {
        const usersList = [
            {
                nome: 'João',
                idade: 25,
                usuario: 'joao123',
                senha: 'senha123'
            },
            {
                nome: 'Maria',
                idade: 30,
                usuario: 'maria456',
                senha: 'senha456'
            },
            {
                nome: 'Pedro',
                idade: 28,
                usuario: 'pedro789',
                senha: 'senha789'
            }
        ];
        res.status(200).json({ list: usersList })
    } catch (error) {
        res.status(400).send({ error: error })
    }
};