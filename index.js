export default function jsonp(url, params) {
  let search = '' 
  let index = 0
  if(params) {
    for(let i in params) {
      search += `${index === 0 ? '?' : '&'}${i}=${params[i]}`
      index++
    }
  }

  let allRul = url + search 

  let script_1 = document.createElement('script');
  
  script_1.src = allRul

  document.body.appendChild(script_1);
  
  script_1.addEventListener('load', function() {
    document.body.removeChild(script_1)
  })

}