
// // run bằng cách sử dụng terminal của visual studio code : node bai2.js
// neu khong chay duoc thi phải cai thu vien axios : npm install axios
const axios = require('axios');

const url1="https://ghibliapi.herokuapp.com/films"
axios({
    method: 'get',
    url: url1,
    data: null
  })
  .then(res=>{
    
    let arr=res.data;
    
    let nameAnime=arr.map(item=>{
        return item.title;
    })
    for(let i=1;i<nameAnime.length;i++){
        console.log("ten anime thu "+ i +" la :" +nameAnime[i]);
    }
  })
  .catch(err=>console.log(err));