#include <stdio.h>

int main()
{
    int n,num;
    printf("Enter a num:");
    scanf("%d",&n);
    num=n;
    int rem,result;
    while(n!=0)
    {
        rem=n%10;
        result=result*10+rem;
        n=n/10;
        
    }
    if(num==result)
    {
    printf("The no is palindrome");
    }
    else
    {
        printf("The no not a palindrome");
        
    }
    return 0;
}