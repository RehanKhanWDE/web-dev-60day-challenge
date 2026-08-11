function printNumber()
{
    var text = ""; // khali dabba
    
    // for loop = baar baar kaam karwane ke liye
    for(var i = 1; i <= 10; i++) // i=1 se shuru, 10 tak jao, har baar +1
    {
        text = text + i + "<br>"; // har number ke baad nayi line
    }
    
    document.getElementById("output").innerHTML = text;
}
