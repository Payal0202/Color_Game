function playSound() {
    console.log("Sound played!");
  }
  
  function playMusic() {
    console.log("Music played!");
  }
  
  function changeText() {
    const input = document.getElementById("name").value;
    const textElement = document.getElementById("text");
    textElement.textContent = input || "ColorBook Mohcin147";
    console.log("Text changed!");
  }
  
  function toggleboxup() {
    const box = document.getElementById("boxname");
    box.style.display = box.style.display === "none" ? "block" : "none";
  }
  