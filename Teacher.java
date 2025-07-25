public class Teacher {
    // Instance variables
    private String name;
    private String subject;
    private int yearsOfExperience;
    private double salary;
    
    // Default constructor
    public Teacher() {
        this("Unknown", "General", 0, 0.0); // calling another constructor using 'this'
    }
    
    // Constructor with name only
    public Teacher(String name) {
        this(name, "General", 0, 0.0); // calling another constructor using 'this'
    }
    
    // Constructor with name and subject
    public Teacher(String name, String subject) {
        this(name, subject, 0, 0.0); // calling another constructor using 'this'
    }
    
    // Full constructor
    public Teacher(String name, String subject, int yearsOfExperience, double salary) {
        this.name = name; // 'this' keyword to distinguish between parameter and instance variable
        this.subject = subject;
        this.yearsOfExperience = yearsOfExperience;
        this.salary = salary;
    }
    
    // Method overloading - teach() with different parameters
    public void teach() {
        System.out.println(this.name + " is teaching " + this.subject);
    }
    
    public void teach(String topic) {
        System.out.println(this.name + " is teaching " + topic + " in " + this.subject);
    }
    
    public void teach(String topic, int hours) {
        System.out.println(this.name + " is teaching " + topic + " for " + hours + " hours");
    }
    
    public void teach(String[] topics) {
        System.out.print(this.name + " is teaching multiple topics: ");
        for (int i = 0; i < topics.length; i++) {
            System.out.print(topics[i]);
            if (i < topics.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
    }
    
    // Method overloading - grade() with different parameter types
    public void grade(int score) {
        System.out.println("Teacher " + this.name + " graded a test with score: " + score);
    }
    
    public void grade(double score) {
        System.out.println("Teacher " + this.name + " graded an assignment with score: " + score);
    }
    
    public void grade(String letterGrade) {
        System.out.println("Teacher " + this.name + " assigned letter grade: " + letterGrade);
    }
    
    // Method that calls other methods
    public void conductClass() {
        System.out.println("\n--- " + this.name + " is conducting a class ---");
        this.teach(); // calling teach method using 'this'
        this.teach("Advanced Topics", 2); // method overloading call
        this.grade(85); // calling grade method
        this.takeAttendance(); // calling another method
    }
    
    // Additional method
    public void takeAttendance() {
        System.out.println(this.name + " is taking attendance for " + this.subject + " class");
    }
    
    // Method that returns 'this' for method chaining
    public Teacher setName(String name) {
        this.name = name;
        return this; // returning 'this' for method chaining
    }
    
    public Teacher setSubject(String subject) {
        this.subject = subject;
        return this;
    }
    
    public Teacher setExperience(int years) {
        this.yearsOfExperience = years;
        return this;
    }
    
    // Getter methods
    public String getName() {
        return this.name;
    }
    
    public String getSubject() {
        return this.subject;
    }
    
    public int getYearsOfExperience() {
        return this.yearsOfExperience;
    }
    
    public double getSalary() {
        return this.salary;
    }
    
    // toString method using 'this'
    @Override
    public String toString() {
        return "Teacher{" +
                "name='" + this.name + '\'' +
                ", subject='" + this.subject + '\'' +
                ", yearsOfExperience=" + this.yearsOfExperience +
                ", salary=" + this.salary +
                '}';
    }
    
    // Main method to demonstrate the class
    public static void main(String[] args) {
        System.out.println("=== Java OOP Demo with Teacher Class ===\n");
        
        // Creating objects using different constructors
        Teacher teacher1 = new Teacher();
        Teacher teacher2 = new Teacher("Mr. Smith");
        Teacher teacher3 = new Teacher("Ms. Johnson", "Mathematics");
        Teacher teacher4 = new Teacher("Dr. Brown", "Physics", 10, 75000.0);
        
        System.out.println("Teachers created:");
        System.out.println("1. " + teacher1);
        System.out.println("2. " + teacher2);
        System.out.println("3. " + teacher3);
        System.out.println("4. " + teacher4);
        
        // Demonstrating method overloading
        System.out.println("\n=== Method Overloading Demo ===");
        teacher4.teach(); // No parameters
        teacher4.teach("Quantum Mechanics"); // String parameter
        teacher4.teach("Thermodynamics", 3); // String and int parameters
        
        String[] topics = {"Kinematics", "Dynamics", "Waves"};
        teacher4.teach(topics); // Array parameter
        
        // Method overloading with grade()
        teacher4.grade(92); // int parameter
        teacher4.grade(88.5); // double parameter
        teacher4.grade("A+"); // String parameter
        
        // Demonstrating method calling
        teacher3.conductClass();
        
        // Method chaining using 'this'
        System.out.println("\n=== Method Chaining Demo ===");
        Teacher teacher5 = new Teacher().setName("Prof. Wilson")
                                      .setSubject("Computer Science")
                                      .setExperience(8);
        System.out.println("Chained teacher: " + teacher5);
        
        // Demonstrating 'this' in method calls
        System.out.println("\n=== Final Demo ===");
        teacher5.conductClass();
    }
}