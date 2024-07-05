#include <stdio.h>
int main()
{
    int temp;
    printf("enter the temperature:");
    scanf("%d",temp);
    if(temp<0){
        printf("Freezing weather");
    }
    else if(temp<10){
        printf("Very Cold weather");
    }
    else if(temp<20){
        printf("Cold weather");
    }
    else if(temp<30){
        printf("Normal");
    }
    else if(temp<40){
        printf("Hot");
    }
    else if(temp>=40){
        printf("Very Hot");
    }

    return 0;
}