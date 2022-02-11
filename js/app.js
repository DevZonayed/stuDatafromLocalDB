
const students_form = document.querySelector('#students-form');
const std_list =document.querySelector('.std-list')
const std_short_list =document.querySelector('.std-short-list')

students_form.addEventListener('submit', function(e){
    e.preventDefault();

   let name =students_form.querySelector("input[name='name']");
   let faName =students_form.querySelector("input[name='f_mame']");
   let sclass =students_form.querySelector("input[name='class']");
   let roll =students_form.querySelector("input[name='roll']");
   let reg =students_form.querySelector("input[name='reg']");
   let img =students_form.querySelector("input[name='img']");
   let gender =students_form.querySelector("input[name='gender']:checked");
   let ban =students_form.querySelector("input[name='ban']");
   let eng =students_form.querySelector("input[name='eng']");
   let math =students_form.querySelector("input[name='math']");
   let sci =students_form.querySelector("input[name='sci']");
   let ssci =students_form.querySelector("input[name='ssci']");
   let rel =students_form.querySelector("input[name='rel']");

if(name.value == '' || faName.value == '' || sclass.value =='' || roll.value == '' ||reg.value == '' ||img.value == '' || gender.value == '' || ban.value == ''|| eng.value == ''||math.value == ''||sci.value == ''||ssci.value == ''||rel.value == ''){
    alert ("All Field Are Required")
}else{

    let  std_arr = [];
    if(getData('std_list')){
        std_arr = getData('std_list');
    }else{
        std_arr = [];
    }
    std_arr.push({
        name  : name.value,
        faName: faName.value,
        sclass: sclass.value,
        roll  : roll.value,
        reg   : reg.value,
        img   : img.value,
        gender: gender.value,
        ban   : ban.value,
        eng   : eng.value,
        math  : math.value,
        sci   : sci.value,
        ssci  :ssci.value,
        rel   : rel.value,
        
    })
    sendData("std_list", std_arr)
  
   }
    

    name.value ="";
    faName.value = "";
    sclass.value ="";
    roll.value ="";
    reg.value ="";
    img.value ="";
    gender.value ="";
    ban.value ="";
    eng.value ="";
    math.value ="";
    sci.value ="";
    ssci.value ="";
    rel.value ="";
    // std_short_list.style.display ="block"
    std_show ()
})




std_show ()

function std_show (){

    let show ='';
    let get_data = getData("std_list") ;

    get_data.map((data, index) => {
        show +=`<tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td>${data.roll}</td>
        <td>${data.reg}</td>
        <td>${data.sclass}</td>
        <td>${data.gender}</td>
        <td>4.75</td>
        <td>A</td>
        <td><img src="${data.img}" class="rounded"  style="width: 45px; height: 45px;" object-fit="cover" alt="Photo"></td>
        <td>
            <button class="btn btn-primary view"><i class="fas fa-eye"></i></button>
            <button onClick=delStd(${index}) class="btn btn-danger"><i class="fas fa-trash-alt"></i></button>
        </td>
    </tr>`

    })
    std_list.innerHTML = show;

    
}

function delStd(id){

let conf = confirm('Are You Sure?')

if (conf) {
    let data = getData("std_list");
    data.splice(id, 1);
    sendData("std_list", data)
    std_show ()

}
   return false 
}

const result_view = document.querySelector("#result_view")
const view = document.querySelectorAll(".view");
const btn_close = document.querySelector(".btn-close");

view.forEach(data => {
    data.addEventListener('click',function(){
        result_view.classList.add('active')
    })
})




btn_close.addEventListener('click', function(){
    result_view.classList.remove('active')
})