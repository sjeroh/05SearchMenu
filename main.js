function myFunction(){
  let input=document.getElementById('mySearch');
  //.toUpperCase() 대문자로 변환
  //.value --> input 태그에 적힌 값을 확인
  let filter = input.value.toUpperCase();
  // console.log(filter)
  let ul = document.getElementById('myMenu');
  let li = ul.getElementsByTagName('li');
  // console.log(li)

  for(let i=0;i<li.length;i++){
    let a = li[i].getElementsByTagName('a')[0];
    // console.log(a.innerHTML)
    // a.innerHTML --> a태그안에 text를 추출.
    //innerText도 되긴하네..

    if(a.innerHTML.toUpperCase().indexOf(filter)>-1){
      li[i].style.display='block';
    }else{
      li[i].style.display='none';
    }
  }
}