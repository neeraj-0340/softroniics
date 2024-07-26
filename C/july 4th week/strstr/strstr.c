#include <stdio.h>
#include <string.h>
int main()
{
    char str[100] = "welcome to the c programming";
    char *sub;
    char str1[100];
    strcpy(str1, str);
    sub = strstr(str1, "the");
    printf("the subtsring is:%s", sub);
    return 0;
}