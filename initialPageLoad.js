export function initialPageLoad(){
    const contentDiv=document.querySelector("#content");
    const heading=document.createElement("h1");
    heading.textContent="Thop restaurant";
    heading.classList="res-title";
    contentDiv.append(heading);

    const image=document.createElement("img");
    image.classList="image";
    image.src="./Assets/res.jpg";
    contentDiv.append(image);

    const text=document.createElement("div");
    text.classList="text";
    text.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sunt ipsam ab, placeat perferendis perspiciatis officia, incidunt quis id odit facere eligendi corrupti laudantium ratione ullam nulla voluptas possimus culpa?";
    contentDiv.append(text);
};