#include <stdio.h>
int main()
{
    int i, n, j = 0;
    int arr1[100], arr2[100], arr3[200];
    printf("enter size of 1st array :");
    scanf("%d", &n);
    printf("enter the elements :");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr1[i]);
    }
    printf("enter the elements :");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr2[i]);
    }
    for (i = 0; i < n; i++)
    {
        arr3[j++] = arr1[i];
    }
    for (i = 0; i < n; i++)
    {
        arr3[j++] = arr2[i];
    }
    for (i = 0; i < n + n; i++)
    {
        printf("%d", arr3[i]);
    }
}