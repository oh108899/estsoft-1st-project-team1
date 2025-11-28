const popup = document.querySelector('#popup');
const popupBtn = document.querySelector('.close');
const check = document.querySelector('#agree')
const ok = document.cookie.includes('popup=ok')

if(ok){
  popup.style.display = 'none';
}else{
  popup.style.display = 'block';
}
popupBtn.addEventListener('click',()=>{
  popup.style.display = 'none';
  if(check.checked){
    createCookie('popup','ok',1);
  }else{
    createCookie('popup','ok',-1);
  }
})

function createCookie(name,value,day){
  let today = new Date();
  today.setDate(today.getDate()+day);
  document.cookie = `${name}=${value}; Expires=${today.toUTCString()}`
}