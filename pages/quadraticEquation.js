/* Решение квадратного уравнения */
function print(real, imag)
{   if (Math.abs(imag)<1E-6)
    return real;
else
    return '('+real+','+imag+')';
}
sqareSl.onclick = function()
{
    let A = document.quadratic.A.value;
    if (Math.abs(A)<1E-3)
    {   document.getElementById('output').innerHTML = 'Not a quadratic equation.';
        return;
    }
    let B = document.quadratic.B.value;
    let C = document.quadratic.C.value;
    A = 2*A;
    let D = B*B-2*A*C;
    if (Math.abs(D)<1E-3)
    {   document.getElementById('output').innerHTML = 'x = '+(-B/A);
        return;
    }
    if (D>0)
        document.getElementById('output').innerHTML = 'x1 = '+print((-B+Math.sqrt(D))/A, 0)+'<br />x2 = '+print((-B-Math.sqrt(D))/A, 0);
    else
        document.getElementById('output').innerHTML = 'x1 = '+print(-B/A,Math.sqrt(-D)/A)+'<br />x2 = '+print(-B/A,-Math.sqrt(-D)/A);
}