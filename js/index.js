$('#btn').click(function () {
    if (document.getElementById('slide').style.width == '30%') {

        close()

    }
    else {
        open()
    }
})
$('.wow').hide(500)
function open() {



    $('.head-slide').animate({ width: '30%' }, 500)
    $('.wow').show(500)
    $('#btn').removeClass('fa-solid fs-2  btn-slide fa-list-ul');
    $('#btn').addClass(' fa-solid fs-1   btn-slide  fa-xmark')

}
function close() {


    $('.head-slide').animate({ width: '0px' }, 500)
    $('.wow').hide(500)
    $('#btn').removeClass(' fa-solid fs-2   btn-slide  fa-xmark')
    $('#btn').addClass('fa-solid fs-2  btn-slide fa-list-ul');
}











async function getapi() {

    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");

    let api = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s')
    let apinfo = await api.json()

    displayapi(apinfo)
    loading.classList.add("d-none");
}
getapi()



function displayapi(apinfo) {
    let desapi = apinfo.meals

    let cartonna = ``
    for (let i = 0; i < desapi.length; i++) {
        cartonna += `
      
      <div   data-id="${desapi[i].idMeal}" class="col-lg-3">
      <div   class="items  mt-5 ">
          <img class="emg" src="${desapi[i].strMealThumb}" alt="">
          <div   class="w-100 h-100  d-flex align-items-center  itemsbro">
            <h2  class="ms-2">${desapi[i].strMeal}</h2>
            
          </div>
      </div>
      <br>
      
  </div>
      
      `
    }
    $('#show').append(cartonna);
    $('.col-lg-3').click(function (e) {
        let id = this.dataset.id
        getidmeal(id)
        $('#details').removeClass('d-none')
        $('#home').addClass('d-none')

    })

}








async function getapicat() {


    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");
    
    let apicat = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    let apinfocat = await apicat.json()
   

    displayapicat(apinfocat)


    loading.classList.add("d-none");
}
getapicat()





function displayapicat(apinfocat) {





    let desapicat = apinfocat.categories

    let cartonna = []
    for (let i = 0; i < desapicat.length; i++) {
        cartonna += `
      
      <div data-no3="${desapicat[i].strCategory}"  class="col-lg-3">
      <div class="items  mt-5 ">
          <img class="emg" src="${desapicat[i].strCategoryThumb}" alt="">
          <div class="w-100 h-100   align-items-center  itemsbro">
            <h2 class="ms-2">${desapicat[i].strCategory}</h2>
            <p class="par">${desapicat[i].strCategoryDescription}</p>
          </div>
      </div>
      <br>
      
  </div>
      
      
      `



    }

    $('#showcat').append(cartonna)
    



    $('.col-lg-3').click(function (e) {

        let elno3 = this.dataset.no3
        getapicatno3(elno3)
        $('#nooo3').removeClass('d-none')


    })

}

$('#searchid').click(function () {
    $('#home').addClass('d-none')
    $('#removetest').remove();
    $('#removetest2').remove();
     $('.wowww').remove()
     $('#fromWhat').addClass('d-none')
     $('#displayfrom').addClass('d-none')
     $('.testremove4').remove()
    $('#catsec').addClass('d-none')
    $('#inputlog').addClass('d-none')
    $('#Searchw').removeClass('d-none')
    $('.testremove6').remove()
    $('#nooo3').addClass('d-none')
    $('#Ingredients').addClass('d-none')
    close()
})

$('#cat').click(function () {
    $('#home').addClass('d-none')
    $('#removetest').remove();
    $('#removetest2').remove();
     $('.wowww').remove()
     $('#fromWhat').addClass('d-none')
     $('#displayfrom').addClass('d-none')
     $('.testremove4').remove()
     $('#inputlog').addClass('d-none')
    $('#catsec').removeClass('d-none')
    $('#Searchw').addClass('d-none')
    $('.testremove6').remove()
    $('#nooo3').addClass('d-none')
    $('#Ingredients').addClass('d-none')
    close()
})

$('#formwe').click(function () {
    $('#home').addClass('d-none')
    $('#removetest').remove();
    $('#removetest2').remove();
    $('#inputlog').addClass('d-none')
     $('.wowww').remove()
     $('.testremove6').remove()
     $('#fromWhat').removeClass('d-none')
     $('#catsec').addClass('d-none')
      $('.testremove4').remove()
     $('#displayfrom').addClass('d-none')
     $('#Searchw').addClass('d-none')
    $('#nooo3').addClass('d-none')
    $('#Ingredients').addClass('d-none')
    close()
})
$('#intd').click(function () {
    $('#home').addClass('d-none')
    $('#removetest').remove();
    $('#removetest2').remove();
     $('.wowww').remove()
     $('#fromWhat').addClass('d-none')
     $('#catsec').addClass('d-none')
     $('#inputlog').addClass('d-none')
      $('.testremove4').remove()
      $('.testremove6').remove()
      $('#Searchw').addClass('d-none')
     $('#displayfrom').addClass('d-none')
    $('#nooo3').addClass('d-none')
    $('#Ingredients').removeClass('d-none')
    close()

})
$('#inbutides').click(function () {
    $('#home').addClass('d-none')
    $('#removetest').remove();
    $('#removetest2').remove();
     $('.wowww').remove()
     $('#fromWhat').addClass('d-none')
     $('#catsec').addClass('d-none')
     $('#inputlog').removeClass('d-none')
      $('.testremove4').remove()
      $('.testremove6').remove()
      $('#Searchw').addClass('d-none')
     $('#displayfrom').addClass('d-none')
    $('#nooo3').addClass('d-none')
    $('#Ingredients').addClass('d-none')
    close()

})



async function getapicatno3(elno3) {


    
    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");
  
    let noo3 = elno3
    let getapicatno3 = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${noo3}`)
    let apinfocatw = await getapicatno3.json()


    displayno3(apinfocatw)

    loading.classList.add("d-none");

}
getapicatno3()



function displayno3(apinfocatw) {


    $('#catsec').addClass('d-none')


        
    let disno3 = apinfocatw.meals
   
    let cartonna = ``
    for (i = 0; i < disno3.length; i++) {
        cartonna += `
     
     <div " data-idno3="${disno3[i].idMeal}"  class="col-lg-3  wowww ">
     <div class="items">

       <img class="w-100" src="${disno3[i].strMealThumb}" alt="">
       <div class="w-100 h-100  d-flex align-items-center   infono3">
         <h2 class="ms-2">${disno3[i].strMeal}</h2>
       </div>

     </div>
    </div>

     
     `


    }



    $('#catno3').append(cartonna)

    $('.col-lg-3 ').click(function () {
        let findno3 = this.dataset.idno3
        getidmeal(findno3)
        $('.wowww').remove()
    })

}





async function getapiform() {


    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");


    let apifrom = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
    let apinfofrom = await apifrom.json()
let fromWhat = apinfofrom.meals

displayfrom(fromWhat)

loading.classList.add("d-none");

}
getapiform()


function displayfrom(fromWhat)
{

    let findfrom = fromWhat

let cartonna = ``
for (let i = 0; i < findfrom.length; i++) {
   
    cartonna+=`
    
    <div  data-from="${findfrom[i].strArea}"  class="col-lg-3 text-center text-white ">
    <i class="fa-solid poininfo fa-house-laptop Home-logo"></i>
    <h3 class="poininfo">${findfrom[i].strArea}</h3>
</div>
    
    `




}


$('#showfrom').append(cartonna)



$('.col-lg-3').click(function(){
  let idfrom = this.dataset.from
  
  frominfo(idfrom)
  $('#fromWhat').addClass('d-none')
})
}

async function frominfo(idfrom)
{

    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");

    let apifrominfo = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${idfrom}`)
    let apinfofrominfo = await apifrominfo.json()
    let findapifrominfo = apinfofrominfo.meals
    console.log(findapifrominfo);
    displayfrominfo(findapifrominfo)

    loading.classList.add("d-none");

}


function displayfrominfo(findapifrominfo)
{


    $('#displayfrom').removeClass('d-none')
let findfrominfo = findapifrominfo
let cartonna = ``
for (let i = 0; i < findfrominfo.length; i++) {
    cartonna+=`
    
    <div  data-disfrom="${findfrominfo[i].idMeal}"  class="  testremove4 col-lg-3">
    <div class="items  text-white ">
     <img class="w-100" src="${findfrominfo[i].strMealThumb}" alt="">
       <div class="w-100 h-100 d-flex align-items-center text-dark   fromitems">
        <h2 class="ms-2">${findfrominfo[i].strMeal}</h2>
       </div>
    </div>
</div>
    
    
    `
    
}
$('#showdispform').append(cartonna)

$('.col-lg-3').click(function(){
    let idmeal = this.dataset.disfrom
  
    getidmeal(idmeal)
    $('#displayfrom').addClass('d-none')
})

}

async function getidmeal(id) {



    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");

    let idmeal = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    let idmealinfo = await idmeal.json()

   
    let det = idmealinfo.meals
    details(det)

    loading.classList.add("d-none");

}
getidmeal()

async function apiIngredients()
{




    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");

    let apifromint= await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
    let apinfofromint = await apifromint.json()
    let findapifrominfo = apinfofromint.meals
  
    displayint(findapifrominfo)

    loading.classList.add("d-none");

}
apiIngredients()

function displayint(findapifrominfo)
{
    let int = findapifrominfo
    let cartonna =``
     for (let i = 0; i < 20; i++) {
        cartonna+=`
        
        <div data-namew="${int[i].strIngredient}" class="col-lg-3">
        <div class="items text-center ovint text-white">
         <i class="fa-solid fa-drumstick-bite Home-logo "></i>
         <h3>${int[i].strIngredient}</h3>
         <p>${int[i].strDescription}</p>
        </div>
      </div>
        
        `
        
     }
     $('#showIngredients').append(cartonna)
     $('.col-lg-3').click(function(){
        let namemeal = this.dataset.namew
       $('#Ingredients').addClass('d-none')
        apiintNo3(namemeal)
        
        
    })
}


async function apiintNo3(namemeal)
{





    const loading = document.querySelector(".loading");
    
    loading.classList.remove("d-none");




    
  let nameint = namemeal
  let apiname= await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${nameint}`)
  let apinameint = await apiname.json()
  let apinameintNo3 = apinameint.meals
 
  disintNo3(apinameintNo3)

  loading.classList.add("d-none");

}

function disintNo3(apinameintNo3)
{
    let find = apinameintNo3
 let cartonna =``
 for (let i = 0; i < find.length; i++) {

   cartonna+=`

   <div data-findid="${find[i].idMeal}" class="col-lg-3 testremove6 ">
   <div class="items">
       <img class="w-100" src="${find[i].strMealThumb}" alt="">
       <div class="w-100 h-100 d-flex align-items-center int-no3">
        <h2 class="ms-2">${find[i].strMeal}</h2>
       </div>
   </div>
</div>
   
   `
    
 }

 $('#dispIngredientsno3').append(cartonna)
 $('.col-lg-3').click(function(){
    let idfind = this.dataset.findid
   $('#Ingredients').addClass('d-none')
    
  
   $('.testremove6').remove()
   getidmeal(idfind)
})

}





function details(det) {

 
    $('#details').removeClass('d-none')



    let wow = det

    let cartonna = ``

    cartonna += `

<div id="removetest" class="col-lg-4 text-white">
<div class="items">
    <img  class="w-100 mt-5 emginfo" src="${wow[0].strMealThumb}" alt="">
    <h2>${wow[0].strMeal}</h2>
</div>
</div>
<div id="removetest2"  class="col-lg-8 mt-5   text-white">
<div class="items ">
<h3>Instructions</h3>
<p>${wow[0].strInstructions}</p>
<h2>Area : ${wow[0].strArea}</h2>
<h2>Category : ${wow[0].strCategory}</h2>
<h2>Recipes :</h2>
<span class="btn btn-info me-4 ">${wow[0].strMeasure1} ${wow[0].strIngredient1}</span> <span class="btn btn-info me-4 ">${wow[0].strMeasure2} ${wow[0].strIngredient2}</span>
<span class="btn btn-info me-4 ">${wow[0].strMeasure3} ${wow[0].strIngredient3}</span><br>
<br> <span class="btn btn-info me-4 ">${wow[0].strMeasure4} ${wow[0].strIngredient4}</span>
<span class="btn btn-info me-4 ">${wow[0].strMeasure5} ${wow[0].strIngredient5} 
<br>
<br>
</span> <span class="btn btn-info me-4 ">${wow[0].strMeasure6} ${wow[0].strIngredient6}</span>
<span class="btn btn-info me-4 ">${wow[0].strMeasure7} ${wow[0].strIngredient7}</span>
<br>
<br>
<h2> Tags :</h2>
<h2> ${wow[0].strTags}</h2>

<br>
<br>
<button class="btn btn-danger me-2"> <a href="${wow[0].strYoutube}"> Youtube</a></button>   <button class="btn btn-info"> <a href="${wow[0].strSource}"> Source</a></button>
</div>
</div>

`
    $('#showdet').append(cartonna)
}

// let searchapi ;
// let searchww ;

// async function searchinput(asd)
// {
  
//    searchapi= await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${asd}`)
//    searchww = await searchapi.json()
  

//    console.log(searchww);
//   disearch()
// }


// function disearch()
// {
// let cartonna =``

// for (let i = 0; i < searchww.meals.length; i++) {

   
//     cartonna  +=`
//    <div class="col-lg-3">
//    <div class="items">
//        <img class="w-100" src="${searchww.meals[i].strMealThumb}" alt="">
//        <div class="w-100 h-100 d-flex align-items-center searchcss ">
//            <h2 class="ms-2">curb</h2>
//        </div>
//    </div>
//    </div>
   
   
   
//    `
  
// }




// }


// let searchByName = document.querySelector("#sea");
// searchByName.addEventListener("keyup", function(){
//     searchinput(this.value);
// })


async function getMealWithSearch(searchName){




   let api = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchName}`);
 let   finalApi = await api.json();
   
   displayMeal(finalApi);



}



async function getMealWithSearchone(onelitter){





   let fik = onelitter
   
   let apis = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${fik}`);
  let  finalApis = await apis.json();
 
 displayMeal(finalApis  )



  
}
// ${element.strMeal}
// ${element.strMealThumb}

function displayMeal(finalApi){
    let cartona = ``;
    for (let i = 0; i < finalApi.meals.length; i++) {
        const element = finalApi.meals[i];
        cartona += `

           <div data-sehdet="${element.idMeal}" class="col-lg-3">
           <div class="items">
               <img class="w-100" src="${element.strMealThumb}" alt="">
               <div class="w-100 h-100 d-flex align-items-center searchcss ">
                   <h2 class="ms-2">${element.strMeal}</h2>
               </div>
           </div>
           </div>

        `
    }
    document.querySelector("#searchin").innerHTML = cartona;
    $('.col-lg-3').click(function(){
        let getfen = this.dataset.sehdet
  
        getidmeal(getfen)
        $('#Searchw').addClass('d-none')


    })
}

let searchByName = document.querySelector("#sessa");
searchByName.addEventListener("keyup", function(){
    getMealWithSearch(this.value);
})

let searchByName11 = document.querySelector("#sessabsb7rf");
searchByName11.addEventListener("keyup", function(){
    getMealWithSearchone(this.value);
})




let x =  document.querySelectorAll('.input input')
let notval = document.getElementById('nootName')
let nootEmail = document.getElementById('nootEmail')
let nootPass = document.getElementById('nootPass')
let nootAge = document.getElementById('nootAge')



function validtestName(input)
{
 let y = /^(?:[a-zA-Z0-9\s@,=%$#&_\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDCF\uFDF0-\uFDFF\uFE70-\uFEFF]|(?:\uD802[\uDE60-\uDE9F]|\uD83B[\uDE00-\uDEFF])){2,20}$/



 if(y.test(input.value))
 {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')


    notval.classList.add('d-none')
   console.log('hello');
 return true
 }
 else
 {

    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    notval.classList.remove('d-none')

 console.log('wow');

   return false
 }

}

x[0].addEventListener('input' , function(){
    validtestName(x[0])
})



///////////////////////

function validtestEmail(input)
{
 let y = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/




 if(y.test(input.value))
 {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    nootEmail.classList.add('d-none')
   console.log('hello');
 return true
 }
 else
 {

    input.classList.add('is-invalid')
    input.classList.remove('is-valid')

    nootEmail.classList.remove('d-none')
 console.log('wow');

   return false
 }

}

x[1].addEventListener('input' , function(){
    validtestEmail(x[1])
})




///////////////////////

function validtestPass(input)
{
 let y = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/




 if(y.test(input.value))
 {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    nootPass.classList.add('d-none')
   console.log('hello');
 return true
 }
 else
 {

    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    nootPass.classList.remove('d-none')

 console.log('wow');

   return false
 }

}

x[4].addEventListener('input' , function(){
    validtestPass(x[4])
})




///////////////////////

function validtestAge(input)
{
 let y = /^([1-7][0-9]|80)$/




 if(y.test(input.value))
 {
    input.classList.add('is-valid')
    input.classList.remove('is-invalid')
    nootAge.classList.add('d-none')
   
    
   console.log('hello');
 return true
 }
 else
 {

    input.classList.add('is-invalid')
    input.classList.remove('is-valid')
    nootAge.classList.remove('d-none')

 console.log('wow');

   return false
 }

}

x[3].addEventListener('input' , function(){
    validtestAge(x[3])
})


