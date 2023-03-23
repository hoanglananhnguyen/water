const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// axios.defaults.baseURL = 'https://127.0.0.1:2000/';
app.use(express.static('public'));
app.use(express.json());


app.get('/:id', (req, res)=>{
    axios.get('https://trefle.io/api/v1/species/search?q=daisy&token=q2Chz5iVGDkknIJ2e03oOfG9i1yofhGIIxmsBruMNK4') 
        // params: {
        //     token: 'q2Chz5iVGDkknIJ2e03oOfG9i1yofhGIIxmsBruMNK4'
        // }

        .then(response => {
            response.data.data.forEach(element => {
                console.log(element.common_name);
            });
        })
        .catch(error => {
            console.log(error);
        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
});


// axios.get('https://trefle.io/api/v1/species/search?q=daisy&token=q2Chz5iVGDkknIJ2e03oOfG9i1yofhGIIxmsBruMNK4')
//         .then(response => {

//             //console.log(response.data.data[0].common_name);
//             response.data.data.forEach(element => {
//                 console.log(element.common_name);
//                 console.log(element.image_url);
//                 console.log(element.year);
//                 console.log(element.author)
//             });
            
//         })
//         .catch(error => {
//             console.log(error);
//         });
