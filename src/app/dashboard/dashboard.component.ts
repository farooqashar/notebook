import { Component, OnInit } from '@angular/core';
import { Note } from "../note";
import { NoteService } from "../note.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  notes: Note[] = [];


  constructor(private noteService:NoteService) { }

  ngOnInit() {
    this.notes = this.getNotes();
  }

   add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();

    if (!title) { return; }
    if (!content) { return; }
    const new_id = this.noteService.getNotes()[this.noteService.getNotes().length -1].id + 1
    this.noteService.addNote({title,content,id: new_id} as Note);
  }



  getNotes():Note[] {
    return this.noteService.getNotes().slice(this.noteService.getNotes().length - 4,this.noteService.getNotes().length);
  }

}
