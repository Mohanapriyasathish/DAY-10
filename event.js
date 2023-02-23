btn= document.querySelector('[type="submit"]')
//btn.addEventListner('click',fun)
//function fun(){
   // console.log('clicked');
//}
btn.addEventListner('click',()=>{
    //console.log('clicked 2');
  child = document.createElement('h2')
   child.innerText ='Welcome'
   parent = document.querySelector('body')
   parent.insertAdjacentElement('afterbegin',child)
   console.log('clicked 2');
   settimeout(()=>{
   document.querySelector('h2').remove().style.display='none'
   },5000)
   //console.log('clicked 2');
})
function clicking(event){
    
   // console.log(event);
    //console.log(event.innerText);
    parent = document.querySelector('.screen')
    //operator = ['-','+','*','/']
    if(!(operator.includes(parent.innerText.slice(-1)))&& operator.includes(event.innerText)){
        //console.log('button clicking',event.innerText);
        parent.innerText = parent.innerText + event.innerText
       // console.log('last data is operator');
       // console.log('button clicking',event.innerText);
        //parent.innerText = parent.innerText + event.inner.Text
    }
    
}
window.addEventListener('keypress',(event)=>{
    operator = ['-','+','/','*']
    key = event.key
    code = event.code
    if (code.includes('Digit') || operator.includes(key)){
        parent = document.querySelector('.screen')
        parent.inner.text = parent.innerText + key
        console.log('key is press')
        console.log(event)
        
    }else {
        console.log('error')
    }
   // console.log(e)
    //console.log('key is press')
})
const evaluate1 =()=>{
    parent = document.querySelector('.screen')
    outputOriginal = document.querySelector('.output')
    data = parent.innerText
    var output = eval(data)
    outputOriginal.innerText = output
    console.log('evaluate',output);
}