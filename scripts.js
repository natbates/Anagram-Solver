

function AddInput()
{
    // Get the element to clone
    var inputSection = document.querySelector('.LetterInput');
    
    // Clone the element and its child nodes (true for deep clone)
    var clonedSection = inputSection.cloneNode(true);
    
    // Optionally, clear the input fields in the cloned section
    clonedSection.querySelectorAll('input').forEach(function(input) {
        input.value = ''; // Clear the input field
    });

    // Append the cloned section to the container
    if (document.getElementById("InputHolder").childElementCount < 8)
    {
        document.getElementById('InputHolder').appendChild(clonedSection);
    }
};

