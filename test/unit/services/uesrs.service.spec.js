const UsersService = require('../../../services/users.services')
const { findUserInsertSchema, createUserInsertSchemaByRepository } = require('../../fixtures/users.fixtures');
const { Op } = require('sequelize')

const mockUsersRepository = {
    findUserAccount: jest.fn(),
    createAccount: jest.fn(),
    login: jest.fn(),
};

describe('users Service Layer Test', function () {
    beforeEach(() => {
        jest.resetAllMocks();
    });
    
    //유저 정보 찾기 (1명)
    test('findUserAccount service 검색', async () => {
        const validationErrorByDuplicatedIdSchema = {
            email : findUserInsertSchema.email
        }
        // usersService를 할당 인스턴스 생성
        let usersService = new UsersService() ;

        // repo를 mocking
        usersService.usersRepository = Object.assign({}, mockUsersRepository)

        // Repo의 mocking된 결과값을 수정
        usersService.usersRepository.createAccount = jest.fn(
            () => createUserInsertSchemaByRepository
        );
        
        try {
            usersService.findUserAccount = jest.fn(
                () => validationErrorByDuplicatedIdSchema
            );
            
            await usersService.createAccount(findUserInsertSchema)
        }catch(error) {
            //createAccount 메소드를 호출할때 findUserAccount를 불러왔는지 검증
            expect(usersService.findUserAccount).toHaveBeenCalledWith({
                email : findUserInsertSchema.email
            });
            
            //발생한 에러 검증
            expect(error.message).toEqual(
                '동일한 email이 이미 존재합니다.'
            );
        }
        
    })
    
    
})