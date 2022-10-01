const links = [
    {label: "Week 1 notes", url: "week1/index.html",},
    {label: "Week 2 notes", url:"week2/index.html",},
    {label: "week 2 group work", url:"week2/groupwork.html",},
    {label: "week 3 notes", url:"week3/index.html",},
    {label: "week 3 group work", url:"week3/groupwork3.html" ,},
    {label: "Group Work", url:"week3/teamwork3.html",},
   
  ];
  
    function loadIndex() {
      const ol = document.querySelector("#linkslist");

      links.forEach( link => {
        const li = document.createElement("li");
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
        href.innerText = link.label;

        li.appendChild(href);
        ol.appendChild(li);
      })
    }  
 