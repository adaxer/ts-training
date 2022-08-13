let allTagsHTMLColl = document.getElementsByTagName('*') // gibt eine HTMLCollection zurück
console.log('allTags', allTagsHTMLColl)

let allTagsArr: HTMLElement[] = [].slice.call(allTagsHTMLColl) // bis 'es2015'

console.log('allTagsArr :>> ', allTagsArr);

let myStringß = 'ßßßßß'

// let newString = myStringß.replace(/ß/i, 'ss')
let newString = myStringß.replace(/ß/g, 'ss')
// let newString = myStringß.replace('ß', 'ss')
console.log('myStringß', myStringß)
console.log('newString', newString)
allTagsArr.forEach(element => {
    let html = element.innerHTML;
    console.log('text :>> ', html);
    html = html.replace(/ß/g, 'ss')
    element.innerHTML = html
});

allTagsHTMLColl = document.getElementsByTagName('*');
console.log('allTagsCol', allTagsHTMLColl);