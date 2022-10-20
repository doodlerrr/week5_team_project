

// users repo 에서 findUserAccount 찾을때 쓰는 스키마
exports.findUserInsertSchema ={
    email: 'asdlkf124j@naver.com',
    nickname: '스파르타1213',
};

// users repo 에서 createAccount 찾을때 쓰는 스키마
exports.createUserInsertSchemaByRepository = {
    email: 'asdlkf124j@naver.com',
    nickname: '스파르타11',
    password: '1234'
};

//로그인 할때 가져가는 스키마
exports.loginUserSchemaByRepository = {
    email: 'asdlkf124j@naver.com',
    password: '1234'
}
