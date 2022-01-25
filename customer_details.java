import java.util.Scanner;
class Customer {

	public String customerId;
	public String customerName;
	public long contactNumber;
	public String address;
    //creating a method
	public void displayCustomerDetails() {
		System.out.println("Displaying customer details \n***************************");
		System.out.println("Customer Id : " + customerId);
		System.out.println("Customer Name : " + customerName);
		System.out.println("Contact Number : " + contactNumber);
		System.out.println("Address : " + address);
		System.out.println();
	}

}

class Tester {

	public static void main(String[] args) {

		// Object creation
		Customer customer = new Customer();

		// Assigning values to the instance variables
		customer.customerId = "C101";
		customer.customerName = "Stephen Abram";
		customer.contactNumber = 7856341287L;
		customer.address = "D089, St. Louis Street, Springfield, 62729";

		// Displaying the customer details
		customer.displayCustomerDetails(); //invoking a method
		// Move the above statement immediately after the object creation
		// statement and observe the output

	}

}


//do while loop

public class Customer {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in); // Creating a Scanner object
		int totalCost = 0;
		char wantToAddFoodItem = 'N';
		int unitPrice = 10;
		int quantity = 1;
		do {
			totalCost = totalCost + (quantity * unitPrice);
			System.out.println("Order placed successfully!");
			System.out.println("Total cost: " + totalCost);
			System.out.println("Do you want to add more food items to the order? Y or N");
			String input = sc.next(); // Accepting input from the customer
			// Extracting first character from the input string
			wantToAddFoodItem = input.charAt(0);
		} while (wantToAddFoodItem == 'Y');
		System.out.println("Thank you for ordering the food! It will reach you shortly...");
	}
}

//NESTED FOR LOOP

class Numbers {
	public static void main(String[] args) {
		int rows = 10;
		for (int i = 1; i <= rows; ++i) {
			for (int j = 1; j <= i; ++j) {
                // print displays the text without adding a new line
				System.out.print(j + " "); 
			}
			System.out.println(""); // println displays the text along with a new line
		}
	}
}

/*Output
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 
1 2 3 4 5 6 
1 2 3 4 5 6 7 
1 2 3 4 5 6 7 8 
1 2 3 4 5 6 7 8 9 
1 2 3 4 5 6 7 8 9 10     */
