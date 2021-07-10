s = "mom and dad speak malayalam"
s= s+ " "
word =""
revword =""
for (x of s)
{
    if(x != " ")
    {
        word = word + x
        revword = x + revword
    }
    else
    {
        if(word == revword){
            console.log(word)
        }
        word = ""
        revword = ""
    }
}