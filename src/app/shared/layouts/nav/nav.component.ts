import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { distinctUntilChanged, Observable, of, tap } from 'rxjs';
import { CustomBreakpoints } from 'src/app/core/model/breakpoints.interface';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnChanges {
  @ViewChild('navmobile') navmobile!: ElementRef;

  public mobileNav: boolean = false
  public clickedNavigation = false;
  public isLoggedIn: boolean = true

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

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService ) { }
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.breakpoint$.subscribe(() => this.breakpointChanged())
    this.authService.isLoggedIn.subscribe(res => this.isLoggedIn = res)
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

  public onClickNavigation() {
    this.clickedNavigation = !this.clickedNavigation
  }

  public hideOnClick() {
    this.clickedNavigation = false;
  }

  public onLogout() {
    this.authService.logout();
  }

}
