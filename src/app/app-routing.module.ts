import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActorsComponent } from './actors/actors.component';
import { AddMovieComponent } from './movies/add-movie/add-movie.component';
import { BlankComponent } from './blank/blank.component';
import { ErrorComponent } from './error/error.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginGuard } from './login.guard';
import { LoginComponent } from './login/login.component';
import { MoviesComponent } from './movies/movies.component';
import { SignupComponent } from './signup/signup.component';
import { SingleMovieComponent } from './movies/single-movie/single-movie.component';
import { WatchListComponent } from './watch-list/watch-list.component';
const routes: Routes = [
  {path:'',redirectTo:'/blankpage',pathMatch:'full'},
  {path:'blankpage',component:BlankComponent},
  {path:'movies',component:MoviesComponent,
  // canActivate:[LoginGuard]
},
  {path: 'homepage',component:HomePageComponent,
  // canActivate:[LoginGuard]
},
  {path:'actors',component:ActorsComponent,
  // canActivate:[LoginGuard]
},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'addmovie',component:AddMovieComponent,
  // canActivate:[LoginGuard]
},
  {path:'footer',component:FooterComponent,
  // canActivate:[LoginGuard]
},
  {path:'watchlist',component:WatchListComponent,
  // canActivate:[LoginGuard]
},
  {path:'movie/:id',component:SingleMovieComponent,
  // canActivate:[LoginGuard]
},
  {path:'**',component:ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
