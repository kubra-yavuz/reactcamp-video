import axios from "axios"
export default class productService{
    getProducts(){
        return axios.get("http://localhost:5084/api/Products/GetList?PageIndex=0&PageSize=10")
    }
    getByProductName(productName){
        return axios.get("http://localhost:5084/api/Products/getByProductName?name="+productName)
    }
}