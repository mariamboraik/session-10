let productsSection = document.querySelector(".products"); 
 
 
function getByCategory(category) { 
    let xhr = new XMLHttpRequest(); 
 
    xhr.onload = () => { 
        if (xhr.readyState === 4) { 
            console.log("all is ok!"); 
 
            if (xhr.status == 200) { 
                let response = JSON.parse(xhr.responseText); 
                let products = response.products;  
                console.log(products); 
 
                
                productsSection.innerHTML = ''; 
 
                 
                products.forEach(product => { 
                    let productCard = ` 
                        <div class="card"> 
                            <img src="${product.thumbnail}" alt="${product.title}"> 
                            <h3>${product.title}</h3> 
                            <p>${product.description}</p> 
                            <p>Price: <span class="price">${product.price}</span></p> 
                        </div> 
                    `; 
                   
                    productsSection.innerHTML += productCard; 
                }); 
            } 
        } 
    }; 
 
    xhr.open("GET", `https://dummyjson.com/products/category/${category}`, true); 
    xhr.send(); 
} 
 
 
function loadAllProducts() { 
    let xhr = new XMLHttpRequest(); 
 
    xhr.onload = () => { 
        if (xhr.readyState === 4) { 
            console.log("all is ok!"); 
 
            if (xhr.status == 200) { 
                let response = JSON.parse(xhr.responseText); 
                let products = response.products;  
                console.log(products); 
 
                productsSection.innerHTML = ''; 
 
                
                products.forEach(product => { 
                    let productCard = ` 
                        <div class="card"> 
                            <img src="${product.thumbnail}" alt="${product.title}"> 
                            <h3>${product.title}</h3> 
                            <p>${product.description}</p> 
                            <p>Price: <span class="price">${product.price}</span></p> 
                        </div> 
                    `; 
                    
                    productsSection.innerHTML += productCard; 
                }); 
            } 
        } 
    }; 
 
    xhr.open("GET", "https://dummyjson.com/products", true); 
    xhr.send(); 
} 
 
loadAllProducts(); 
function searchProducts() { 
    let query = document.getElementById('searchInput').value; 
 
    if (query.trim() === "") { 
        loadAllProducts();  
        return; 
    } 
 
    let xhr = new XMLHttpRequest(); 
 
    xhr.onload = () => { 
        if (xhr.readyState === 4) { 
            console.log("Search successful!"); 
 
            if (xhr.status == 200) { 
                let response = JSON.parse(xhr.responseText); 
                let products = response.products;  
                console.log(products); 
 
                productsSection.innerHTML = ''; 
 
                products.forEach(product => { 
                    let productCard = ` 
                        <div class="card"> 
                            <img src="${product.thumbnail}" alt="${product.title}"> 
                            <h3>${product.title}</h3> 
                            <p>${product.description}</p> 
                            <p>Price: <span class="price">${product.price}</span></p> 
                        </div> 
                    `; 
                    productsSection.innerHTML += productCard; 
                }); 
            } 
        } 
    }; 
 
    xhr.open("GET", `https://dummyjson.com/products/search?q=${query}`, true); 
    xhr.send(); 
}