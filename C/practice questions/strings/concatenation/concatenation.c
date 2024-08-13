#include <stdio.h>
int main()
{
    char stra[100];
    char strb[100];
    printf("enter the string 1 elements :");
    gets(stra);
    printf("\nenter the string 2 elements :");
    gets(strb);
    strcat(stra,strb);
    printf("the string after concatenation is :%s",stra);
    return 0;
}