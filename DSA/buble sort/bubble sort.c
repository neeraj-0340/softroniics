#include <stdio.h>
int main()
{
    int arr1[7] = {10, 2, 32, 12, 11, 0, 23};
    int i, j, n, temp, k;
    n = sizeof(arr1) / sizeof(arr1[0]);
    for (i = 0; i < n; i++)
    {
        for (j = 0; j < n - i; j++)
        {
            if (arr1[j] > arr1[j + 1])
            {
                temp = arr1[j];
                arr1[j] = arr1[j + 1];
                arr1[j + 1] = temp;
            }
        }
    }
    for (i = 0; i <=n; i++)
    {
        printf("%d ", arr1[i]);
    }
}