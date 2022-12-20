let characters = document.querySelector("#characters")

fetch("data.json")
    .then((resp) => resp.json())
    .then((data) => {
     console.log(data);

        data.map((item) => {
        const content = document.createElement("div");
        content.innerHTML =
                `
        <h4>${item.name}</h4>
        <img src="${item.img}"></img>
        `;
            characters.append(content);
        });
    });

