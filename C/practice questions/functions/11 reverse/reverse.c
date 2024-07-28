#include <stdio.h>

int main()
{
    printf("Enter a sentance: ");
    reverseSentance();
    
}
void reverseSentance()
{
    char c;
    scanf("%c",&c);
    if(c!='\n')
    {
        reverseSentance();
        printf("%c",c);
    }
    return 0;
}