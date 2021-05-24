export default function authHeader() {
    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    console.log(userInfo)
    if (userInfo && userInfo.token) {
     
      return { 'x-access-token': userInfo.token };       // for Node.js Express back-end
    } else {
      return {};
    }
  }