const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {
    // Write the date check condition here and return the array
    // of overdue items accordingly.
    return all.filter(
      (item) => new Date(item.dueDate) < new Date(today) && !item.completed
    );
  }

  const dueToday = () => {
    // Write the date check condition here and return the array
    // of todo items that are due today accordingly.
    return all.filter(
      (item) => new Date(item.dueDate).toString() === new Date(today).toString()
    );
  }

  const dueLater = () => {
    // Write the date check condition here and return the array
    // of todo items that are due later accordingly.
    return all.filter(
      (item) => new Date(item.dueDate) > new Date(today) && !item.completed
    );
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    return list.map((item) =>
      `[${item.completed ? "x" : " "}] ${item.title}${
        item.dueDate !== today ? ` ${formattedDate(new Date(item.dueDate))}` : ""
      }`
    ).join("\n");
  }

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

module.exports= todoList;