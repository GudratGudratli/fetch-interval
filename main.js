fetch('https://northwind.vercel.app/api/categories')
  .then((response) => response.json())
  .then((data) => {
    data.forEach((element) => {
        console.log(element);
        const ul = document.createElement("ul")
        ul.style.display = "flex"
        ul.style.justifyContent = "center"
        
        ul.style.gap = "50px"
        ul.style.border= "1px solid"
        ul.style.width = "800px"
    
        const idEl = document.createElement("li")
        idEl.innerHTML= element.id
        const descriptionEl = document.createElement("li")
        descriptionEl.innerHTML= element.description
        const nameEl = document.createElement("li")
        nameEl.innerText= element.name
    
        ul.append(idEl,descriptionEl,nameEl)
        document.body.appendChild(ul)
      })
  } 
  
  );



// https://northwind.vercel.app/api/categories