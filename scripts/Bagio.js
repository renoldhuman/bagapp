import System.IO;

function ReadFile (Bag) {
    try {
        // Create an instance of StreamReader to read from a file.
        sr = new StreamReader("../itemfile.txt");
        // Read and display lines from the file until the end of the file is reached.
        line = sr.ReadLine();
        while (line != null) {
            if(line = "{"){
            	var name = sr.ReadLine();
            	name.trim();
            	var weight = Number.parseInt(sr.ReadLine());
            	var quantity = Number.parseInt(sr.ReadLine());
            	var newItem = new Item(name, weight, quantity);
            	Bag.addItemToBag(newItem);
            }
            line = sr.ReadLine();
        }
        sr.Close();
    }
    catch (e) {
        // Let the user know what went wrong.
        print("The file could not be read:");
        print(e.Message);
    }
}
