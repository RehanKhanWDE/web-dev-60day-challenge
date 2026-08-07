function calc(op)
{
    var a = document.getElementById("n1").value;  // box1 se value
    var b = document.getElementById("n2").value;  // box2 se value
    
    // Error check
    if(a == "" || b == "")
    {
        document.getElementById("jawab").innerHTML = "Bhai dono box bharo 😡";
        return;
    }
    
    a = Number(a);
    b = Number(b);
    var c;
    
    if(op == "+") c = a + b;
    if(op == "-") c = a - b;
    if(op == "*") c = a * b;
    if(op == "/") 
    {
        if(b == 0)
        {
            document.getElementById("jawab").innerHTML = "0 se bhag nahi hota ";
            return;
        }
        c = a / b;
    }
    
    // NAYA: Alert ki jagah page pe likhna
    document.getElementById("jawab").innerHTML = "Jawab = " + c;
}
