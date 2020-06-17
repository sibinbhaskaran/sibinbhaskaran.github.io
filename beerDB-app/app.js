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
         

        const beerName = $('#input-box').val();
        $('#input-box').val('');
        console.log(beerName);








 const resPromise = () =>{
                    $.ajax({
                    type: 'GET',
                    crossDomain: true,
                    dataType: 'json',

                    url: baseURL + search + beerName + type + key
    }).then((res)=>{
       for( let i=0; i<res.data.length; i++){
           console.log(res);
                        $('.container').append(`
                        
                        <h2>${res.data[i].name}<h2>
                        <h3>Alcohol content : ${res.data[i].abv}<h3>
                        <p>${res.data[i].description}<p>
                        
                        `)
                
    }
                    }, (error) =>{
                        console.error(error)
 
     })
     
    } 
    resPromise();



     
        

     });
     








 });
