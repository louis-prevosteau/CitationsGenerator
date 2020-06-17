let avatar = document.getElementById('avatar');
let citation = document.getElementById('citation');
let author = document.getElementById('author');
let btn = document.getElementById('btn');

btn.addEventListener('click',update);

async function getCitation(){
    let response;
    await $.post("./citations.json",function(data){response = data;});
    console.log(response);
    return response;
}

async function update(){
    let citations =  await getCitation();
    let maCitation = citations[parseInt(Math.random() * citations.length)];
    avatar.setAttribute('src',maCitation.avatar);
    citation.innerHTML = maCitation.citation;
    author.innerHTML = maCitation.nom;
}

getCitation();