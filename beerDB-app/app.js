const baseURL = `https://sandbox-api.brewerydb.com/v2`;
const search = `/search?q=`;
//const beerName = 'dry';
const type =   `&type=beer`;
const key = `&key=c2794a49996068f02fae050e225faa50`;
const dataBeers = `/beers`;
//const queryURL = baseURL +  dataBeers + key;
//const queryURL = baseURL + search + beerName + type + key;
 //console.log(queryURL);



$(()=>{

    
                    $('#beer').on('click', (event) => {
                        

                        const beerName = $('#input-box').val();           // clicks on beer to get value and pass it resPromise function
                        $('#input-box').val('');
                        console.log(beerName);




 const resPromise = () =>{
                    $.ajax({
                    type: 'GET',
                    crossDomain: true,
                    dataType: 'json',

                    url: baseURL + search + beerName + type + key                       // gets the beer details using api
    }).then((res)=>{
        $('.container').empty();
       for( let i=0; i<res.data.length; i++){                                         //prints beer names, abv ,image and descrition
           console.log(res);
           let image='';
           let beerDescrition='';
           if(res.data[i].labels){
               image=res.data[i].labels.medium;
           }
           if(res.data[i].description){
               beerDescrition=res.data[i].description;
           }
                        $('.container').append(`
                        
                        <h2>${res.data[i].name}<h2>
                        <h3>Alcohol content : ${res.data[i].abv}<h3>

                        <img src="${image}"/>

                        <p>${beerDescrition}<p>
                        
                        `)
                
    }
                    }, (error) =>{
                        console.error(error)
 
     })
     
    } 
    resPromise();



     
        

     });
     








 });
