import axios from "axios";
const api = "http://localhost:5454/products" 

export const fetchProducts = async()=>{
    try {
        const response = await axios.get(api)
        console.log("Products fetched successfully:", response);
    } catch (error) {
        console.error("Error fetching products:", error);

    }
}