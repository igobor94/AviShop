import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('navmobile') navmobile!: ElementRef;

  // customBreakpoints: Array<{name: string, breakpoint: string}> =  [
  //   {name: 'sm', breakpoint: '(max-width: 640px)'},
  //   {name: 'md', breakpoint: '(max-width: 768px)'},
  //   {name: 'lg', breakpoint: '(max-width: 1024px)'},
  //   {name: 'xl', breakpoint: '(max-width: 1280px)'},
  //   {name: '2xl', breakpoint: '(max-width: 1536px)'},
  // ]

  customBreakpoints: {small: string, large: string} = {
    small: '(max-width: 640px)',
    large: '(min-width: 641px)'
  }


  Breakpoints = this.customBreakpoints;
  currentBreakpoint: string = '';
  readonly breakpoint$ = this.breakpointObserver
    .observe([this.customBreakpoints.small, this.customBreakpoints.large])
    .pipe(
      tap(value =>console.log(value)),
      distinctUntilChanged()
    )

  constructor(private breakpointObserver: BreakpointObserver) { }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged())
  }

  ngAfterViewInit(): void {
    console.log(this.navmobile)
  }

  private breakpointChanged() {
    if(this.breakpointObserver.isMatched(this.customBreakpoints.large)) {
      this.currentBreakpoint = this.customBreakpoints.large;
    } else if(this.breakpointObserver.isMatched(this.customBreakpoints.small)) {
      this.currentBreakpoint = this.customBreakpoints.small;
    }
  }

}
