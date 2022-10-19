const UsersRepository = require('../../../repositories/users.repository')
const { findUserInsertSchema } = require('../../fixtures/users.fixtures');
const { Op } = require('sequelize')

const mockUsersModel = () => ({
    findAll: jest.fn(),
    findOne: jest.fn(),
    create: jest.fn(),
    findByPk: jest.fn(),
});


describe('users.repository Layer 테스트', () => {
    let usersRepository = new UsersRepository();
    usersRepository.Users = mockUsersModel();
    
    beforeEach(() => {
        jest.resetAllMocks();
    });
    
    //유저 정보 조회 by 이메일과 닉네임
    test('findUserAccount 메소드 toHaveBeenCalled 사용', async () => {
        const users = await usersRepository.findUserAccount(findUserInsertSchema);
        
        //findeOne 메소드는 몇번 호출 되었는지
        expect(usersRepository.Users.findOne).toHaveBeenCalledTimes(1)
        
        // //findOne 메소드가 호출된 인자를 검증
        // expect(usersRepository.Users.findOne).toHaveBeenCalledWith({
        //     where: {
        //         [Op.or]: [
        //         { email: findUserInsertSchema.email },
        //         { nickname: findUserInsertSchema.nickname },
        //         ],
        //     },
        // });
    });
    
    // test('createAccount 메소드 toHaveBeenCalled사용', async () => {
    //     const User = await usersRepository.createAccount(
    //
    //     )
    // })
    
    
    
    
    
    
    
    
    
    
})