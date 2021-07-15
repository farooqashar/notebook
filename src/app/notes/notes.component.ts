import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NoteService } from "../note.service";
import firebase from "firebase/app";
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {

  notes: Note[] = this.noteService.getNotes();

  constructor(private store: AngularFirestore, private noteService:NoteService) { }


  add(title: string, content: string): void {
    title = title.trim();
    content = content.trim();

    if (!title) { return; }
    if (!content) { return; }
    const new_id = this.noteService.getNotes()[this.noteService.getNotes().length -1].id + 1
    this.noteService.addNote({title,content,id: new_id} as Note);
    this.store.collection('notes').doc(title).set({"title": title,"content": content});
  }

  delete(note: Note): void {
    this.notes = this.notes.filter(elt => elt !== note);
    this.noteService.deleteNote(note.id);  
    }

  ngOnInit(): void {
  }

}
