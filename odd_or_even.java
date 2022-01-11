package sparkout;
import java.util.Scanner;
public class odd_or_even {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
    
    System.out.println("Enter a number:");
    Scanner number = new Scanner(System.in);
    int a = number.nextInt();
    if (a%2==0)
    {
      System.out.println("Given number is even");
    }
    else
    {
      System.out.println("Given number is odd");
	}
 }
}
