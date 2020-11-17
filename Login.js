const userId_Login = document.querySelector('#userId_login');
const userPassword_Login = document.querySelector('#password_login');

function logIn() {
    const id = userId_Login.value;
    const password = userPassword_Login.value;

    const storage_ID = localStorage.getItem(id);
    const storage_PW = storage_ID.split("userPw");

    const pw_split = storage_PW[1];
    const pw_split_length = pw_split.length;

    var pw_splice = pw_split.substring(3, pw_split_length-3);

    if (storage_ID) {
        console.log('id 존재')
        if (pw_splice === password) {
            alert('login success !!');
            console.log('로그인 성공')
            window.location.reload();
            saveInfo(storage_ID)
            window.location.replace("/Board.html");
        } else {
            alert('비밀번호가 일치하지 않습니다.')
        }
    } else {
        console.log('로그인 실패')
        alert('아이디가 존재하지 않습니다.')
    }

    userId_Login.value = '';
    userPassword_Login.value = '';
}