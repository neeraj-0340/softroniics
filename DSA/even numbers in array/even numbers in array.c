#include <stdio.h>

int main()
{
    int n, i, j = 0;

    printf("Enter the Size of the Array: \n ");
    scanf("%d", &n);

    int arr[n];
    int brr[n];

    printf("Enter the Elements : \n ");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    for (i = 0; i < n; i++)
    {
        if (arr[i] % 2 == 0)
        {
            brr[j] = arr[i];
            j++;
        }
    }

    printf("Even Elements are : ");
    for (i = 0; i < j; i++)
    {
        printf(" %d,", brr[i]);
    }
    return 0;
}