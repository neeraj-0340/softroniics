#include <stdio.h>

int main()
{
    int n, i, j;
    char ch='a';

    printf("Enter the number of rows: ");
    scanf("%d", &n);

    for (i = 1; i <= n; i++)
    {
        for (j = 0; j < i; j++)
        {
            printf("%c ", ch);
            ch++;
        }
        printf("\n");
    }

    return 0;
}