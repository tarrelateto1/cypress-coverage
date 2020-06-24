import axios from 'axios'


const  api ={
    getData: function(){
        return axios.get('https://csdheuzibj.execute-api.ap-southeast-1.amazonaws.com/dev/getAllPerson'
        )
    },
    postdata: function(){
        return axios.post('https://csdheuzibj.execute-api.ap-southeast-1.amazonaws.com/dev/createPerson',{
            "id": "7",
            "name": "Tar123"
        })
    }
}

export {api as default}