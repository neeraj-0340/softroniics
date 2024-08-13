#include <stdio.h>
#include <string.h>

int main()
{
    char str[100];
    printf("enter a string");
    scanf("%s", &str);

    int i, len = strlen(str);
    int flag = 0;
    for (i = 0; i < len / 2; i++)
    {
        if (str[i] != str[len -i -1])
        {
            flag = 1;
        }
    }
    if (flag == 0)
    {
        printf("it is palliandrome");
    }
    else
    {
        printf("it is not palliandrome");
    }
}