#include <stdio.h>
int main()
{
    int n, i, first = 0, second = 1, next,count=0;
    printf("Enter the number of terms :");
    scanf("%d", &n);
    printf("%d\n%d\n",first,second);
    count=2;
    while(count<n)
    {

        next = first + second;
        count++;
         printf("%d", next);
        first = second;
        second = next;

       
    }
}