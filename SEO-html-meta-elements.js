(function() {
    clear();
    const elements = [
        "title",        
        "meta-description",
        "meta-robots",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",             
        "i",
        "b",
        "strong",
        "em",      
        "p",
        "img",
        "video",
        "iframe",
    ];

    elements.map((e) => {
       const E = e.toUpperCase();
       let selector = e;
       if (e === "meta-description") {
           selector = "meta[name='description']";
       } else if (e === "canonical") {
           selector = "link[rel='canonical']";
       } else if (e === "meta-robots") {
           selector = "meta[name='robots']";
       }
       const found = document.querySelectorAll(selector);
       console.log(`%c${E}: Found ${found.length}`, "color:blue;font-size:14px;border-top:1px solid blue;");
       if (found.length > 0) {
            found.forEach((f) => {
                let text = "";
                if (e === "meta-description" || e === "meta-robots") {
                    text = f.getAttribute("content");
                } else if (e === "canonical") {
                    text = f.getAttribute("href");                
                } else if (e === "img") {
                    text = f.getAttribute("alt");                                    
                } else {
                    text = f.textContent;
                }
                if (text === "") {
                    text = "[ EMPTY ]";
                }
                if (["iframe", "video"].includes(e)) { 
                    // ignore
                } else if (!["p"].includes(e)) {
                    console.log(`%c${text}\n%c${text && text.length ? text.length : 0}`, "font-size:12px", "color:green;font-size:13px");                
                } else {
                    console.log(`%c${E}: %c${text && text.length ? text.length : 0}`, "font-size:12px", "color:green;font-size:13px");
                }           
                console.log(f);
            });
       }       
    });
})();
