#include <stdio.h>
int main()
{
    int h;
    printf("Enter height in centimeters:");
    scanf("%d",&h);
    if(h<150){
        printf("short");
    }
    else if(h>150){
        printf("below average");
    }
    else if(h>165){
        printf("average");
    }
    else if(h>180){
        printf("above average");
    }
    else if(h>200){
        printf("tall");
    }
    
    return 0;
}