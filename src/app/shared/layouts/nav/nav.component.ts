import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, tap } from 'rxjs';
import { CustomBreakpoints } from 'src/app/core/model/breakpoints.interface';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, AfterViewInit {
  @ViewChild('navmobile') navmobile!: ElementRef;

  mobileNav: boolean = false

  customBreakpoints: CustomBreakpoints = {
    small: '(max-width: 640px)',
    medium: '(min-width: 641px) and (max-width: 757px)',
    large: '(min-width: 758px) and (max-width: 1024px)'
  }


  Breakpoints = this.customBreakpoints;
  currentBreakpoint: string = '';
  readonly breakpoint$ = this.breakpointObserver
    .observe([this.customBreakpoints.small, this.customBreakpoints.medium])
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
    if(this.breakpointObserver.isMatched(this.customBreakpoints.medium)) {
      this.currentBreakpoint = this.customBreakpoints.medium;
      this.mobileNav = false
    } else if(this.breakpointObserver.isMatched(this.customBreakpoints.small)) {
      this.currentBreakpoint = this.customBreakpoints.small;
      this.mobileNav = true
    }
  }

}
