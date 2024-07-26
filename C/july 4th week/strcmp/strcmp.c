#include <stdio.h>
#include <string.h>
int main()
{
    char stra[100];
    char strb[100];
    printf("enter the string 1 elements :");
    gets(stra);
    printf("the size of 1st string is :%d",strlen(stra));
    printf("\nenter the string 2 elements :");
    gets(strb);
    if(strcmp(stra,strb)==0)
    printf("they are equal.");
    else
    printf("they are not equal.");
    return 0;
}