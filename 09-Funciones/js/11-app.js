//arrow function
const aprendiendo = (tecnologia, tecnologia2) => {
    console.log(`Aprendiendo ${tecnologia} y ${tecnologia2}`);
}

aprendiendo('Javascript' , 'React');

//si solo hay un parámetro se pueden eliminar los paréntesis 
const aprendiendo2 = tecnologia => `Aprendiendo ${tecnologia}  ` ;

console.log(aprendiendo2('Javascript' , 'React'));

const aprendiendo3 = (tecnologia, tecnologia2) => `Aprendiendo ${tecnologia} y ${tecnologia2}` ;

console.log(aprendiendo3('Javascript' , 'Angular'));


