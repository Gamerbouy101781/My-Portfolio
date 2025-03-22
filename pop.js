// script.js

// Initialize the Ace Editor
const editor = ace.edit("editor");
editor.setTheme("ace/theme/monokai");
editor.getSession().setMode("ace/mode/html");

// Function to run the code
function runCode() {
  const outputDiv = document.getElementById("output");
  const code = editor.getValue();
  
  // Show the "preview" message before displaying the actual output
  const previewMessage = document.createElement("div");
  previewMessage.classList.add("output-message");
  previewMessage.textContent = "Previewing your code...";
  
  // Append the preview message to output
  outputDiv.innerHTML = '';
  outputDiv.appendChild(previewMessage);
  
  // Add class to show the preview message with animation
  outputDiv.classList.add("show-preview");
  
  // Simulate a delay before showing the actual output
  setTimeout(() => {
    outputDiv.innerHTML = code;  // Show the code output in the output section
  }, 1500); // Delay for 1.5 seconds (matching animation duration)
}

// Function to clear the editor and output
function clearCode() {
  editor.setValue('');
  document.getElementById("output").innerHTML = '';
}
