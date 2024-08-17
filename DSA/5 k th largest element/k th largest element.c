#include <stdio.h>
int main()
{
    int i, j, n, k, temp, a[105];
    printf("enter size of array :");
    scanf("%d", &n);
    for (i = 0; i < n; i++)
    {
        scanf("%d", &a[i]);
    }
    printf("elements in the array are :\n");
    for (i = 0; i < n; i++)
    {
        printf("%d\n", a[i]);
    }
    for (i = 0; i < n; i++)
    {
        for (j = i + 1; j < n; j++)
        {
            if (a[j] > a[i])
            {
                temp = a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    printf("elements after sorting is :");
    for (i = 0; i < n; i++)
    {
        printf("%d\n", a[i]);
    }

    printf("enter the nth largest element to find :");
     scanf("%d",&k);

     printf("the %d th largest element is %d",k,a[k-1]);
}