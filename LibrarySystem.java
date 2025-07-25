// Base class demonstrating encapsulation
abstract class Book {
    private String title;
    private String author;
    private String isbn;
    protected boolean isAvailable;
    
    // Constructor
    public Book(String title, String author, String isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        this.isAvailable = true;
    }
    
    // Getter methods (encapsulation)
    public String getTitle() {
        return title;
    }
    
    public String getAuthor() {
        return author;
    }
    
    public String getIsbn() {
        return isbn;
    }
    
    public boolean isAvailable() {
        return isAvailable;
    }
    
    // Setter methods
    public void setAvailable(boolean available) {
        this.isAvailable = available;
    }
    
    // Abstract method (to be implemented by subclasses)
    public abstract void displayInfo();
    
    // Method to borrow book
    public boolean borrowBook() {
        if (isAvailable) {
            isAvailable = false;
            return true;
        }
        return false;
    }
    
    // Method to return book
    public void returnBook() {
        isAvailable = true;
    }
}

// Subclass demonstrating inheritance
class FictionBook extends Book {
    private String genre;
    
    public FictionBook(String title, String author, String isbn, String genre) {
        super(title, author, isbn); // Call parent constructor
        this.genre = genre;
    }
    
    public String getGenre() {
        return genre;
    }
    
    // Implementation of abstract method (polymorphism)
    @Override
    public void displayInfo() {
        System.out.println("Fiction Book: " + getTitle());
        System.out.println("Author: " + getAuthor());
        System.out.println("ISBN: " + getIsbn());
        System.out.println("Genre: " + genre);
        System.out.println("Available: " + (isAvailable ? "Yes" : "No"));
        System.out.println("---");
    }
}

// Another subclass demonstrating inheritance
class TextBook extends Book {
    private String subject;
    private int edition;
    
    public TextBook(String title, String author, String isbn, String subject, int edition) {
        super(title, author, isbn);
        this.subject = subject;
        this.edition = edition;
    }
    
    public String getSubject() {
        return subject;
    }
    
    public int getEdition() {
        return edition;
    }
    
    // Implementation of abstract method (polymorphism)
    @Override
    public void displayInfo() {
        System.out.println("Textbook: " + getTitle());
        System.out.println("Author: " + getAuthor());
        System.out.println("ISBN: " + getIsbn());
        System.out.println("Subject: " + subject);
        System.out.println("Edition: " + edition);
        System.out.println("Available: " + (isAvailable ? "Yes" : "No"));
        System.out.println("---");
    }
}

// Library class demonstrating composition and aggregation
class Library {
    private String name;
    private Book[] books;
    private int bookCount;
    private static final int MAX_BOOKS = 100;
    
    public Library(String name) {
        this.name = name;
        this.books = new Book[MAX_BOOKS];
        this.bookCount = 0;
    }
    
    public void addBook(Book book) {
        if (bookCount < MAX_BOOKS) {
            books[bookCount] = book;
            bookCount++;
            System.out.println("Book added successfully: " + book.getTitle());
        } else {
            System.out.println("Library is full!");
        }
    }
    
    public void displayAllBooks() {
        System.out.println("\n=== " + name + " Library ===");
        if (bookCount == 0) {
            System.out.println("No books in the library.");
            return;
        }
        
        for (int i = 0; i < bookCount; i++) {
            books[i].displayInfo(); // Polymorphism in action
        }
    }
    
    public Book findBookByTitle(String title) {
        for (int i = 0; i < bookCount; i++) {
            if (books[i].getTitle().equalsIgnoreCase(title)) {
                return books[i];
            }
        }
        return null;
    }
    
    public void borrowBook(String title) {
        Book book = findBookByTitle(title);
        if (book != null) {
            if (book.borrowBook()) {
                System.out.println("Successfully borrowed: " + title);
            } else {
                System.out.println("Book is not available: " + title);
            }
        } else {
            System.out.println("Book not found: " + title);
        }
    }
    
    public void returnBook(String title) {
        Book book = findBookByTitle(title);
        if (book != null) {
            book.returnBook();
            System.out.println("Successfully returned: " + title);
        } else {
            System.out.println("Book not found: " + title);
        }
    }
}

// Main class demonstrating the usage
public class LibrarySystem {
    public static void main(String[] args) {
        // Create a library
        Library library = new Library("Central");
        
        // Create different types of books
        FictionBook fiction1 = new FictionBook(
            "The Great Gatsby", 
            "F. Scott Fitzgerald", 
            "978-0-7432-7356-5", 
            "Classic Literature"
        );
        
        FictionBook fiction2 = new FictionBook(
            "To Kill a Mockingbird", 
            "Harper Lee", 
            "978-0-06-112008-4", 
            "Social Drama"
        );
        
        TextBook textbook1 = new TextBook(
            "Introduction to Algorithms", 
            "Thomas H. Cormen", 
            "978-0-262-03384-8", 
            "Computer Science", 
            3
        );
        
        TextBook textbook2 = new TextBook(
            "Calculus: Early Transcendentals", 
            "James Stewart", 
            "978-1-285-74155-0", 
            "Mathematics", 
            8
        );
        
        // Add books to library
        library.addBook(fiction1);
        library.addBook(fiction2);
        library.addBook(textbook1);
        library.addBook(textbook2);
        
        // Display all books
        library.displayAllBooks();
        
        // Demonstrate borrowing and returning
        System.out.println("\n=== Library Operations ===");
        library.borrowBook("The Great Gatsby");
        library.borrowBook("Introduction to Algorithms");
        library.borrowBook("Nonexistent Book");
        
        System.out.println("\n=== Books after borrowing ===");
        library.displayAllBooks();
        
        library.returnBook("The Great Gatsby");
        
        System.out.println("\n=== Books after returning ===");
        library.displayAllBooks();
    }
}