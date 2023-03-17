// Write your solution here!
let cats =['Milo','Otis','Garfield']
function destructivelyAppendCat(name){
    cats.push (name);
    return cats;
}
destructivelyAppendCat('Ralph')

function destructivelyPrependCat(name){
    cats.unshift(name);
    return cats;
}
destructivelyPrependCat('Bob')

function destructivelyRemoveLastCat(){
    let destructivelyRemoveLastCat= cats.pop ();
    return destructivelyRemoveLastCat;
}
destructivelyRemoveLastCat('Garfield')

function destructivelyRemoveFirstCat(){
    let destructivelyRemoveFirstCat=cats.shift();
    return destructivelyRemoveFirstCat;
}
destructivelyRemoveFirstCat( Milo)

function appendCat(name){
    const cat = [cats,name]
    return cat ;
}
appendCat('Broom')

function prependCat (name){
    const cat  = [name ,cats]
    return cat;
}
prependCat('Arnold')

function removeFirstCat(){
const firstItem= cats.slice(1)
    return  firstItem;
}
removeFirstCat()

function removeLastCat(){
    const lastItem=cats.slice(0,2)
    return lastItem;
}
removeLastCat()