package sparkout;
import java.util.Scanner;
public class positive_or_negative {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
    System.out.println("Enter a number:");
    Scanner mynum = new Scanner(System.in);
    int a = mynum.nextInt();
    if (a>0)
    {
    	 System.out.println("Given number is positive");
    }
    else
    {
    	 System.out.println("Given number is negative");
    }
	}

}
