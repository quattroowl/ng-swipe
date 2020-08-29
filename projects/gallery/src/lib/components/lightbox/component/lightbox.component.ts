import {
  Component,
  OnInit,
  HostListener,
  ViewEncapsulation,
  ViewChild,
  ElementRef,
} from "@angular/core";
import { ModalService } from "../../../services/modal.service";

import { Observable} from "rxjs";
import { LightboxService } from '../../../services/lightbox.service';

@Component({
  selector: "ng-swipe-lightbox",
  templateUrl: "./lightbox.component.html",
  styleUrls: ["./lightbox.component.scss"],
  encapsulation: ViewEncapsulation.None,
  
})
export class LightboxComponent implements OnInit {
  busy: Observable<boolean>;
  resize: boolean;
  width: any;
  store     ;
  active: number;
  config;
  state;
  @ViewChild("wrap", { static: true }) wrapper: ElementRef;

  constructor(
    public modal: ModalService,
    private lightboxService: LightboxService,
  ) {}

  @HostListener("window: keyup", ["$event"]) close(e) {
    e.key === "Escape" ? this.modal.close() : null;
  }

  onTap(): void {
    this.modal.close();
  }

  onEvent(i: any) {
    if (i === "next") {
      this.store.next();
    } else if (i === "prev") {
      this.store.prev();
    } else {
      this.store.setActive(<number>i);
    }
  }

  ngOnInit() {
    this.width = this.wrapper.nativeElement.offsetWidth;
    this.store = this.lightboxService.store;
  
    this.lightboxService.store.state.subscribe((e) => {
      this.state = e
      
    });

    this.lightboxService.store.config.subscribe((e) => {
      this.config = e
      
    });
    this.store.state.subscribe((e) => {
      this.active = e.activeIndex;
    })
  }

  onResize($event): void {
    this.width = this.wrapper.nativeElement.offsetWidth;
    this.resize = true;
  }

  ngOnDestroy() {
    
  }
}