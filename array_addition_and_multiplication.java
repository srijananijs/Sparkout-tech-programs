import java.util.*;
import java.util.Arrays;

public class array_addition_and_multiplication {

    static int[] arr = { 12, 3, 4, 34,15 }; //it wiil return values but void didn't return value
    
    
    static int sum(){
        int sum = 0; 
        int i;
  
        for (i = 0; i < arr.length; i++)
            sum =sum+arr[i];
        return sum;        
    }

    static int multiply(){
        int sum = 1; 
        int i;
  
        for (i = 0; i < arr.length; i++)
            sum =sum*arr[i];
        return sum;        
    }
 
    
    public static void main(String[] args)  {
         // SUM OF THE ARRAY --------------------
        System.out.println(sum());

        //MULTIPLICATION OF THE ARRAYS-----------------
        System.out.println(multiply());
    }
}