import { Component } from '@angular/core';
import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  all = [
    {
      name: 'Safety Glasses',
      category: 'mandatory'
    },
    {
      name: 'Smoking',
      category: 'prohibited'
    },
    {
      name: 'Headphones',
      category: 'mandatory'
    },
    {
      name: 'Alcohol',
      category: 'prohibited'
    },
    {
      name: 'Helmet',
      category: 'mandatory'
    },
    {
      name: 'Running',
      category: 'prohibited'
    },
    {
      name: 'Face Mask',
      category: 'mandatory'
    },
    {
      name: 'Drugs',
      category: 'prohibited'
    },
    {
      name: 'Safety boots',
      category: 'mandatory'
    },
    {
      name: 'Explosives',
      category: 'prohibited'
    },
    {
      name: 'Yellow Vest',
      category: 'mandatory'
    },
    {
      name: 'Animals',
      category: 'prohibited'
    }
  ];

  mandatory = [];
  prohibited = [];

  onDrop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }
  //   /** Predicate function that only allows even numbers to be dropped into a list. */
  mandatoryPredicate(item: CdkDrag<string>) {
    if (item.data === 'mandatory') {
      return item.data === 'mandatory';
    } else {
      return false;
    }
  }
  prohibitedPredicate(item: CdkDrag<string>) {
    if (item.data === 'prohibited') {
      return item.data === 'prohibited';
    } else {
      return false;
    }
  }

  /** Predicate function that doesn't allow items to be dropped into a list. */
  noReturnPredicate() {
    return false;
  }
}
