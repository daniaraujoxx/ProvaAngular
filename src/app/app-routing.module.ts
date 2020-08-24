import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { ChartsComponent } from './charts/charts.component';
import { StaticsDataComponent } from './statics-data/statics-data.component';


export const routes: Routes = [
    { 
        path: '',
        component: AppComponent
    },

  { 
    path: 'app-charts',
    component: ChartsComponent
},
{ 
  path: 'app-statics-data',
  component: StaticsDataComponent
},

    
];  

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}