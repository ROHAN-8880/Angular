import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { VideoComponent } from './pages/video/video.component';
import { AnalyticsComponent } from './pages/analytics/analytics.component';
import { CommentsComponent } from './pages/comments/comments.component';

export const routes: Routes = [
    {path:'',redirectTo:'dashboard',pathMatch:'full'},
    {path:'dashboard',component:DashboardComponent},
    {path:'video',component:VideoComponent},
    {path:'analytics',component:AnalyticsComponent},
    {path:'comments',component:CommentsComponent},

];
