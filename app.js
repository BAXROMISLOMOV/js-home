
  let data = [
    {
        id: 1, name: "John Doe",
        age: 30, 
        email: "john@example.com",
        phone: "123-456-7890"
         },
    { 
        id: 2, 
        name: "Jane Smith",
        age: 25, email: "jane@example.com",
        phone: "987-654-3210" },
    { 
        id: 3,
        name: "Tom Hardy", 
        age: 40, 
        email: "tom@example.com", 
        phone: "765-432-1098" 
        },
    { 
        id: 4,
        name: "Emily Blunt",
        age: 28,
        email: "emily@example.com", 
        phone: "321-654-9870" },
    {   
        id: 5,
        name: "Emily Blunt",
        age: 28,
        email: "emily@example.com",
        phone: "321-654-9870" },
  ];
  
  function createEntry(newEntry) {
    data.push(newEntry);
  }
  
  function readEntry(id) {
    return data.find((entry) => entry.id === id);
  }
  
  function updateEntry(id, updatedEntry) {
    const index = data.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      data[index] = { ...data[index], ...updatedEntry };
      return true;
    }
    return false;
  }
  
  function deleteEntry(id) {
    const index = data.findIndex((entry) => entry.id === id);
    if (index !== -1) {
      data.splice(index, 1);
      return true;
    }
    return false;
  }
  

  
  createEntry({ id: 6, name: "Alice Brown", age: 29, email: "alice@example.com", phone: "555-123-4567" });

  console.log(readEntry(3));
  

  updateEntry(2, { age: 26, email: "jane.updated@example.com" });
  

  deleteEntry(1);

  console.log(data);
  

  