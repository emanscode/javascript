function calculateArea() { 
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;

    const result = (length) * (width);
    document.getElementById("area").value = result;


    // if (!length || !width || isNaN(length) || isNaN(width)) {
    //     alert("Please enter valid numerical values for length and width.");
    //     return;
    // }
}
