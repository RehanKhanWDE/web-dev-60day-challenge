function checkResult()
{
    var marks = document.getElementById("marks").value; // box se number uthao
    
    // Check khali hai kya
    if(marks == "")
    {
        document.getElementById("result").innerHTML = "Bhai marks daal pehle 😡";
        return;
    }
    
    marks = Number(marks); // text ko number banao
    
    // Yahi naya hai - if else
    if(marks >= 35)  // agar 33 ya usse zyada hai
    {
        document.getElementById("result").innerHTML = "PASS ho gaya bhai 🎉";
    }
    else // warna
    {
        document.getElementById("result").innerHTML = "FAIL ho gaya 💀 padh le";
    }
}
