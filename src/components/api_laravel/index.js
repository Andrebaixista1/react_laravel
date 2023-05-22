import axios from 'axios';

componentDidMount(){
    axios.get('/api/dados')
    .then(response =>{
        console.log(response.data)
    })
    .catch(error =>{
        console.log(error)
    })
}