def task():
    tasks = [] 
    print("Namaste, Welcome to task management")


    t_task = int(input("Enter how many task you want to add")) #total task input
    for i in range(1, t_task+1):
        task_name = input(f"Enter Task {i} =")
        task.append(task_name)

    print(f"Today's tasks are\n{task}")

   
