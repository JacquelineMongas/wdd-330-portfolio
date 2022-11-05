const links = [
    {label: "Week 1 Notes", url: "week1/index.html",},
    {label: "Week 2 Notes", url:"week2/index.html",},
    {label: "week 2 Group work", url:"week2/groupwork.html",},
    {label: "week 3 Notes", url:"week3/index.html",},
    {label: "week 3 Group work", url:"week3/groupwork3.html" ,},
    {label: "Week 3 Group Work", url:"week3/teamwork3.html",},
    {label: "week 4 Notes", url:"week4/notes4.html",},
    {label: "Week 4 Group Work", url:"week4/teamwork/tictactoe.html",},
    {label: "Week 5 Notes", url: "week5/notes.html",},
    {label: "Week 5 Group Work", url:"week5/groupwk5/index.html",},
    {label: "Week 6 To Do List", url:"week6/todo-list/todo.html",},
    {label: "Week 7 Notes", url:"week7/notes7.html",},
    {label: "Week 7 Group Work", url:"week7/groupActivity/hiking-complete.html",},
    {label: "Week 8 Group Work", url:"week8/groupActivity8/index.html",},
    {label: "Week 8 Notes", url:"week8/notes8.html",},
   
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
 