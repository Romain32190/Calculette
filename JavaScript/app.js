function Resultat() 
{ 
document.calculatrice.affichage.value = eval(document.calculatrice.affichage.value) 
} 

function Supprim() 
{ 
document.calculatrice.affichage.value = "" 
} 

function Ajout(Signe) 
{ 
document.calculatrice.affichage.value += Signe 
} 