#include <stdio.h>

int main()
{
   int a[100][100],b[100][100],row,col,c[100][100],i,j;
   int arr[100];
   printf("Enter the order:");
   scanf("%d %d",&row,&col);
   printf("Enter the first matrix:\n");
   for(i=0;i<row;i++)
   {
       for(j=0;j<col;j++)
       {
           scanf("%d",&a[i][j]);
       }
       
   }
   printf("Enter the second matrix:\n");
   for(i=0;i<row;i++)
   {
       for(j=0;j<col;j++)
       {
       scanf("%d",&b[i][j]);
       }
   }
   for(i=0;i<row;i++)
   {
       for(j=0;j<col;j++)
       {
           c[i][j]=a[i][j]+b[i][j];
       }
   }
   printf("Matrix:\n");
   
   for(i=0;i<row;i++)
   {
       for(j=0;j<col;j++)
       {
           printf("%d\t",c[i][j]);
       }
   }
   
    return 0;
}