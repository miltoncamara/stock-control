import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'widget-todo-lists',
  templateUrl: './todo-lists.component.html',
  styleUrls: ['./todo-lists.component.scss']
})
export class TodoListsComponent implements OnInit {
  todoListData:any;

  constructor() {
    this.todoListData = [
      {
        letter: 'F',
        todo: 'Fivamus sagittis lacus vel augue laoreet rutrum faucibus dolor',
        venue: 'Today at 8.30 AM',
        category: '#Messages',
        priority: '!!!',
        checked: 'checked'
      },
      {
        letter: 'N',
        todo: 'Nullam id dolor id nibh ultricies vehicula ut id elit',
        venue: 'Today at 12.30 PM',
        category: '#Clients',
        priority: '!!',
        checked: 'checked'
      },
      {
        letter: 'C',
        todo: 'Cras mattis consectetur purus sit amet fermentum',
        venue: 'Tomorrow at 10.30 AM',
        category: '#Clients',
        priority: '!!',
        completed: ''
      },
      {
        letter: 'I',
        todo: 'Integer posuere erat a ante venenatis dapibus posuere velit aliquet',
        venue: '05/08/2017 at 08.00 AM',
        category: '#Server',
        priority: '!',
        completed: ''
      },
      {
        letter: 'P',
        todo: 'Praesent commodo cursus magnavel scelerisque nisl consectetur',
        venue: '10/08/2016 at 04.00 AM',
        category: '#Server',
        priority: '!!!',
        completed: ''
      },
    ]
  }

  ngOnInit() {
  }

}
