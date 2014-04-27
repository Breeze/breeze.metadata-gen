/**
 * Extracts from todo apps
 */
(function(todo){

    // nodb todoLists with nested todoItems
    // but $id, $type, $ref removed
    // and todoItem.todoList removed
    todo.nodb = [
        {
            "TodoListId": 2,
            "Title": "Another List",
            "Todos": [
                {
                    "TodoItemId": 3,
                    "Title": "Foo",
                    "IsDone": false,
                    "TodoListId": 2
                },
                {
                    "TodoItemId": 4,
                    "Title": "Bar",
                    "IsDone": true,
                    "TodoListId": 2
                },
                {
                    "TodoItemId": 5,
                    "Title": "Baz",
                    "IsDone": false,
                    "TodoListId": 2
                }
            ]
        },
        {
            "TodoListId": 1,
            "Title": "Before work",
            "Todos": [
                {
                    "TodoItemId": 1,
                    "Title": "Make coffee",
                    "IsDone": false,
                    "TodoListId": 1
                },
                {
                    "TodoItemId": 2,
                    "Title": "Turn heater off",
                    "IsDone": false,
                    "TodoListId": 1
                }
            ]
        }
    ];

    // NoDb as from Breeze Web API Controller
    // todoLists with nested todoItems
    // http://localhost:54140/breeze/Todo/TodoLists
    todo.nodbWith$type = [
        {
            "$id": "1",
            "$type": "NoDb.Models.TodoList, NoDb",
            "TodoListId": 2,
            "Title": "Another List",
            "Todos": [
                {
                    "$id": "2",
                    "$type": "NoDb.Models.TodoItem, NoDb",
                    "TodoItemId": 3,
                    "Title": "Foo",
                    "IsDone": false,
                    "TodoListId": 2,
                    "TodoList": {
                        "$ref": "1"
                    }
                },
                {
                    "$id": "3",
                    "$type": "NoDb.Models.TodoItem, NoDb",
                    "TodoItemId": 4,
                    "Title": "Bar",
                    "IsDone": true,
                    "TodoListId": 2,
                    "TodoList": {
                        "$ref": "1"
                    }
                },
                {
                    "$id": "4",
                    "$type": "NoDb.Models.TodoItem, NoDb",
                    "TodoItemId": 5,
                    "Title": "Baz",
                    "IsDone": false,
                    "TodoListId": 2,
                    "TodoList": {
                        "$ref": "1"
                    }
                }
            ]
        },
        {
            "$id": "5",
            "$type": "NoDb.Models.TodoList, NoDb",
            "TodoListId": 1,
            "Title": "Before work",
            "Todos": [
                {
                    "$id": "6",
                    "$type": "NoDb.Models.TodoItem, NoDb",
                    "TodoItemId": 1,
                    "Title": "Make coffee",
                    "IsDone": false,
                    "TodoListId": 1,
                    "TodoList": {
                        "$ref": "5"
                    }
                },
                {
                    "$id": "7",
                    "$type": "NoDb.Models.TodoItem, NoDb",
                    "TodoItemId": 2,
                    "Title": "Turn heater off",
                    "IsDone": false,
                    "TodoListId": 1,
                    "TodoList": {
                        "$ref": "5"
                    }
                }
            ]
        }
    ];

    // Todo-Zumo
    // https://wardtodomobileservice.azure-mobile.net/tables/TodoItem
    todo.zumo = [
        {
            "id": "957AF6FD-62E3-485E-ACFE-3F17A69FB15D",
            "text": "Learn Angular",
            "complete": true
        },
        {
            "id": "D34BE0FC-8704-472C-8640-8E52BF3F14E0",
            "text": "Get some sleep",
            "complete": false
        },
        {
            "id": "F70C059E-C2CF-45A9-A8F9-7A6CD6FF977E",
            "text": "Two",
            "complete": true
        }
    ]

})(module.exports);

