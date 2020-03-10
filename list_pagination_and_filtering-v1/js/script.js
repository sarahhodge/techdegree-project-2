/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//global variables to store the students and items per page
const listItems = document.querySelectorAll('.student-item');
const itemsPerPage = 10;


/* The showPage() will only show 10 students on each page by hiding
   all other listItems
*/
const showPage = (listItems, pageNum) => {
  let startIndex = (pageNum * itemsPerPage) - itemsPerPage
  let endIndex = pageNum * itemsPerPage
    for(let i = 0; i < listItems.length; i += 1){
        if(i >= startIndex && i < endIndex) {
         listItems[i].style.display= '';
      } else {
         listItems[i].style.display = 'none';
      };
   };
};
/*
The appendPageLinks() creates the div and ul. Then loops over and creates
the li and a for each page with 10 items per page
*/
const appendPageLinks = (listItems) => {
  const pageTotal= Math.ceil(listItems.length/itemsPerPage);
  const main = document.querySelector('.page');
  const div = document.createElement('div');
      div.className= 'pagination';
      main.appendChild(div);
  const ul= document.createElement('ul');
      div.appendChild(ul);

  for (let i = 0; i < pageTotal; i +=1){
      const li = document.createElement('li');
      const a= document.createElement('a');
      if (i === 0){
        a.className = 'active'};
      li.appendChild(a);
      ul.appendChild(li);
      a.href = '#';
      a.textContent = i+1;
// If the user clicks a page number, then the a.className is set to active
      a.addEventListener('click', (e) => {
      let active = document.querySelector('a.active');
      active.className = ''
      e.target.className = 'active';
      showPage(listItems, e.target.textContent);
    });
  };
};

//calling the functions
showPage(listItems, 1);
appendPageLinks(listItems);
