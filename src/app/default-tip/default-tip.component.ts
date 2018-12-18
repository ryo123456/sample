import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-tip',
  templateUrl: './default-tip.component.html',
  styleUrls: ['./default-tip.component.css']
})
export class DefaultTipComponent implements OnInit {
  num = "1"
  constructor() { }

  ngOnInit() {
    this.drag()
  }

  drag() {
    var dragSrcEl = null;

    function handleDragStart(e) {
      dragSrcEl = this;

      e.dataTransfer.effectAllowed = 'move';
      e.dataTransfer.setData("text/plain", this.innerHTML);
      this.style.opacity = '0.4';  // this / e.target is the source node.
    }

    function handleDragOver(e) {
      if (e.preventDefault) {
        e.preventDefault(); // Necessary. Allows us to drop.
      }
      e.dataTransfer.dropEffect = 'move';  // See the section on the DataTransfer object.

      return false;
    }

    function handleDragEnter(e) {
      // this / e.target is the current hover target.
      this.classList.add('over');
    }

    function handleDragLeave(e) {
      this.classList.remove('over');  // this / e.target is previous target element.
    }

    function handleDrop(e) {
      if (e.stopPropagation) {
        e.stopPropagation(); // Stops some browsers from redirecting.
      }

      // Don't do anything if dropping the same column we're dragging.
      if (dragSrcEl != this) {
        // Set the source column's HTML to the HTML of the columnwe dropped on.
        dragSrcEl.innerHTML = this.innerHTML;
        this.innerHTML = e.dataTransfer.getData('text/plain');
      }
      return false
    }

    function handleDragEnd(e) {
      [].forEach.call(cols, function (col) {
        col.classList.remove('over');
      });
      this.style.opacity = '1';
    }

    var cols = document.querySelectorAll('#columns .column');
    [].forEach.call(cols, function (col) {
      col.addEventListener('dragstart', handleDragStart, false);
      col.addEventListener('dragenter', handleDragEnter, false);
      col.addEventListener('dragover', handleDragOver, false);
      col.addEventListener('dragleave', handleDragLeave, false);
      col.addEventListener('drop', handleDrop, false);
      col.addEventListener('dragend', handleDragEnd, false);
    });
  }
}
