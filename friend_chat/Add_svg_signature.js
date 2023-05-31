// Define a function that creates a svg canvas with a signature
function createSignature() {
    // Create a svg element
    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    // Set the svg width and height
    svg.setAttribute("width", "300");
    svg.setAttribute("height", "200");
    svg.setAttribute("id", "sign");
    // Append the svg to the document body
    document.body.appendChild(svg);
  
    // Define a neon glow filter
    var filter = document.createElementNS("http://www.w3.org/2000/svg", "filter");
    filter.setAttribute("id", "neon-glow");
    filter.setAttribute("x", "-50%");
    filter.setAttribute("y", "-50%");
    filter.setAttribute("width", "200%");
    filter.setAttribute("height", "200%");
    var blur = document.createElementNS("http://www.w3.org/2000/svg", "feGaussianBlur");
    blur.setAttribute("in", "SourceGraphic");
    blur.setAttribute("stdDeviation", "3");
    blur.setAttribute("result", "blur");
    var merge = document.createElementNS("http://www.w3.org/2000/svg", "feMerge");
    var mergeNode1 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feMergeNode"
    );
    mergeNode1.setAttribute("in", "blur");
    var mergeNode2 = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "feMergeNode"
    );
    mergeNode2.setAttribute("in", "SourceGraphic");
    merge.appendChild(mergeNode1);
    merge.appendChild(mergeNode2);
    filter.appendChild(blur);
    filter.appendChild(merge);
    svg.appendChild(filter);
  
  // Create a text element with the signature
  var text = document.createElementNS("http://www.w3.org/2000/svg", "text");
  
  // Change the font family to Chakra Petch font style
  text.setAttribute(
      "font-family",
      "'Chakra Petch', sans-serif"
  );
  
  // Add a link to the Chakra Petch font style in the head of the document
  var link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css?family=Chakra+Petch";
  document.head.appendChild(link);
  
  text.setAttribute("x", "150");
  text.setAttribute("y", "42");
  
  // Change the font size to fit the canvas
  text.setAttribute("font-size", "25");
  
  // Change the fill color to yellow
  text.setAttribute("fill", "#ffff00");
  
  text.setAttribute("text-anchor", "middle");
  text.setAttribute("filter", "url(#neon-glow)");
  text.textContent = "By Bing Chat";
  
  // Append the text to the svg
  svg.appendChild(text);
  }
  
  // Call the function to create the signature
  createSignature();
  