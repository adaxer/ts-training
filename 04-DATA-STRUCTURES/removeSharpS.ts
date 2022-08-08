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
    let text = element.innerText
    // console.log('text :>> ', text);
    text = text.replace(/ß/g, 'ss')
    element.innerText = text
});

allTagsHTMLColl = document.getElementsByTagName('*');
console.log('allTagsCol', allTagsHTMLColl);