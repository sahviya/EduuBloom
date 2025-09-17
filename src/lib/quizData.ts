// Example quiz data for subtopics. Expand as needed.
// Quiz data now supports difficulty levels: easy, medium, hard
export type QuizDifficulty = "easy" | "medium" | "hard";
export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
  difficulty: QuizDifficulty;
};

// Export all quiz questions as a single object
export const quizQuestions: Record<string, QuizQuestion[]> = {
  // --- C Basics ---
  "C-Basics": [
    { question: "Who developed the C language?", options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"], answer: 0, explanation: "Dennis Ritchie developed C.", difficulty: "easy" },
    { question: "Which symbol is used to end a statement in C?", options: [";", ":", ".", ","], answer: 0, explanation: "; ends a statement.", difficulty: "easy" },
    { question: "Which of these is a valid variable name?", options: ["_var", "2var", "var-2", "var 2"], answer: 0, explanation: "_var is valid.", difficulty: "easy" },
    { question: "Which function is used to print output?", options: ["printf", "print", "cout", "echo"], answer: 0, explanation: "printf prints output.", difficulty: "easy" },
    { question: "Which header file is needed for printf?", options: ["stdio.h", "stdlib.h", "string.h", "math.h"], answer: 0, explanation: "stdio.h for printf.", difficulty: "easy" },
    { question: "What is the extension for C source files?", options: [".c", ".cpp", ".java", ".py"], answer: 0, explanation: ".c is for C.", difficulty: "easy" },
    { question: "Which of these is NOT a C keyword?", options: ["main", "int", "return", "if"], answer: 0, explanation: "main is not a keyword.", difficulty: "medium" },
    { question: "Which of these is used for comments in C?", options: ["//", "/* */", "Both", "#"], answer: 2, explanation: "Both // and /* */ are used.", difficulty: "easy" },
    { question: "Which of these is NOT a valid data type?", options: ["int", "float", "real", "char"], answer: 2, explanation: "real is not a C type.", difficulty: "medium" },
    { question: "Which function is the entry point?", options: ["main", "start", "init", "entry"], answer: 0, explanation: "main is entry point.", difficulty: "easy" },
    { question: "Which of these is NOT a valid operator in C?", options: ["+", "-", "*", "^"], answer: 3, explanation: "^ is not a valid operator in C.", difficulty: "medium" },
    { question: "Which of these is used to declare a constant?", options: ["const", "constant", "define", "static"], answer: 0, explanation: "const is used for constants.", difficulty: "medium" },
  ],
  // --- C Pointers ---
  "C-Pointers": [
    { question: "What is a pointer?", options: ["Variable storing address", "Variable storing value", "Function", "Array"], answer: 0, explanation: "Pointer stores address.", difficulty: "easy" },
    { question: "Which symbol is used for pointer declaration?", options: ["*", "&", "#", "%"], answer: 0, explanation: "* declares pointer.", difficulty: "easy" },
    { question: "Which operator gives address of variable?", options: ["&", "*", "#", "%"], answer: 0, explanation: "& gives address.", difficulty: "easy" },
    { question: "What is the value of a null pointer?", options: ["0", "1", "-1", "None"], answer: 0, explanation: "Null pointer is 0.", difficulty: "easy" },
    { question: "Which of these is NOT a pointer type?", options: ["void*", "int*", "float*", "real*"], answer: 3, explanation: "real* is not valid.", difficulty: "medium" },
    { question: "Which of these is used to access value at address?", options: ["*", "&", "#", "%"], answer: 0, explanation: "* dereferences pointer.", difficulty: "easy" },
    { question: "Which of these is NOT a valid pointer operation?", options: ["Addition", "Subtraction", "Multiplication", "Comparison"], answer: 2, explanation: "Multiplication not valid.", difficulty: "medium" },
    { question: "Which of these is true for pointer arithmetic?", options: ["Depends on data type", "Always +1", "Always +2", "Always +4"], answer: 0, explanation: "Depends on type size.", difficulty: "medium" },
    { question: "Which of these is NOT a pointer application?", options: ["Dynamic memory", "Function arguments", "Array access", "Sorting"], answer: 3, explanation: "Sorting is not pointer-specific.", difficulty: "medium" },
    { question: "Which of these is true for pointer to pointer?", options: ["Stores address of pointer", "Stores value", "Stores array", "Stores function"], answer: 0, explanation: "Pointer to pointer stores address of pointer.", difficulty: "medium" },
    { question: "Which of these is NOT a valid pointer assignment?", options: ["int *p = NULL;", "int *p = &x;", "int p = &x;", "int *p;"], answer: 2, explanation: "int p = &x; is not valid pointer assignment.", difficulty: "medium" },
    { question: "Which of these is used to pass address to a function?", options: ["Pointer", "Array", "Variable", "Constant"], answer: 0, explanation: "Pointers are used to pass addresses.", difficulty: "medium" },
  ],
  // --- C File Handling ---
  "C-File Handling": [
    { question: "What is file handling?", options: ["Reading/writing files", "Sorting files", "Searching files", "Deleting files"], answer: 0, explanation: "File handling = read/write.", difficulty: "easy" },
    { question: "Which function opens a file?", options: ["fopen", "open", "read", "write"], answer: 0, explanation: "fopen opens file.", difficulty: "easy" },
    { question: "Which of these is NOT a file mode?", options: ["r", "w", "x", "z"], answer: 3, explanation: "'z' is not a mode.", difficulty: "medium" },
    { question: "Which of these is true for reading a file?", options: ["fopen with 'r'", "fopen with 'w'", "fopen with 'x'", "fopen with 'z'"], answer: 0, explanation: "'r' = read mode.", difficulty: "easy" },
    { question: "Which of these is NOT a file function?", options: ["fread", "fwrite", "fclose", "fsort"], answer: 3, explanation: "fsort is not a file function.", difficulty: "medium" },
    { question: "Which of these is true about file pointer?", options: ["Points to current position", "Points to start", "Points to end", "Points to file name"], answer: 0, explanation: "Pointer = current position.", difficulty: "easy" },
    { question: "Which of these is NOT a valid file operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a file operation.", difficulty: "medium" },
    { question: "Which of these is true about file closing?", options: ["fclose() closes file", "fopen() closes file", "fread() closes file", "fwrite() closes file"], answer: 0, explanation: "fclose() closes file.", difficulty: "medium" },
      {
        question: "What is the time complexity of accessing an element in an array by index?",
        options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
        answer: 0,
        explanation: "Accessing by index in an array is O(1).",
        difficulty: "easy"
      },
      {
        question: "Which of the following is a fixed-size data structure?",
        options: ["Array", "Linked List", "Stack", "Queue"],
        answer: 0,
        explanation: "Arrays have fixed size.",
        difficulty: "easy"
      },
      {
        question: "Which operation is fastest in an array?",
        options: ["Random access", "Insertion at start", "Deletion at end", "Search"],
        answer: 0,
        explanation: "Random access is O(1) in arrays.",
        difficulty: "easy"
      },
    { question: "Which of these is used to access value at address?", options: ["*", "&", "#", "%"], answer: 0, explanation: "* dereferences pointer.", difficulty: "easy" },
    { question: "Which of these is NOT a valid pointer operation?", options: ["Addition", "Subtraction", "Multiplication", "Comparison"], answer: 2, explanation: "Multiplication not valid.", difficulty: "medium" },
    { question: "Which of these is true for pointer arithmetic?", options: ["Depends on data type", "Always +1", "Always +2", "Always +4"], answer: 0, explanation: "Depends on type size.", difficulty: "medium" },
    { question: "Which of these is NOT a pointer application?", options: ["Dynamic memory", "Function arguments", "Array access", "Sorting"], answer: 3, explanation: "Sorting is not pointer-specific.", difficulty: "medium" },
    { question: "Which of these is true for pointer to pointer?", options: ["Stores address of pointer", "Stores value", "Stores array", "Stores function"], answer: 0, explanation: "Pointer to pointer stores address of pointer.", difficulty: "medium" },
  ],
  "C-Structures": [
    { question: "What is a structure?", options: ["User-defined type", "Built-in type", "Function", "Array"], answer: 0, explanation: "Structure is user-defined.", difficulty: "easy" },
    { question: "Which keyword defines a structure?", options: ["struct", "structure", "define", "class"], answer: 0, explanation: "struct defines structure.", difficulty: "easy" },
    { question: "Which of these is NOT a structure property?", options: ["Members", "Size", "Type", "Return value"], answer: 3, explanation: "Return value is not a property.", difficulty: "medium" },
    { question: "Which of these is true for structure members?", options: ["Can be different types", "Must be same type", "Must be int", "Must be char"], answer: 0, explanation: "Members can be different types.", difficulty: "easy" },
    { question: "Which of these is NOT a valid structure declaration?", options: ["struct S { int x; };", "struct S s;", "S s;", "struct S;"], answer: 3, explanation: "struct S; is incomplete.", difficulty: "medium" },
    { question: "Which of these is used to access structure member?", options: [".", ",", ":", ";"], answer: 0, explanation: ". accesses member.", difficulty: "easy" },
    { question: "Which of these is NOT a valid structure operation?", options: ["Assignment", "Comparison", "Addition", "Access"], answer: 2, explanation: "Addition not valid.", difficulty: "medium" },
    { question: "Which of these is true for nested structures?", options: ["Structure inside structure", "Structure inside array", "Array inside structure", "None"], answer: 0, explanation: "Nested = structure inside structure.", difficulty: "medium" },
    { question: "Which of these is NOT a structure application?", options: ["Database records", "Function arguments", "Array access", "Linked lists"], answer: 2, explanation: "Array access is not structure-specific.", difficulty: "medium" },
    { question: "Which of these is true for structure padding?", options: ["Extra bytes for alignment", "No extra bytes", "Always 1 byte", "Always 4 bytes"], answer: 0, explanation: "Padding = extra bytes for alignment.", difficulty: "medium" },
  ],
  "C-File I/O": [
    { question: "What is file I/O?", options: ["Reading/writing files", "Sorting files", "Searching files", "Deleting files"], answer: 0, explanation: "File I/O = read/write.", difficulty: "easy" },
    { question: "Which function opens a file?", options: ["fopen", "open", "read", "write"], answer: 0, explanation: "fopen opens file.", difficulty: "easy" },
    { question: "Which of these is NOT a file mode?", options: ["r", "w", "x", "z"], answer: 3, explanation: "'z' is not a mode.", difficulty: "medium" },
    { question: "Which of these is true for reading a file?", options: ["fopen with 'r'", "fopen with 'w'", "fopen with 'x'", "fopen with 'z'"], answer: 0, explanation: "'r' = read mode.", difficulty: "easy" },
    { question: "Which of these is NOT a file function?", options: ["fread", "fwrite", "fclose", "fsort"], answer: 3, explanation: "fsort is not a file function.", difficulty: "medium" },
    { question: "Which of these is true about file pointer?", options: ["Points to current position", "Points to start", "Points to end", "Points to file name"], answer: 0, explanation: "Pointer = current position.", difficulty: "easy" },
    { question: "Which of these is NOT a valid file operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a file operation.", difficulty: "medium" },
    { question: "Which of these is true about file closing?", options: ["fclose() closes file", "fopen() closes file", "fread() closes file", "fwrite() closes file"], answer: 0, explanation: "fclose() closes file.", difficulty: "medium" },
    { question: "Which of these is NOT a valid file mode?", options: ["r", "w", "x", "z"], answer: 3, explanation: "'z' is not a mode.", difficulty: "medium" },
    { question: "Which of these is true about file reading?", options: ["fread() reads file", "fwrite() reads file", "fclose() reads file", "fsort() reads file"], answer: 0, explanation: "fread() reads file.", difficulty: "medium" },
  ],
  "C-Memory Management": [
    { question: "What is dynamic memory?", options: ["Allocated at runtime", "Allocated at compile time", "Never allocated", "Always static"], answer: 0, explanation: "Dynamic = runtime.", difficulty: "easy" },
    { question: "Which function allocates memory?", options: ["malloc", "free", "printf", "scanf"], answer: 0, explanation: "malloc allocates.", difficulty: "easy" },
    { question: "Which function frees memory?", options: ["free", "malloc", "printf", "scanf"], answer: 0, explanation: "free frees memory.", difficulty: "easy" },
    { question: "Which of these is NOT a memory function?", options: ["malloc", "calloc", "realloc", "falloc"], answer: 3, explanation: "falloc is not a function.", difficulty: "medium" },
    { question: "Which of these is true for calloc?", options: ["Allocates and zeroes", "Allocates only", "Frees memory", "Prints output"], answer: 0, explanation: "calloc allocates and zeroes.", difficulty: "easy" },
    { question: "Which of these is NOT a valid memory operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a memory operation.", difficulty: "medium" },
    { question: "Which of these is true for realloc?", options: ["Resizes memory", "Allocates memory", "Frees memory", "Prints output"], answer: 0, explanation: "realloc resizes.", difficulty: "medium" },
    { question: "Which of these is NOT a valid memory function?", options: ["malloc", "calloc", "realloc", "falloc"], answer: 3, explanation: "falloc is not a function.", difficulty: "medium" },
    { question: "Which of these is true for memory leak?", options: ["Memory not freed", "Memory always freed", "Memory never allocated", "Memory always static"], answer: 0, explanation: "Leak = not freed.", difficulty: "medium" },
    { question: "Which of these is NOT a valid memory management property?", options: ["Allocation", "Deallocation", "Sorting", "Resizing"], answer: 2, explanation: "Sorting is not a property.", difficulty: "medium" },
  ],
  // --- DSA Arrays ---
  "DSA-Arrays": [
    {
      question: "What is the time complexity of accessing an element in an array by index?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      answer: 0,
      explanation: "Accessing by index in an array is O(1).",
      difficulty: "easy"
    },
    {
      question: "Which of the following is a fixed-size data structure?",
      options: ["Array", "Linked List", "Stack", "Queue"],
      answer: 0,
      explanation: "Arrays have fixed size.",
      difficulty: "easy"
    },
    {
      question: "Which operation is fastest in an array?",
      options: ["Random access", "Insertion at start", "Deletion at end", "Search"],
      answer: 0,
      explanation: "Random access is O(1) in arrays.",
      difficulty: "easy"
    },
    {
      question: "What is the index of the first element in a zero-based array?",
      options: ["0", "1", "-1", "Depends on language"],
      answer: 0,
      explanation: "Zero-based arrays start at index 0.",
      difficulty: "easy"
    },
    {
      question: "Which of these is NOT a valid array operation?",
      options: ["Insert at middle", "Delete at end", "Resize dynamically", "Access by index"],
      answer: 2,
      explanation: "Arrays are not dynamically resized (unless using dynamic arrays).",
      difficulty: "medium"
    },
    {
      question: "What is the time complexity of inserting at the start of an array?",
      options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"],
      answer: 0,
      explanation: "All elements must be shifted.",
      difficulty: "medium"
    },
    {
      question: "Which of these best describes an array?",
      options: ["Homogeneous elements", "Heterogeneous elements", "Sorted elements", "Immutable elements"],
      answer: 0,
      explanation: "Arrays store homogeneous elements.",
      difficulty: "easy"
    },
    {
      question: "Which of these is a disadvantage of arrays?",
      options: ["Fixed size", "Random access", "Efficient traversal", "Contiguous memory"],
      answer: 0,
      explanation: "Arrays have fixed size.",
      difficulty: "medium"
    },
    {
      question: "Which of these is true about array memory?",
      options: ["Contiguous", "Non-contiguous", "Linked", "Random"],
      answer: 0,
      explanation: "Arrays use contiguous memory.",
      difficulty: "easy"
    },
    {
      question: "Which of these is NOT a valid array index in a 5-element array?",
      options: ["0", "4", "5", "3"],
      answer: 2,
      explanation: "Valid indices are 0 to 4.",
      difficulty: "easy"
    }
  ],
  // --- DSA Linked List ---
  "DSA-Linked List": [
    { question: "What is a linked list?", options: ["A linear data structure", "A type of array", "A sorting algorithm", "A search algorithm"], answer: 0, explanation: "A linked list is a linear data structure.", difficulty: "easy" },
    { question: "Which pointer points to the first node in a linked list?", options: ["Head", "Tail", "Prev", "Next"], answer: 0, explanation: "Head points to the first node.", difficulty: "easy" },
    { question: "What is the time complexity to insert at the beginning of a singly linked list?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: 0, explanation: "Insert at head is O(1).", difficulty: "easy" },
    { question: "Which of these is NOT a type of linked list?", options: ["Singly", "Doubly", "Circular", "Binary"], answer: 3, explanation: "Binary is not a linked list type.", difficulty: "medium" },
    { question: "What does the next pointer of the last node point to in a singly linked list?", options: ["null", "head", "tail", "itself"], answer: 0, explanation: "It points to null.", difficulty: "easy" },
    { question: "Which operation is slowest in a singly linked list?", options: ["Access by index", "Insert at head", "Delete at head", "Traversal"], answer: 0, explanation: "Access by index is O(n).", difficulty: "medium" },
    { question: "Which node has both next and prev pointers?", options: ["Doubly linked list node", "Singly linked list node", "Circular node", "Array node"], answer: 0, explanation: "Doubly linked list nodes have both.", difficulty: "easy" },
    { question: "What is the time complexity to delete the last node in a singly linked list?", options: ["O(n)", "O(1)", "O(log n)", "O(n log n)"], answer: 0, explanation: "You must traverse to the end.", difficulty: "medium" },
    { question: "Which of these is true for a circular linked list?", options: ["Last node points to head", "First node points to null", "All nodes point to null", "No head node"], answer: 0, explanation: "Last node points to head.", difficulty: "medium" },
    { question: "Which of these is NOT an advantage of linked lists?", options: ["Dynamic size", "Efficient random access", "Easy insertion/deletion", "No memory waste"], answer: 1, explanation: "Random access is not efficient.", difficulty: "medium" },
  ],
  // --- DSA Strings ---
  "DSA-Strings": [
    { question: "What is a string?", options: ["A sequence of characters", "A number", "A boolean", "A data structure"], answer: 0, explanation: "A string is a sequence of characters.", difficulty: "easy" },
    { question: "Which function returns the length of a string in C?", options: ["strlen", "strcpy", "strcat", "strcmp"], answer: 0, explanation: "strlen returns length.", difficulty: "easy" },
    { question: "Which of these is NOT a string operation?", options: ["Concatenation", "Reversal", "Sorting", "Multiplication"], answer: 3, explanation: "Multiplication is not a string operation.", difficulty: "medium" },
    { question: "Which of these is an immutable string type in Python?", options: ["str", "list", "bytearray", "dict"], answer: 0, explanation: "str is immutable.", difficulty: "easy" },
    { question: "Which of these is used to compare two strings in Java?", options: ["equals()", "==", "compare()", "cmp()"], answer: 0, explanation: "equals() compares strings in Java.", difficulty: "medium" },
    { question: "Which of these is NOT a valid string method in Python?", options: ["upper()", "split()", "push()", "replace()"], answer: 2, explanation: "push() is not a string method.", difficulty: "medium" },
    { question: "Which of these is used to join strings in JavaScript?", options: ["+", "join()", "concat()", "All of these"], answer: 3, explanation: "All can be used to join strings.", difficulty: "easy" },
    { question: "Which of these is true about string indexing?", options: ["Starts at 0", "Starts at 1", "Negative only", "None"], answer: 0, explanation: "Indexing starts at 0.", difficulty: "easy" },
    { question: "Which of these is NOT a string encoding?", options: ["UTF-8", "ASCII", "BCD", "UTF-16"], answer: 2, explanation: "BCD is not a string encoding.", difficulty: "medium" },
    { question: "Which of these is true about string length in C?", options: ["Ends with null char", "No null char", "Always 10", "None"], answer: 0, explanation: "C strings end with null char.", difficulty: "medium" },
  ],
  // --- DSA Hashmaps ---
  "DSA-Hashmaps": [
    { question: "What is a hashmap?", options: ["Key-value store", "Array", "Stack", "Queue"], answer: 0, explanation: "Hashmaps store key-value pairs.", difficulty: "easy" },
    { question: "Which operation is fastest in a hashmap?", options: ["Lookup", "Insertion", "Deletion", "All of these"], answer: 3, explanation: "All are O(1) on average.", difficulty: "easy" },
    { question: "Which of these is NOT a collision resolution technique?", options: ["Chaining", "Open addressing", "Sorting", "Double hashing"], answer: 2, explanation: "Sorting is not used for collisions.", difficulty: "medium" },
    { question: "Which of these is a valid hashmap key?", options: ["String", "Number", "Object", "All of these"], answer: 3, explanation: "All can be keys in some languages.", difficulty: "medium" },
    { question: "What is the average time complexity for lookup in a hashmap?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: 0, explanation: "Average is O(1).", difficulty: "easy" },
    { question: "Which of these is NOT a hashmap application?", options: ["Caching", "Counting", "Sorting", "Indexing"], answer: 2, explanation: "Sorting is not a hashmap use.", difficulty: "medium" },
    { question: "Which of these is true about hash functions?", options: ["Should be fast", "Should be unique", "Should be deterministic", "All of these"], answer: 3, explanation: "All are true.", difficulty: "easy" },
    { question: "Which of these is NOT a property of a good hash function?", options: ["Uniform distribution", "Deterministic", "Slow", "Low collision"], answer: 2, explanation: "Hash functions should be fast.", difficulty: "medium" },
    { question: "Which of these is true about hashmap resizing?", options: ["Increases capacity", "Decreases collisions", "May rehash keys", "All of these"], answer: 3, explanation: "All are true.", difficulty: "medium" },
    { question: "Which of these is NOT a valid hashmap operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a hashmap operation.", difficulty: "medium" },
  ],
  // --- DSA Queues ---
  "DSA-Queues": [
    { question: "What is a queue?", options: ["FIFO structure", "LIFO structure", "Random access", "Tree"], answer: 0, explanation: "Queue is FIFO.", difficulty: "easy" },
    { question: "Which operation removes an item from a queue?", options: ["Dequeue", "Enqueue", "Push", "Pop"], answer: 0, explanation: "Dequeue removes.", difficulty: "easy" },
    { question: "Which operation adds an item to a queue?", options: ["Enqueue", "Dequeue", "Push", "Pop"], answer: 0, explanation: "Enqueue adds.", difficulty: "easy" },
    { question: "What is the time complexity of enqueue in a queue?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: 0, explanation: "Enqueue is O(1).", difficulty: "easy" },
    { question: "Which of these is NOT a type of queue?", options: ["Circular", "Priority", "Double-ended", "Binary"], answer: 3, explanation: "Binary is not a queue type.", difficulty: "medium" },
    { question: "Which of these is true for a circular queue?", options: ["Last points to first", "First points to null", "All nodes point to null", "No head node"], answer: 0, explanation: "Last points to first.", difficulty: "medium" },
    { question: "Which of these is NOT a queue application?", options: ["Scheduling", "Buffering", "Recursion", "Printing"], answer: 2, explanation: "Recursion uses stack.", difficulty: "medium" },
    { question: "Which of these is true about queue overflow?", options: ["Occurs when full", "Occurs when empty", "Occurs when inserting", "Occurs when deleting"], answer: 0, explanation: "Overflow when full.", difficulty: "medium" },
    { question: "Which of these is NOT a valid queue operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a queue operation.", difficulty: "medium" },
    { question: "Which of these is true about queue underflow?", options: ["Occurs when empty", "Occurs when full", "Occurs when inserting", "Occurs when deleting"], answer: 0, explanation: "Underflow when empty.", difficulty: "medium" },
  ],
  // --- DSA Stacks ---
  "DSA-Stacks": [
    { question: "What is a stack?", options: ["LIFO structure", "FIFO structure", "Random access", "Tree"], answer: 0, explanation: "Stack is LIFO.", difficulty: "easy" },
    { question: "Which operation removes an item from a stack?", options: ["Pop", "Push", "Enqueue", "Dequeue"], answer: 0, explanation: "Pop removes.", difficulty: "easy" },
    { question: "Which operation adds an item to a stack?", options: ["Push", "Pop", "Enqueue", "Dequeue"], answer: 0, explanation: "Push adds.", difficulty: "easy" },
    { question: "What is the time complexity of push in a stack?", options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"], answer: 0, explanation: "Push is O(1).", difficulty: "easy" },
    { question: "Which of these is NOT a type of stack?", options: ["Array", "Linked", "Circular", "Binary"], answer: 3, explanation: "Binary is not a stack type.", difficulty: "medium" },
    { question: "Which of these is true for a stack?", options: ["Top points to last", "Bottom points to null", "All nodes point to null", "No head node"], answer: 0, explanation: "Top points to last.", difficulty: "medium" },
    { question: "Which of these is NOT a stack application?", options: ["Recursion", "Buffering", "Scheduling", "Printing"], answer: 2, explanation: "Scheduling uses queue.", difficulty: "medium" },
    { question: "Which of these is true about stack overflow?", options: ["Occurs when full", "Occurs when empty", "Occurs when inserting", "Occurs when deleting"], answer: 0, explanation: "Overflow when full.", difficulty: "medium" },
    { question: "Which of these is NOT a valid stack operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a stack operation.", difficulty: "medium" },
    { question: "Which of these is true about stack underflow?", options: ["Occurs when empty", "Occurs when full", "Occurs when inserting", "Occurs when deleting"], answer: 0, explanation: "Underflow when empty.", difficulty: "medium" },
  ],
  // --- DSA Trees ---
  "DSA-Trees": [
    { question: "What is a tree?", options: ["Hierarchical structure", "Linear structure", "Circular structure", "Random structure"], answer: 0, explanation: "Tree is hierarchical.", difficulty: "easy" },
    { question: "Which node is at the top of a tree?", options: ["Root", "Leaf", "Child", "Parent"], answer: 0, explanation: "Root is at the top.", difficulty: "easy" },
    { question: "What is a leaf node?", options: ["Node with no children", "Node with one child", "Node with two children", "Node with parent"], answer: 0, explanation: "Leaf has no children.", difficulty: "easy" },
    { question: "Which of these is NOT a tree traversal?", options: ["Inorder", "Preorder", "Postorder", "Randomorder"], answer: 3, explanation: "Randomorder is not valid.", difficulty: "medium" },
    { question: "Which of these is true for a binary tree?", options: ["Each node has at most 2 children", "Each node has at most 3 children", "Each node has at most 4 children", "Each node has at most 5 children"], answer: 0, explanation: "Binary tree: max 2 children.", difficulty: "easy" },
    { question: "Which of these is NOT a binary tree type?", options: ["Full", "Complete", "Partial", "Perfect"], answer: 2, explanation: "Partial is not a type.", difficulty: "medium" },
    { question: "Which of these is true about tree height?", options: ["Longest path from root to leaf", "Shortest path from root to leaf", "Number of nodes", "Number of leaves"], answer: 0, explanation: "Height is longest path.", difficulty: "medium" },
    { question: "Which of these is NOT a tree application?", options: ["Searching", "Sorting", "Indexing", "Networking"], answer: 1, explanation: "Sorting is not a tree application.", difficulty: "medium" },
    { question: "Which of these is true about tree depth?", options: ["Distance from root", "Distance from leaf", "Number of nodes", "Number of leaves"], answer: 0, explanation: "Depth is distance from root.", difficulty: "medium" },
    { question: "Which of these is NOT a valid tree operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a tree operation.", difficulty: "medium" },
  ],
  // --- DSA Graphs ---
  "DSA-Graphs": [
    { question: "What is a graph?", options: ["Collection of nodes and edges", "Linear structure", "Circular structure", "Random structure"], answer: 0, explanation: "Graph: nodes and edges.", difficulty: "easy" },
    { question: "What is a vertex in a graph?", options: ["Node", "Edge", "Path", "Cycle"], answer: 0, explanation: "Vertex = node.", difficulty: "easy" },
    { question: "What is an edge in a graph?", options: ["Connection between nodes", "Node", "Path", "Cycle"], answer: 0, explanation: "Edge = connection.", difficulty: "easy" },
    { question: "Which of these is NOT a graph type?", options: ["Directed", "Undirected", "Weighted", "Partial"], answer: 3, explanation: "Partial is not a type.", difficulty: "medium" },
    { question: "Which of these is true for a directed graph?", options: ["Edges have direction", "Edges have no direction", "Nodes have direction", "Nodes have no direction"], answer: 0, explanation: "Directed: edges have direction.", difficulty: "easy" },
    { question: "Which of these is NOT a graph traversal?", options: ["BFS", "DFS", "Random", "All"], answer: 2, explanation: "Random is not valid.", difficulty: "medium" },
    { question: "Which of these is true about graph cycles?", options: ["Path that starts and ends at same node", "Path that never repeats", "Path with no edges", "Path with all nodes"], answer: 0, explanation: "Cycle: start/end same node.", difficulty: "medium" },
    { question: "Which of these is NOT a graph application?", options: ["Networking", "Social networks", "Sorting", "Pathfinding"], answer: 2, explanation: "Sorting is not a graph application.", difficulty: "medium" },
    { question: "Which of these is true about graph connectivity?", options: ["All nodes reachable", "Some nodes unreachable", "No nodes reachable", "All nodes isolated"], answer: 0, explanation: "Connected: all nodes reachable.", difficulty: "medium" },
    { question: "Which of these is NOT a valid graph operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a graph operation.", difficulty: "medium" },
  ],
  // --- DSA Recursion ---
  "DSA-Recursion": [
    { question: "What is recursion?", options: ["Function calling itself", "Loop", "Conditional", "Array"], answer: 0, explanation: "Recursion: function calls itself.", difficulty: "easy" },
    { question: "Which of these is needed for recursion?", options: ["Base case", "Loop", "Array", "Stack"], answer: 0, explanation: "Base case needed.", difficulty: "easy" },
    { question: "Which of these is NOT a recursion application?", options: ["Factorial", "Fibonacci", "Sorting", "Printing"], answer: 3, explanation: "Printing is not a recursion application.", difficulty: "medium" },
    { question: "Which of these is true for recursion?", options: ["Can be infinite", "Always finite", "Never ends", "Never starts"], answer: 0, explanation: "Recursion can be infinite if no base case.", difficulty: "medium" },
    { question: "Which of these is NOT a recursion type?", options: ["Direct", "Indirect", "Partial", "Tail"], answer: 2, explanation: "Partial is not a type.", difficulty: "medium" },
    { question: "Which of these is true about stack in recursion?", options: ["Used to store calls", "Not used", "Used for arrays", "Used for loops"], answer: 0, explanation: "Stack stores calls.", difficulty: "medium" },
    { question: "Which of these is NOT a recursion property?", options: ["Base case", "Recursive call", "Loop", "Stack"], answer: 2, explanation: "Loop is not a recursion property.", difficulty: "medium" },
    { question: "Which of these is true about recursion depth?", options: ["Limited by stack", "Unlimited", "Limited by array", "Limited by loop"], answer: 0, explanation: "Stack limits depth.", difficulty: "medium" },
    { question: "Which of these is NOT a valid recursion operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a recursion operation.", difficulty: "medium" },
    { question: "Which of these is true about recursion termination?", options: ["Base case reached", "Never ends", "Always ends", "Never starts"], answer: 0, explanation: "Base case terminates recursion.", difficulty: "medium" },
  ],
  // --- DSA Sorting ---
  "DSA-Sorting": [
    { question: "What is sorting?", options: ["Arranging in order", "Searching", "Deleting", "Inserting"], answer: 0, explanation: "Sorting arranges data.", difficulty: "easy" },
    { question: "Which of these is NOT a sorting algorithm?", options: ["Bubble", "Merge", "Quick", "Hash"], answer: 3, explanation: "Hash is not a sorting algorithm.", difficulty: "medium" },
    { question: "Which of these is true for bubble sort?", options: ["Repeatedly swaps adjacent", "Divides and conquers", "Uses heap", "Uses stack"], answer: 0, explanation: "Bubble sort swaps adjacent.", difficulty: "easy" },
    { question: "Which of these is NOT a stable sort?", options: ["Bubble", "Merge", "Quick", "Insertion"], answer: 2, explanation: "Quick sort is not stable.", difficulty: "medium" },
    { question: "Which of these is true for merge sort?", options: ["Divide and conquer", "Repeatedly swaps", "Uses heap", "Uses stack"], answer: 0, explanation: "Merge sort divides and conquers.", difficulty: "easy" },
    { question: "Which of these is NOT a comparison sort?", options: ["Counting", "Bubble", "Merge", "Quick"], answer: 0, explanation: "Counting sort is not comparison-based.", difficulty: "medium" },
    { question: "Which of these is true about quick sort?", options: ["Uses pivot", "Uses heap", "Uses stack", "Uses queue"], answer: 0, explanation: "Quick sort uses pivot.", difficulty: "medium" },
    { question: "Which of these is NOT a sorting property?", options: ["Stability", "Time complexity", "Space complexity", "Recursion"], answer: 3, explanation: "Recursion is not a property.", difficulty: "medium" },
    { question: "Which of these is true about heap sort?", options: ["Uses heap", "Uses stack", "Uses queue", "Uses array"], answer: 0, explanation: "Heap sort uses heap.", difficulty: "medium" },
    { question: "Which of these is NOT a valid sorting operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a sorting operation.", difficulty: "medium" },
  ],
  // --- DSA Searching ---
  "DSA-Searching": [
    { question: "What is searching?", options: ["Finding an element", "Arranging in order", "Deleting", "Inserting"], answer: 0, explanation: "Searching finds data.", difficulty: "easy" },
    { question: "Which of these is NOT a searching algorithm?", options: ["Linear", "Binary", "Bubble", "Jump"], answer: 2, explanation: "Bubble is not a searching algorithm.", difficulty: "medium" },
    { question: "Which of these is true for linear search?", options: ["Checks each element", "Divides and conquers", "Uses heap", "Uses stack"], answer: 0, explanation: "Linear search checks each.", difficulty: "easy" },
    { question: "Which of these is NOT a binary search property?", options: ["Sorted array", "O(log n)", "Unsorted array", "Divide and conquer"], answer: 2, explanation: "Binary search needs sorted array.", difficulty: "medium" },
    { question: "Which of these is true for jump search?", options: ["Jumps ahead by fixed steps", "Checks each element", "Uses heap", "Uses stack"], answer: 0, explanation: "Jump search jumps ahead.", difficulty: "easy" },
    { question: "Which of these is NOT a searching property?", options: ["Time complexity", "Space complexity", "Stability", "Recursion"], answer: 2, explanation: "Stability is not a property.", difficulty: "medium" },
    { question: "Which of these is true about search space?", options: ["Range to search", "Range to sort", "Range to insert", "Range to delete"], answer: 0, explanation: "Search space is range to search.", difficulty: "medium" },
    { question: "Which of these is NOT a valid searching operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a searching operation.", difficulty: "medium" },
    { question: "Which of these is true about unsuccessful search?", options: ["Element not found", "Element found", "Element inserted", "Element deleted"], answer: 0, explanation: "Unsuccessful: not found.", difficulty: "medium" },
    { question: "Which of these is NOT a searching algorithm?", options: ["Linear", "Binary", "Bubble", "Jump"], answer: 2, explanation: "Bubble is not a searching algorithm.", difficulty: "medium" },
  ],
  // --- Python Functions ---
  "Python-Functions": [
    { question: "What is a function in Python?", options: ["Reusable block of code", "Variable", "Class", "Module"], answer: 0, explanation: "Function is reusable code.", difficulty: "easy" },
    { question: "Which keyword defines a function?", options: ["def", "func", "function", "define"], answer: 0, explanation: "'def' defines a function.", difficulty: "easy" },
    { question: "Which of these is NOT a function property?", options: ["Name", "Parameters", "Return value", "Class"], answer: 3, explanation: "Class is not a function property.", difficulty: "medium" },
    { question: "Which of these is true for function arguments?", options: ["Can be defaulted", "Cannot be defaulted", "Must be strings", "Must be numbers"], answer: 0, explanation: "Arguments can be defaulted.", difficulty: "easy" },
    { question: "Which of these is NOT a valid function call?", options: ["foo()", "foo(1)", "foo(bar)", "foo = 1"], answer: 3, explanation: "foo = 1 is assignment.", difficulty: "medium" },
    { question: "Which of these is true about return?", options: ["Ends function", "Starts function", "Skips function", "Repeats function"], answer: 0, explanation: "Return ends function.", difficulty: "easy" },
    { question: "Which of these is NOT a valid return type?", options: ["int", "str", "list", "None"], answer: 3, explanation: "None is a valid return type.", difficulty: "medium" },
    { question: "Which of these is true about recursion?", options: ["Function calls itself", "Function calls other", "Function never calls", "Function always returns"], answer: 0, explanation: "Recursion: function calls itself.", difficulty: "medium" },
    { question: "Which of these is NOT a valid function property?", options: ["Name", "Parameters", "Return value", "Class"], answer: 3, explanation: "Class is not a function property.", difficulty: "medium" },
    { question: "Which of these is true about lambda?", options: ["Anonymous function", "Named function", "Class", "Module"], answer: 0, explanation: "Lambda is anonymous function.", difficulty: "medium" },
  ],
  // --- Python OOP ---
  "Python-OOP": [
    { question: "What is OOP?", options: ["Object Oriented Programming", "Open Oriented Programming", "Object Oriented Process", "Open Oriented Process"], answer: 0, explanation: "OOP: Object Oriented Programming.", difficulty: "easy" },
    { question: "Which keyword defines a class?", options: ["class", "def", "object", "module"], answer: 0, explanation: "'class' defines a class.", difficulty: "easy" },
    { question: "Which of these is NOT an OOP concept?", options: ["Encapsulation", "Polymorphism", "Abstraction", "Recursion"], answer: 3, explanation: "Recursion is not OOP.", difficulty: "medium" },
    { question: "Which of these is true for inheritance?", options: ["Class derives from another", "Class derives from itself", "Class never derives", "Class always derives"], answer: 0, explanation: "Inheritance: class from class.", difficulty: "easy" },
    { question: "Which of these is NOT a valid class property?", options: ["Name", "Methods", "Attributes", "Return value"], answer: 3, explanation: "Return value is not a class property.", difficulty: "medium" },
    { question: "Which of these is true about self?", options: ["Refers to instance", "Refers to class", "Refers to method", "Refers to module"], answer: 0, explanation: "self = instance.", difficulty: "easy" },
    { question: "Which of these is NOT a valid method?", options: ["__init__", "__str__", "__main__", "__repr__"], answer: 2, explanation: "__main__ is not a method.", difficulty: "medium" },
    { question: "Which of these is true about encapsulation?", options: ["Hides data", "Shows data", "Deletes data", "Creates data"], answer: 0, explanation: "Encapsulation hides data.", difficulty: "medium" },
    { question: "Which of these is NOT a valid OOP property?", options: ["Inheritance", "Polymorphism", "Abstraction", "Recursion"], answer: 3, explanation: "Recursion is not OOP.", difficulty: "medium" },
    { question: "Which of these is true about polymorphism?", options: ["Many forms", "One form", "No form", "All forms"], answer: 0, explanation: "Polymorphism: many forms.", difficulty: "medium" },
  ],
  // --- Python Modules ---
  "Python-Modules": [
    { question: "What is a module in Python?", options: ["File with Python code", "Variable", "Class", "Function"], answer: 0, explanation: "Module = file with code.", difficulty: "easy" },
    { question: "Which keyword imports a module?", options: ["import", "include", "require", "use"], answer: 0, explanation: "'import' imports module.", difficulty: "easy" },
    { question: "Which of these is NOT a module property?", options: ["Name", "File", "Class", "Function"], answer: 2, explanation: "Class is not a module property.", difficulty: "medium" },
    { question: "Which of these is true for module import?", options: ["Can import part", "Cannot import part", "Must import all", "Must import none"], answer: 0, explanation: "Can import part of module.", difficulty: "easy" },
    { question: "Which of these is NOT a valid import?", options: ["import os", "from os import path", "import os.path", "import path from os"], answer: 3, explanation: "'import path from os' is not valid.", difficulty: "medium" },
    { question: "Which of these is true about sys module?", options: ["Provides system functions", "Provides math functions", "Provides string functions", "Provides file functions"], answer: 0, explanation: "sys = system functions.", difficulty: "easy" },
    { question: "Which of these is NOT a valid module?", options: ["os", "sys", "math", "foo"], answer: 3, explanation: "foo is not a standard module.", difficulty: "medium" },
    { question: "Which of these is true about __name__?", options: ["Special variable", "Normal variable", "Class", "Function"], answer: 0, explanation: "__name__ is special.", difficulty: "medium" },
    { question: "Which of these is NOT a valid module property?", options: ["Name", "File", "Class", "Function"], answer: 2, explanation: "Class is not a module property.", difficulty: "medium" },
    { question: "Which of these is true about module search path?", options: ["sys.path", "os.path", "math.path", "foo.path"], answer: 0, explanation: "sys.path is search path.", difficulty: "medium" },
  ],
  // --- Python File Handling ---
  "Python-File Handling": [
    { question: "What is file handling?", options: ["Reading/writing files", "Sorting files", "Searching files", "Deleting files"], answer: 0, explanation: "File handling = read/write.", difficulty: "easy" },
    { question: "Which function opens a file?", options: ["open()", "file()", "read()", "write()"], answer: 0, explanation: "open() opens file.", difficulty: "easy" },
    { question: "Which of these is NOT a file mode?", options: ["r", "w", "x", "z"], answer: 3, explanation: "'z' is not a mode.", difficulty: "medium" },
    { question: "Which of these is true for reading a file?", options: ["open with 'r'", "open with 'w'", "open with 'x'", "open with 'z'"], answer: 0, explanation: "'r' = read mode.", difficulty: "easy" },
    { question: "Which of these is NOT a file method?", options: ["read()", "write()", "close()", "sort()"], answer: 3, explanation: "sort() is not a file method.", difficulty: "medium" },
    { question: "Which of these is true about file pointer?", options: ["Points to current position", "Points to start", "Points to end", "Points to file name"], answer: 0, explanation: "Pointer = current position.", difficulty: "easy" },
    { question: "Which of these is NOT a valid file operation?", options: ["Insert", "Delete", "Sort", "Update"], answer: 2, explanation: "Sorting is not a file operation.", difficulty: "medium" },
    { question: "Which of these is true about file closing?", options: ["close() closes file", "open() closes file", "read() closes file", "write() closes file"], answer: 0, explanation: "close() closes file.", difficulty: "medium" },
    { question: "Which of these is NOT a valid file mode?", options: ["r", "w", "x", "z"], answer: 3, explanation: "'z' is not a mode.", difficulty: "medium" },
    { question: "Which of these is true about file reading?", options: ["read() reads file", "write() reads file", "close() reads file", "sort() reads file"], answer: 0, explanation: "read() reads file.", difficulty: "medium" },
  ],
  // --- Python Libraries ---
  "Python-Libraries": [
    { question: "What is a library in Python?", options: ["Collection of modules", "Single module", "Class", "Function"], answer: 0, explanation: "Library = collection of modules.", difficulty: "easy" },
    { question: "Which of these is NOT a standard library?", options: ["os", "sys", "math", "foo"], answer: 3, explanation: "foo is not standard.", difficulty: "easy" },
    { question: "Which of these is true for import?", options: ["Imports module", "Imports class", "Imports function", "Imports variable"], answer: 0, explanation: "import imports module.", difficulty: "easy" },
    { question: "Which of these is NOT a library property?", options: ["Name", "Modules", "Class", "Function"], answer: 2, explanation: "Class is not a library property.", difficulty: "medium" },
    { question: "Which of these is true about pip?", options: ["Installs packages", "Removes packages", "Updates packages", "All of these"], answer: 3, explanation: "pip can do all.", difficulty: "easy" },
    { question: "Which of these is NOT a valid library?", options: ["os", "sys", "math", "foo"], answer: 3, explanation: "foo is not a standard library.", difficulty: "medium" },
    { question: "Which of these is true about library version?", options: ["Can be checked", "Cannot be checked", "Always latest", "Never changes"], answer: 0, explanation: "Version can be checked.", difficulty: "easy" },
    { question: "Which of these is NOT a valid library property?", options: ["Name", "Modules", "Class", "Function"], answer: 2, explanation: "Class is not a library property.", difficulty: "medium" },
    { question: "Which of these is true about library path?", options: ["sys.path", "os.path", "math.path", "foo.path"], answer: 0, explanation: "sys.path is library path.", difficulty: "medium" },
    { question: "Which of these is NOT a valid library?", options: ["os", "sys", "math", "foo"], answer: 3, explanation: "foo is not a standard library.", difficulty: "medium" },
  ],
  "Python-Basics": [
    {
      question: "Which keyword is used to define a function in Python?",
      options: ["func", "def", "function", "define"],
      answer: 1,
      explanation: "'def' is used to define a function.",
      difficulty: "easy",
    },
    {
      question: "What is the output of print(2 ** 3)?",
      options: ["6", "8", "9", "5"],
      answer: 1,
      explanation: "2 ** 3 is 8.",
      difficulty: "easy",
    },
    {
      question: "Which of these is a valid variable name?",
      options: ["2var", "var_2", "var-2", "var 2"],
      answer: 1,
      explanation: "Underscores are allowed, not hyphens or spaces.",
      difficulty: "easy",
    },
    {
      question: "What is the result of 5 // 2 in Python?",
      options: ["2.5", "2", "2.0", "3"],
      answer: 1,
      explanation: "'//' is integer division.",
      difficulty: "easy",
    },
    {
      question: "Which function is used to get input from user?",
      options: ["input()", "scan()", "get()", "read()"],
      answer: 0,
      explanation: "input() is used for user input.",
      difficulty: "easy",
    },
    {
      question: "Which of these is NOT a Python data type?",
      options: ["list", "dict", "array", "tuple"],
      answer: 2,
      explanation: "'array' is not a built-in type.",
      difficulty: "medium",
    },
    {
      question: "How do you start a comment in Python?",
      options: ["//", "#", "<!--", "/*"],
      answer: 1,
      explanation: "# is used for comments.",
      difficulty: "easy",
    },
    {
      question: "Which of these is used to define a block of code?",
      options: ["Curly braces", "Indentation", "Parentheses", "Quotes"],
      answer: 1,
      explanation: "Indentation defines blocks in Python.",
      difficulty: "easy",
    },
    {
      question: "What is the output of print(type([]))?",
      options: ["<class 'list'>", "<type 'list'>", "list", "'list'"],
      answer: 0,
      explanation: "type([]) returns <class 'list'>.",
      difficulty: "medium",
    },
    {
      question: "Which of these is NOT a valid string method?",
      options: ["upper()", "split()", "push()", "replace()"],
      answer: 2,
      explanation: "push() is not a string method.",
      difficulty: "medium",
    },
  ],
};
