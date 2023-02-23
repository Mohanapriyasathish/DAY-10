//FormData.addEventListner('submit',(e)=>{
   // e.preventDatafault()
   // parent = document.querySelector('.user-data')
   // row-table = document.createElement('tr')

    //fN = document.createElement('td')
    //fN_data = document.querySelector('[placeholder*="First"]')
    //fN.innertext = fN_data.value
   // row_table.append(fN)
//btn = document.querySelector('[type="submit"]')
//btn.addEventListner('click',fun)
//btn.addEventListner('click',()=>{
   // child = document.createElement('h2)')
    //child.innerText = 'Welcome'

   // parent= document.querySelector('body')
    //parent.insertAdjacentElement('afterbegin',child)
    //console.log('clicked 2');
    //settimeout(()=>{
      //  document.querySelector('h2').style.display = 'none'
   // },5000)
   // })

//unction clicking(event){
   // parent = documrent.querySelector('.screen')
    //operator = ['-','+','*','/']
    //if(! (operator.includes(parent.innerText.slice(-1))&&operator.includes(parent.innerText + event.innerText)))
//}
//const evaluate1 =()=>{
   // parent = document.querySelector('.screen')
   // outputOriginal = document.querySelector('.output')
   // data = parent.innerText
    //v////ar output = eval(data)
   // outputOriginal.innertext = output
  ////  console.log('evaluate',output);
//}
parent = document.querySelector('.user-data')
form = document.querySelector('#form')
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        var name=document.getElementById("name").value
        console.log(name)
    
       

        row_table = document.createElement('tr')

        arrData = ["First","Last","address","Pincode","gender","state","country"]

        for(let i of arrData){
            fN = document.createElement('td')
            fN_data = document.querySelector(`[placeholder*=${i}]`)
            fN.innerText = fN_data.value
            row_table.append(fN)
            fN_data.value = ''
        }
        parent.append(row_table)
        

    })