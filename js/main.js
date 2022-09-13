const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
  ]
    function loadindex(){
      const ol = document.querySelector("#linkslist");

      links.forEach(link=> {
        const link = document.childElement("li")
        const href = document.createElement("a");
        href.setAttribute("href", link.url);
      })
    }  
 