/*Ceci est un commentaire*/
//console.log('toto');

//String

let myVar = "ma variable";
myVar =" variable changee";

const myVar2 = "ma variable 2 ";

//console.log(myVar);

//boolean
let isTrue = true;
let isFalse = false;

//console.log(isTrue);

//chiffres et opérateurs

let chiffre1 = 4;
let chiffre2 = 3;

//console.log(chiffre1 + chiffre2 );

//template string, littéraux de gabarit et concatenations

let test = 'test' + myVar + 'value';
 let test2 = 'test ${myVar} dzpfdf';

//console.log(test2);

//if(chiffre1 == 3){
//    console.log('condition remplie');
//} else{
//   console.log('la condition n est pas validee' ); 
//}

//les tableaux
//let array = ['item 1 ' , 'item 2', 'item 3', 'item 4'];
//console.log(array[0]);

//objets

//let obj = {
//    title: 'Mon titre',
//    description: 'ma desription'
//}


//console.log(obj.title ,obj.description);


//les boucles
//for(let i = 0; i < Array.length; i++) {
//  console.log(i)  
//}

//functions

/*
function myFunction(item, item2){
console.log(item, item2)
}*/
/*
const myFunction = (item, item2) =>{
    console.log(item, item2);
}

myFunction('toto', 5);
myFunction('tata', 6 );

const calcul = (nb1, nb2) => {
    console.log(nb1 + nb2);
}

let result = (calcul(4 , 5));
console.log(result);

//interraction avec le DOM // methode propriete evenement

console.log(document.body);

//selectors// 
let header = document.querySelector('.header');

//console.log(header); */

/* let grids = document.querySelectorAll('.grid');

grids.forEach(grid =>{
    grid.classList.add('titi');
    console.log(grid)
});


//evenements les plus courants 

document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM entierement chargé et analysé");
});

header.addEventListener('click', function (e) {
        console.log(e.clientX);
    });

    header.addEventListener('mouseenter', function (e) {
        console.log('souris entre');
    });

*/
//insertion DOM et navigation dans le DOM

let div = document.createElement('div')
div.classList.add('Top');
div.innerHTML = '<span>Top zone</span>'
header.parentNode.append(div);
//console.log(header.nextElementSibling);


//fin de la theorie//

//theme function//

function menuMobile(){
    const btn = document.querySelector('.burger');
    const header = document.querySelector('header');
    const link = document.querySelectorALL('.navbar a');
    btn.addEventListener('click', () => {
       
        header.classList.toggle('show-nav');
    });
    links.forEach(link, () => {
        link.addEventListener('click', () => {
       header.classList.remove('show-nav');
    });
    })
}

menuMobile();

/* Portfolio */
function tabsFilters() {
    const tabs = document.querySelectorAll('.portfolio-filters a');
    const projets = document.querySelectorAll('.portfolio .card');
  
    const resetActiveLinks = () => {
      tabs.forEach(elem => {
        elem.classList.remove('active');
      })
    }
  
    const showProjets = (elem) => {
        console.log(elem);
        projets.forEach(projet => {
    
          let filter = projet.getAttribute('data-category');
    
          if (elem === 'all') {
            projet.parentNode.classList.remove('hide');
            return
          }
    
          console.log('tutu');
          // ne sera pas pris en compte !
          /*if (filter !== elem) {
            projet.parentNode.classList.add('hide');
          } else {
            projet.parentNode.classList.remove('hide');
          }*/
    
          // option pour les plus motivés - opérateur ternaire
          filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');
    
        });
      }
    
      tabs.forEach(elem => {
        elem.addEventListener('click', (event) => {
          event.preventDefault();
          let filter = elem.getAttribute('data-filter');
          showProjets(filter)
          resetActiveLinks();
          elem.classList.add('active');
        });
      })
    }
    
    tabsFilters()

    function showProjectDetails() {
      const links = document.querySelectorAll('.card__link');
      const modals = document.querySelectorAll('.modal');
      const btns = document.querySelectorAll('.modal__close');
    
      const hideModals = () => {
        modals.forEach(modal => {
          modal.classList.remove('show');
         });
      }
    
      links.forEach(elem => {
        elem.addEventListener('click', (event) => {
          event.preventDefault();
    
          document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
        });
      });
    
      btns.forEach(btn => {
        btn.addEventListener('click', (event) => {
          hideModals();
        });
      });
    
    }
    
    showProjectDetails();



//effets
// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();