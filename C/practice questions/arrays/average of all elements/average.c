#include <stdio.h>

int main()
{
    int n,i,sum=0,average;
    int arr[100];
    printf("Enter the size:");
    scanf("%d",&n);
    printf("Enter the elements:");
    for(i=0;i<n;i++)
    {
    scanf("%d",&arr[i]);
    }
    
    for(i=0;i<n;i++)
    {
       
        sum=sum+arr[i];
        
    }
    average=sum/n;
    printf(" Average number:%d",average);
    
    return 0;
}