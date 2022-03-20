class enfants {
  constructor(sexe, nom, prenom) {
    this.sexe = sexe;
    this.nom = nom;
    this.prenom = prenom;
  }
  showPrenom(){
    return console.log(this.prenom);
  }
}

const samuel = new enfants ("garcon", "turpin","samuel");


const btn = document.querySelector("button");

btn.addEventListener('click',()=>console.log(samuel.showPrenom()));
