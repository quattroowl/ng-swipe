import { Injectable, Inject} from "@angular/core";
import {BehaviorSubject, Subject, Observable} from "rxjs";
import { galleryConfig } from "../models/config.model";
import { SwipeStore } from 'core';
@Injectable({
    providedIn: 'root'
})

export class LightboxService {

    store : SwipeStore;

    // setConfig(e) {
    //     this._config.next(e);
    // }

    // setActive(e) {
    //     this.activeIndex = e;
    // }

    // setItems(e) {
    //     this.items = e;
    // }

    getStore(e) {
        this.store = e; 
    }
}