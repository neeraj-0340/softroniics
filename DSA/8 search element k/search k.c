#include <stdio.h>
#include <string.h>

int main()
{
    int arr[100];
    int i, k, n;
    printf("enter the size of array :");
    scanf("%d", &n);
    printf("Enter the Elements : \n ");
    for (i = 0; i < n; i++)
    {
        scanf("%d", &arr[i]);
    }

    printf("Enter Element to Search: \n ");
    scanf("%d", &k);
    for (i = 0; i < n; i++)
    {
        if (arr[i] == k)
        {
            printf("%d found at  %d\n", k, i);
        }
    }

    return 0;
}