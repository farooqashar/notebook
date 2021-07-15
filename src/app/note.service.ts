import { Injectable } from '@angular/core';
import { Note } from "./note";
import { NOTES } from "./notes";
import {Observable, of} from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  notes: Note[] = NOTES;
  
   getNotes() {
    return this.notes;
  }

  addNote(note:Note) {
    this.notes.push(note);
  }

  deleteNote(note_id:number) {
    this.notes = this.notes.filter(elt => elt.id !== note_id);
  }

  getNote(id:number) {
      return this.notes.filter(elt => elt.id == id)[0];
  }

  updateNote(note:Note){
    const current_note = this.notes.filter(elt => elt.id == note.id)[0];
    this.notes[this.notes.indexOf(current_note)] = note;
  }

  constructor() { }
}
