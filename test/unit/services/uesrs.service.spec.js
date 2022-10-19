const UsersService = require('../../../services/users.services')
const {  } = require('../../fixtures/users.fixtures');
const { Op } = require('sequelize')

const mockUsersRepository = {
    findUserAccount: jest.fn(),
    createAccount: jest.fn(),
    login: jest.fn(),
};

describe('naver-users Service Layer Test', function () {
    beforeEach(() => {
        
        jest.resetAllMocks();
    });
    
    test('')
    
    
    
    
    
    
})