#include <stdio.h>
int main()
{
    int i, n, arr[100];
    printf("enter the row and column size :");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }
        for (i = 0; i < n; i++)
        {
            printf("%d\n", arr[i]);
        }
}