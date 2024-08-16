import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DefaultComponent } from './main/default/default.component';

export const routes: Routes = [
    {
        path: '', component: DefaultComponent, children:[
            {
                path:'',
                component:HomeComponent
            }
        ]
    },
    
];
