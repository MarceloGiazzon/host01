

function createTree() {
    const treeContainer = document.getElementById("tree");
    let level = 0; // Track the current level
  
    for (let link of jsonLinks) {
      const parts = link.split("\\");
      let currentNode = treeContainer;
      for (let i = 0; i < parts.length; i++) {
        const part = parts[i];
        let li = currentNode.querySelector(`li[data-name="${part}"]`);
        if (!li) {
          li = document.createElement("li");
          li.setAttribute("data-name", part);
          li.textContent = part;
          
          if (part.toLowerCase().indexOf('.html') > -1)
          {
            const url = link.replace(/\\/g, "/");
            const a = document.createElement("a");
            a.href = url;
            a.textContent = part;
            li.innerHTML = ""; // Clear the li element content
            li.appendChild(a);
          }

          currentNode.appendChild(li);
        }
        li.style.backgroundColor = getColor(level); // Assign a background color based on the level
        
        var soyLink = true;

        if (i < parts.length - 1) {
          let ul = li.querySelector("ul");
          if (!ul) {
            ul = document.createElement("ul");
            ul.classList.add("hidden"); // Initially hide the sublevel
            li.appendChild(ul);
  
            // Add a "+" symbol to indicate sublevel
            const indicator = document.createElement("span");
            indicator.classList.add("sublevel-indicator");
            indicator.textContent = "+";
            li.insertBefore(indicator, li.lastElementChild);
            soyLink = false;
          }
          currentNode = ul;
          level++; // Increment the level for sublevels
        }
      }
      level = 0; // Reset the level for each link
    }
  }
  
  function getColor(level) {
    const colors = ["#0f0", "#ff0", "#f0f", "#0ff"]; // Define an array of distinct colors
    return colors[level % colors.length]; // Get the color based on the level
  }
  
  function toggleSublevel(event) {
    const li = event.target;
    const ul = li.querySelector("ul");
    if (ul) {
      ul.classList.toggle("hidden"); // Toggle the hidden class on the sublevel
    }
  }
  
  const treeContainer = document.getElementById("tree-container");
  treeContainer.addEventListener("click", toggleSublevel);
  
  createTree();
  