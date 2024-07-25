#include <stdio.h>  
#include <conio.h>  
int main()  
{  
    int num1, num2, i, hcf, LCM;  
    printf (" Enter any two positive numbers: \n ");  
    scanf ("%d%d", &num1, &num2);  
     
    for ( i = 1; i <= num1 && i <= num2; ++i)  
    {  
        if  (num1 % i ==0 && num2 % i == 0)  
        hcf = i; 
    }  
    LCM = (num1 * num2) / hcf;  
      
    printf( " The LCM of two numbers %d and %d is %d. ", num1, num2, LCM );  
}  