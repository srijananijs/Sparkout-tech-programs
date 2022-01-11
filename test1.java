
package sparkout;
import java.util.Scanner;

public class test1 {
  public static void main(String[] args) {
        Scanner myObj = new Scanner(System.in);
        System.out.println("Enter pramid size >");
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

      