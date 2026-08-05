function calc(op)
{
    var a = document.getElementById("n1").value;
    var b = document.getElementById("n2").value;
    
    // Day 37: Check karna ki khali to nahi hai
    if(a == "" || b == "")
    {
        alert("Bhai dono box me number daal 😡");
        return;
    }
    
    a = Number(a);
    b = Number(b);
    var c;
    
    if(op == "+") c = a + b;
    if(op == "-") c = a - b;
    if(op == "*") c = a * b;
    if(op == "/") c = a / b;
    
    alert("Jawab = " + c);
}
