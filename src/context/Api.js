const server = "http://localhost:3000";
const apiRegister = `${server}/user`;
const apiLogin = `${apiRegister}/auth`;
const apiProduct = `${server}/product`;
const apiProductuser = `${apiProduct}/user`

export {apiRegister, apiLogin, apiProduct, apiProductuser};