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
      category: 'mandatory',
      img: '../../assets/svg/glasses.svg'
    },
    {
      name: 'Smoking',
      category: 'prohibited',
      img: '../../assets/svg/smoking.svg'
    },
    {
      name: 'Headphones',
      category: 'mandatory',
      img: '../../assets/svg/headphones.svg'
    },
    {
      name: 'Alcohol',
      category: 'prohibited',
      img: '../../assets/svg/alcohol.svg'
    },
    {
      name: 'Helmet',
      category: 'mandatory',
      img: '../../assets/svg/helmet.svg'
    },
    {
      name: 'Running',
      category: 'prohibited',
      img: '../../assets/svg/running.svg'
    },
    {
      name: 'Face Mask',
      category: 'mandatory',
      img: '../../assets/svg/mask.svg'
    },
    {
      name: 'Drugs',
      category: 'prohibited',
      img: '../../assets/svg/drugs.svg'
    },
    {
      name: 'Safety boots',
      category: 'mandatory',
      img: '../../assets/svg/shoes.svg'
    },
    {
      name: 'Explosives',
      category: 'prohibited',
      img: '../../assets/svg/explosives.svg'
    },
    {
      name: 'Yellow Vest',
      category: 'mandatory',
      img: '../../assets/svg/vest.svg'
    },
    {
      name: 'Animals',
      category: 'prohibited',
      img: '../../assets/svg/animals.svg'
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
