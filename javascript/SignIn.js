const userName = document.querySelector('#username_signIn');
const userId = document.querySelector('#userId_signIn');
const userPassword = document.querySelector('#password_signIn');
const userPasswordCert = document.querySelector('#passwordCert_signIn');

const userObj = [];
// const USERLIST_LS = 'userLists';

function signIn() {
    const name = userName.value;
    const id = userId.value;
    const password = userPassword.value;
    const passwordCert = userPasswordCert.value;

    const exsitId = localStorage.getItem(id);

    if(exsitId === '' || password === '') {
        alert('빈칸이 있어선 안됩니다.')
    } else if (exsitId) {
        alert('이미 존재하는 아이디입니다.')
    } else if (password !== passwordCert) {
        alert('비밀번호가 일치하지 않습니다.')
    } else {
        const lists = JSON.parse(localStorage.getItem(userId));
        if(!lists) {
            const objArr = [];
            objArr.push({
                userId: `${id}`,
                userName: `${name}`,
                userPw: `${password}`
            });

            localStorage.setItem(id, JSON.stringify(objArr));

            alert('회원가입 성공');
            
        } else {
            lists.push({
                userId: `${userId}`,
                userName: `${userName}`,
                userPw: `${userPassword}`
            });

            localStorage.setItem(id, JSON.stringify(lists));
            
            alert('회원가입 성공')

        }
    }

    userId.value = '';
    userName.value = '';
    userPassword.value = '';
    userPasswordCert.value = '';
}