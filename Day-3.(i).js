c3=0
c5=0
for (i=1 ; i<=100 ; i++)
{
    s=""
    c3++
    c5++
    if(c3 == 3)
    {
        s = s+ "fizz" 
        c3=0
    }
    if(c5==5)
    {
        s = s+ "Buzz"
        c5=0
    }
    if(s == "")
    {
        console.log(i)
    }
    else
    {
        console.log(s)
    }
}