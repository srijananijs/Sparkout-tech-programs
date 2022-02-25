import java.util.*;
import java.util.Arrays;

public class array_copy_and_cloning {
    public static void main(String[] args){
    char arr1[] = {'a','s','d','f','g'};
    //COPY
    for(char a:arr1)
    {
        System.out.println(a);
    }
    
    //CLONING
    char arr2[] = arr1.clone();
    for (char abs:arr2)
    System.out.print(abs+" ");
        
    
  }
}