const jwt = require('jsonwebtoken');

const checktoken = async (token, id, key) => jwt.verify(token, key, (err, decoded) => {
   console.log(decoded)
})

const setToken = async (id, key) => {
    console.log(id);
    console.log(key);
    if (id)
        return jwt.sign({id}, key, {expiresIn: 28800});
    return false
}

module.exports = {
    setToken,
    checktoken
}