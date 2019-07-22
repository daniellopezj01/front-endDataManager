import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContainerComponent } from './components/container/container.component';

const routes: Routes = [
    { path: '', redirectTo: 'home' , pathMatch: 'full'},
    { path: 'container', component: ContainerComponent },
    { path: '', component: HomeComponent, },
];
 
@NgModule({
    imports: [RouterModule.forRoot(routes,
        {
            scrollPositionRestoration: 'enabled',
            anchorScrolling: 'enabled',
            scrollOffset: [0, 53]
        },
    )
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }
