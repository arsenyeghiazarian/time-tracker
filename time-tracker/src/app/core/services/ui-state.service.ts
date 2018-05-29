import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiStateService {

  public isMobile() {
    return window.innerWidth <= 960
  }

  public isDesktop() {
    return window.innerWidth > 960
  }

  constructor() { }
}
