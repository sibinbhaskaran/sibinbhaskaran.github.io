const baseURL = `https://sandbox-api.brewerydb.com/v2`;
const data = `/brewery/random`;
const key = `/?key=c2794a49996068f02fae050e225faa50`;

const queryURL = baseURL +  data + key;

 console.log(queryURL);



$(()=>{



const resPromise = $.ajax({

url: queryURL,

});
resPromise.then(   (res)=>{

console.log(res);



}     )


// const  beerRandom = () =>{

// $.ajax({

// url: queryURL

// }).then((random) => {

// console.log(random) 
// }, (error) => {
//     console.error(error)
// })



// }



 });
