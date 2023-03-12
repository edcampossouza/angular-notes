import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Note } from 'src/app/shared/note.model';

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.scss'],
})
export class NoteDetailsComponent {
  note!: Note;

  ngOnInit() {
    this.note = new Note();
  }

  onSubmit(form: NgForm) {
    // save the note
  }
  
}
