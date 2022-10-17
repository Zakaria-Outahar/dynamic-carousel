const imgHero = document.querySelector('.hero-container .conteneur-image img');
const divSimpleGalerie = document.querySelector('.simple-et-galerie');
const afficheOne = document.querySelector('.bloc-affiche.b1');
const afficheTwo = document.querySelector('.bloc-affiche.b2');
const afficheThree = document.querySelector('.bloc-affiche.b3');
const afficheFour = document.querySelector('.bloc-affiche.b4');
const afficheFive = document.querySelector('.bloc-affiche.b5');
const afficheSix = document.querySelector('.bloc-affiche.b6');
const divBgLeft = document.querySelectorAll('.trois-lignes h1 span div');
const divBgRight = document.querySelectorAll('.texte-simple-et-galerie span div');
const divGroupeUn = document.querySelectorAll('.bloc-de-div .groupe-1');
const divGroupeDeux = document.querySelectorAll('.bloc-de-div .groupe-2');
const divGroupeTrois = document.querySelectorAll('.bloc-de-div .groupe-3');
const divGroupeQuatre = document.querySelectorAll('.bloc-de-div .groupe-4');
const boutonsSlider = Array.from(document.querySelectorAll('.bouton'));

// let scrollMax;

let largeur = window.innerWidth;
window.addEventListener('resize', () => {
     largeur = window.innerWidth;
})

const TLCompo = gsap.timeline({
    defaults:{
        duration:1,
        ease: "circ",
    },
})

TLCompo
.to(afficheTwo, {x:0, opacity:1, delay:1.5})
.to(afficheThree, {x:0, opacity:1, delay:1.5}, 0)
.to(afficheTwo, {y:"15%"}, "+=1")
.to(afficheOne, {y:"-15%"}, "<")
.to(afficheThree, {y:"-15%"}, "<")
.to(afficheFive, {opacity:1, y:"-25%", transform:'rotate(0)'}, "+=1")
.to(afficheFour, {opacity:1, y:"30%", x:0}, "+=1")
.to(afficheSix, {opacity:1, y:"-30%"}, "<")


const TLHero = gsap.timeline({
    defaults:{
        duration:0.2,
    },
    repeat:-1,
    repeatDelay:9,
})

TLHero
.to(imgHero, {attr:{src:"./imgs/salon-nature.jpg"}})
.addLabel('step0', '<')
.to(divGroupeUn, {opacity:0, x:-400, y:-400, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeDeux, {opacity:0, x:400, y:-400, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeTrois, {opacity:0, x:-400, y:400, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeQuatre, {opacity:0, x:400, y:400, delay:"random(0,0.7)", duration:1}, "<")
.to('.bloc-affiche', {borderColor:"#000"}, "<")
.to(divSimpleGalerie, {background:"linear-gradient(#005a00, #003b00)"}, "<")
.to('.bouton', {backgroundColor:"transparent", borderColor:"#fff", className:"bouton", duration:0}, "<")
.to(boutonsSlider[0], {backgroundColor:"#119211", borderColor:"#119211", className:"bouton active"}, "<")
.to('.trois-lignes h1 span div, .texte-simple-et-galerie span div', {width:"0%", duration:0, backgroundColor:"#119211", onComplete: () => {
    TLCompo.restart();
}}, "<")
.to(divBgLeft[0], {duration:1, width:"105%"}, "<")
.to(divBgLeft[1], {duration:1, width:"90%"}, "<")
.to(divBgLeft[2], {duration:1, width:"85%"}, "<")
.to(divBgRight[0], {duration:1, width:"60%"}, "<")
.to(divBgRight[1], {duration:1, width:"75%"}, "<")
.to(imgHero, {attr:{src:"./imgs/enfants.jpg"}}, "+=9")  // ! N°2
.addLabel('step1', '<')
.to('.bloc-de-div div', {backgroundColor:"rgb(215, 193, 182)", x:0, y:0, opacity:1, duration:0}, "<")
.to(divGroupeUn, {opacity:0, x:-400, y:-400, rotation:-360, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeDeux, {opacity:0, x:400, y:-400, rotation:-360, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeTrois, {opacity:0, x:-400, y:400, rotation:-360, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeQuatre, {opacity:0, x:400, y:400, rotation:-360, delay:"random(0,0.7)", duration:1}, "<")
.to('.bloc-affiche', {borderColor:"rgb(190, 163, 121)"}, "<")
.to(divSimpleGalerie, {background:"linear-gradient(rgb(229, 210, 203), rgb(215, 193, 182))"}, "<")
.to('.bouton', {backgroundColor:"transparent", borderColor:"#fff", className:"bouton", duration:0}, "<")
.to(boutonsSlider[1], {backgroundColor:"#bb8774", borderColor:"#bb8774", className:"bouton active"}, "<")
.to('.trois-lignes h1 span div, .texte-simple-et-galerie span div', {width:"0%", duration:0, backgroundColor:"#bb8774", onComplete: () => {
    TLCompo.restart();
}}, "<")
.to(divBgLeft[0], {duration:1, width:"105%"},"<")
.to(divBgLeft[1], {duration:1, width:"90%"}, "<")
.to(divBgLeft[2], {duration:1, width:"85%"}, "<")
.to(divBgRight[0], {duration:1, width:"60%"}, "<")
.to(divBgRight[1], {duration:1, width:"75%"}, "<")
.to(imgHero, {attr:{src:"./imgs/chambre-adulte.jpg"}}, "+=9")  // ! N°3
.addLabel('step2', '<')
.to('.bloc-de-div div', {backgroundColor:"#585652", x:0, y:0, opacity:1, duration:0}, "<")
.to(divGroupeUn, {opacity:0, scale:0, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeDeux, {opacity:0, scale:0, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeTrois, {opacity:0, scale:0, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeQuatre, {opacity:0, scale:0, delay:"random(0,0.7)", duration:1}, "<")
.to('.bloc-affiche', {borderColor:"rgb(190, 163, 121)"}, "<")
.to(divSimpleGalerie, {background:"linear-gradient(#6A6762, #585652)"}, "<")
.to('.bouton', {backgroundColor:"transparent", borderColor:"#fff", className:"bouton", duration:0}, "<")
.to(boutonsSlider[2], {backgroundColor:"#333", borderColor:"#333", className:"bouton active"}, "<")
.to('.trois-lignes h1 span div, .texte-simple-et-galerie span div', {width:"0%", duration:0, backgroundColor:"#333", onComplete: () => {
    TLCompo.restart();
}}, "<")
.to(divBgLeft[0], {duration:1, width:"105%"},"<")
.to(divBgLeft[1], {duration:1, width:"90%"}, "<")
.to(divBgLeft[2], {duration:1, width:"85%"}, "<")
.to(divBgRight[0], {duration:1, width:"60%"}, "<")
.to(divBgRight[1], {duration:1, width:"75%"}, "<")
.to(imgHero, {attr:{src:"./imgs/cuisine.png"}}, "+=9")  // ! N°4
.addLabel('step3', '<')
.to('.bloc-de-div div', {backgroundColor:"#975F3F", x:0, y:0, scale:1, opacity:1, duration:0}, "<")
.to(divGroupeUn, {opacity:0, y:-400, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeDeux, {opacity:0, y:-400, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeTrois, {opacity:0, y:400, delay:"random(0,0.7)", duration:1}, "<")
.to(divGroupeQuatre, {opacity:0, y:400, delay:"random(0,0.7)", duration:1}, "<")
.to('.bloc-affiche', {borderColor:"#333"}, "<")
.to(divSimpleGalerie, {background:"linear-gradient(#B87B58, #975F3F)"}, "<")
.to('.bouton', {backgroundColor:"transparent", borderColor:"#fff", className:"bouton", duration:0}, "<")
.to(boutonsSlider[3], {backgroundColor:"#975F3F", borderColor:"#975F3F", className:"bouton active"}, "<")
.to('.trois-lignes h1 span div, .texte-simple-et-galerie span div', {width:"0%", duration:0, backgroundColor:"#DF9A72", onComplete: () => {
    TLCompo.restart();
}}, "<")
.to(divBgLeft[0], {duration:1, width:"105%"},"<")
.to(divBgLeft[1], {duration:1, width:"90%"}, "<")
.to(divBgLeft[2], {duration:1, width:"85%"}, "<")
.to(divBgRight[0], {duration:1, width:"60%"}, "<")
.to(divBgRight[1], {duration:1, width:"75%"}, "<")

boutonsSlider.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        const step = `step${index}`;
        TLHero.play(step);
    })
})