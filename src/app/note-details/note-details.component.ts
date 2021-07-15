import { Component, OnInit } from '@angular/core';
import { Note } from "../note";
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NoteService } from "../note.service";

@Component({
  selector: 'app-note-details',
  templateUrl: './note-details.component.html',
  styleUrls: ['./note-details.component.css']
})
export class NoteDetailsComponent implements OnInit {

  note?: Note;
  constructor(private route: ActivatedRoute,private location: Location, private noteService:NoteService) { }

  getNote(): void {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.note = this.noteService.getNote(id);
      console.log(this.note);
  }

  goBack(): void {
    console.log("go back");
    console.log(this.noteService.getNotes());
    this.location.back();
}

  save(): void {
    if (this.note) {
      this.noteService.updateNote(this.note);
      console.log("updated note");
      console.log(this.noteService.getNotes());
      this.goBack();
    }
  }

  ngOnInit() {
    this.getNote();
  }

}
