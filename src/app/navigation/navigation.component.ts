import { Component } from '@angular/core';
import { AuthService } from '../AuthService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  isLoggedIn = false;
  isAdmin = false;

  constructor(private authService: AuthService, private router: Router) {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.isAdmin = this.authService.isUserAdmin();
  }

  logout() {
    this.authService.logout(); 
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
  }

  navigateAdmin(){
    this.router.navigate(['/admin']);
  }

}
