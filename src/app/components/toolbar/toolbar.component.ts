import { Component, OnInit, Output, EventEmitter, OnDestroy } from "@angular/core";
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "app-toolbar",
  templateUrl: "./toolbar.component.html",
  styleUrls: ["./toolbar.component.scss"],
})
export class ToolbarComponent implements OnInit, OnDestroy {
  @Output() toggleSidenav = new EventEmitter<void>();
  private userSub: Subscription;
  isAuthenticated = false;
  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe((user) => {
      this.isAuthenticated = !!user;
    });
  }

  onLogout(){
    this.authService.logout();
  };

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
}
