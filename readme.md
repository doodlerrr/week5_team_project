# 항해99 5주차 팀 프로젝트 9조
항해99 마지막 숙련주차 프로젝트
@doodlerrr @JG-Jeong @dahye24  


## 🙏 읽어주세요
과금 방지를 위해 일단 rds가 아닌 로컬 환경에서 진행을 부탁드리겠습니다. ( rds 정보는 보안을 위해 따로 공유드리겠습니다 )  
1. 일단 개인 로컬 디비 설정에 맞게 config파일 변경  
```
"development": {
    "username": "root",       => 이 부분을 변경해주세요!
    "password": null,         => 이 부분을 변경해주세요!
    "database": "w5team",     => 이 부분은 추후 rds에서 쓰게될 db 이름입니다!
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
```
2. 아래 명령어를 실행해 로컬 환경에 디비를 만들어주세요 
```
npx sequelize db:create
```
3. 원활한 진행을 위해 아래 명령어를 실행해 nodemon을 깔아주세요.
```
npm i nodemon -D
```
4. 이제 프로젝트는 `node app`이 아닌 `npm start`로 실행합니다.  
```
npm start

```
5. `npm start`를 입력하면 `models`를 바탕으로 자동으로 테이블이 생성됩니다.  


## ERD
<img width="830" alt="ERD" src="https://user-images.githubusercontent.com/100981819/196524130-8c23a976-bfc5-4e1c-ac86-07473225986b.png">

## API 설계
### 1️⃣  /users
|    기능     |  메소드  |    URL    |      request               |       response       |
|------------|--------|-----------|----------------------------|-----------------------|
|회원가입      |`POST`  |/api/users  |{<br>"email": "doodlerrr@daum.net",<br>"nickname": "doodlerrr",<br>"password": "1234Qwer!",<br> "confirmPassword": "1234Qwer!"<br>}|정상적인 요청인 경우 :<br>{<br>"data": {<br>"userId": 1,<br>"email": "doodlerrr@daum.net",<br>"nickname": "doodlerrr",<br>"password": "1234Qwer!"<br>}<br>}<br>정상적이지 않은 요청인 경우 : <br>1️⃣ <br>{<br>"errorMessage": "이미 가입된 이메일 또는 닉네임 입니다"<br>}<br>2️⃣ <br>{<br>"errorMessage": "비밀번호는 최소 4글자 이상, 알파벳 대소문자(a~z, A~Z), 숫자(0~9), 특수문자`를 포함해야 합니다"<br>}<br>3️⃣ <br>{<br>"errorMessage": "비밀번호가 일치하지 않습니다"<br>}|
|로그인|`POST`|/api/users/login|{<br>"email": "doodlerrr@daum.net",<br>"password": "1234Qwer!"<br>}|정상적인 요청일 경우 :<br>{<br>"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.<br>eyJpYXQiOjE2NjYxMjQxOTAsImV4cCI6MTY2NjEyNTk5MH0.<br>SMbL15eELN5mNnfrd6eqIZstCu_kKKBBTQl-R9iXnog"<br>}<br> 정상적이지 않은 요청일 경우 : <br>{<br>"errorMessage": "가입 정보를 찾을 수 없습니다"<br>} |

### 2️⃣  /posts
|    기능     |  메소드  |    URL            |      request               |       response       |
|------------|--------|-------------------|----------------------------|-----------------------|
|글 조회       |`GET`   |/api/posts         |                             |                      |
|글 상세 조회   |`GET`   |/api/posts/{postId}|                             |                      |
|글 쓰기       |`POST`  |/api/posts         |                             |                      |
|글 수정       |`PUT`   |/api/posts/{postId}|                             |                      |
|글 삭제       |`DELETE`|/api/posts/{postId}|                             |                      |

### 3️⃣  


