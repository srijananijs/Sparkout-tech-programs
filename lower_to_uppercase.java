package sparkout;
import java.util.Scanner;
public class lower_to_uppercase{
    public static void main(String[] args) {
        Scanner mywork = new Scanner(System.in);
        int userinput = mywork.nextInt();
        
        
        for(int i=0;i<=userinput;i++)
        {
            String text = mywork.nextLine();
            String word = text.toUpperCase();
            System.out.println(word);
        }

        
    }
}

