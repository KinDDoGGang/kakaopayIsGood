const { get, set } = require('./db/simple-db');
const { BadRequest, BadCredential } = require('./exception');

const TOKEN_LENGTH = 32;
const LETTERS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'.split('');
const createSimpleToken = () => {
    let token = '';
    for(let i = 0; i < TOKEN_LENGTH; i++) {
        token += LETTERS[Math.floor(Math.random() * LETTERS.length)];
    }
    return token;
}

const saveSession = (user) => {
    const token = createSimpleToken();
    set('sessions', token, { username: user.id });
    return token;
}

const login = (req, res, next) => {
    const { username, password } = req.body;
    if(!(username && password)) {
        throw new BadRequest('username과 password는 필수 값입니다.');
    }

    const user = get('users', username);

    if(user) {
        res.json({
            token: saveSession(user),
            username: username
        })
    } else {
        throw new BadCredential();
    }
}

module.exports = login;