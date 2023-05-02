export default function handleAlert ({ text }){
  setAlert({ show: true, type, text });
  setTimeout(() => {
    setAlert({ show: false });
  }, 3000);
};

export default function grabCategories(){
    return fetch('https://fakestoreapi.com/products/categories')
    .then(res=>res.json())
}
