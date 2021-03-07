function print(vl){
 
     let $el = document.createElement('div');
     $el.innerHTML =  `<b> ${vl} </b>`;
     document.querySelector('body').appendChild($el);

}