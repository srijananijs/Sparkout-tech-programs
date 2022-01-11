package sparkout;

import java.util.*;
public class pyramid_pattern {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner myObj = new Scanner(System.in);
	        System.out.println("Enter pyramid size >");
	        int r = myObj.nextInt();

	        

	        for (int i = 1; i <= r; ++i) {
	            for(int j=r-i;j>0;j--){
	                System.out.print(" ");
	            }
	            for (int j = 1; j <= i; ++j) {
	              System.out.print("# ");
	            }
	            System.out.println();
	          }
	}

}
