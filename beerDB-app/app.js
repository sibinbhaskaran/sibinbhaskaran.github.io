const baseURL = `https://sandbox-api.brewerydb.com/v2`;
const search = `/search?q=`;

const type =   `&type=beer&withBreweries=Y&withLocations=y`;
const typeBrewery = `&type=brewery&withBreweries=Y&withLocations=y`

const key = `&key=c2794a49996068f02fae050e225faa50`;
  


$(()=>{

///////////////////////////////////////////////////////////////////////////////////////
//function  for  beer button, when clicked retrieves beer name, image description,brewery 
////////////////////////////////////////////////////////////////////////////////////////
    
                    $('#beer').on('click', (event) => {
                        

                        const beerName = $('#input-box').val();           // clicks on beer to get value and pass it resPromise function
                        $('#input-box').val('');
                        //console.log(beerName);




 const resPromise = () =>{
                    $.ajax({
                    type: 'GET',
                    crossDomain: true,
                    dataType: 'json',

                    url: baseURL + search + beerName + type + key                       // gets the beer details using api
    }).then((res)=>{
        $('.container').empty();
        if(res.data===undefined){
            $('.container').append(`
            <h2>Results not found<h2>
            `)

        }
        else{
       for( let i=0; i<res.data.length; i++){                                         //prints beer names, abv ,image and descrition
           console.log(res);
           console.log(res.data.length);
           
           
           
           let image='';
           let beerDescrition='';
           if(res.data[i].labels){
               image=res.data[i].labels.medium;
           }
           if(res.data[i].description){
               beerDescrition=res.data[i].description;
           }
           

                        $('.container').append(`
                        
                        <h2>Name:${res.data[i].name}<h2>
                        <h4>Brewery : ${res.data[i].breweries[0].name}<h4>
                        <h3>Alcohol content : ${res.data[i].abv}<h3>

                        <img src="${image}"/>

                        <p>${beerDescrition}<p>
                        
                        `)
                
    }
                    }}, (error) =>{
                        console.error(error)
                    
     })
    
    } 
    resPromise();

 
 
     });

////////////////////////////////////////////////////////////////////////////////////////////////////////
//function  for  brewery button, when clicked retrieves brewery name, image, description,location,website 
///////////////////////////////////////////////////////////////////////////////////////////////////////
     
    
      $('#location').on('click', (event) => {
                            

        const beerLocation = $('#input-box').val();           // clicks on beer to get value and pass it resPromise function
         $('#input-box').val('');




        const resPromiseLocation = () =>{
            $.ajax({
            type: 'GET',
            crossDomain: true,
            dataType: 'json',

            url: baseURL + search + beerLocation + typeBrewery + key               // gets the location details using api
            }).then((resLocation)=>{
            $('.container').empty();
            if(resLocation.data===undefined){                                     //condition to check if data search available or not 
                $('.container').append(`
                <h2>Results not found<h2>
                `)
    
            }
              else{

            for( let i=0; i<resLocation.data.length; i++){ 
                                                        
            console.log(resLocation);
          let image2='';                                              //to remove the undefined/unavailble data(images,descrition)
           let description2='';
           if(resLocation.data[i].images){
               image2=resLocation.data[i].images.medium;
           }
           if(resLocation.data[i].description){
               description2=resLocation.data[i].description;
           }

            $('.container').append(`
            
            <h2>${resLocation.data[i].name}<h2>
            
            <h3>${description2}<h3>
            <img src="${image2}"/>
            <h3>${resLocation.data[i].locations[0].streetAddress}<h3>
            <h3>${resLocation.data[i].locations[0].region}<h3>
            <h3>${resLocation.data[i].locations[0].locality}<h3>
            <h3>${resLocation.data[i].locations[0].postalCode}<h3>
            <a href="${resLocation.data[i].website}">${resLocation.data[i].website}</a>
            <h3>Opened for public visits : ${resLocation.data[i].locations[0].openToPublic}<h3>
            `)
    
}
        }}, (error) =>{
            console.error(error)

})

} 
resPromiseLocation();

     });           

 });
