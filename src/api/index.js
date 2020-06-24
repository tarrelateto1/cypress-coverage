import axios from 'axios'


const  api ={
    getData: function(){
        return axios.get('https://csdheuzibj.execute-api.ap-southeast-1.amazonaws.com/dev/getAllPerson'
        )
    },
    postData: function(){
        return axios.post('https://csdheuzibj.execute-api.ap-southeast-1.amazonaws.com/dev/createPerson',{
            "id": "7",
            "name": "Tar123"
        })
    },
    putData: function () {
        return axios.put('https://csdheuzibj.execute-api.ap-southeast-1.amazonaws.com/dev/updatePerson/6',{"name":"TarUpdate"})
    },
    deleteData:function(){
        return axios.delete('https://csdheuzibj.execute-api.ap-southeast-1.amazonaws.com/dev/deletePerson/6')
    }
}

export {api as default}