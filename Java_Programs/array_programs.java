import java.util.*;
import java.util.Arrays;
public class array_programs {
    public static void main(String[] args){

    //Get the First and Last Element of an Array---------------
        String[] arr12={"1", "2", "3", "4", "5"}; 

        int a= arr12.length;
        System.out.println(arr12[0]);
        System.out.println(arr12[a-1]);

    //Compare Two Arrays------------------------------

     int a1[]={1,2,3};
     int b1[]={1,2,3};
     if (Arrays.equals(a1,b1))
     {
        System.out.println("both are same");
     }
     else
        System.out.println("both are differerent");

     //check whether the array is empty or not-------------

      int[] any={};
      if(any.length<=0)
      System.out.println("it is an empty array");


     //Check if a Java Array Contains a Value------------------
       int[] a34={1,23,4,5,6,7};
       int val =7;
       for(int t:a34){
           if(t==val){
               System.out.println("the value "+val+" is present in the array"); 
           }
        }
    
     //Filter Values in an Array------------------------

        String[] xyz={"ac","dvdvfe","ejrejd","ervdvvv"};
        int filter_val=3;
        for(int i =0;i<xyz.length;i++)
        {
            String am=xyz[i];
        
            if (am.length()>=filter_val)
            {
                System.out.println(am);
            }
        }

 }
}