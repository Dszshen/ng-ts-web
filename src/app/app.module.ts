import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { IssueComponent } from './issue/issue.component';
import { RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './common/header/header.component';
import { FooterComponent } from './common/footer/footer.component';
import { Err404Component } from './error/err404/err404.component';
import { Err500Component } from './error/err500/err500.component';
import { TabNavComponent } from './common/tab-nav/tab-nav.component';
import { TableListComponent } from './templates/table-list/table-list.component';
import { PaginationComponent } from './templates/pagination/pagination.component';
import { ProfileComponent } from './personal/profile/profile.component';
import { CreateComponent } from './issue/create/create.component';
import {TeamComponent} from './team/team.component';
import { SideMenuComponent } from './common/side-menu/side-menu.component';


// 路由配置
const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'settings', loadChildren: './settings/routes/routes.module#RoutesModule'},
  {path: 'team/:teamId', component: TeamComponent},
  {path: 'project/:projectId', component: ProjectComponent},
  {path: 'issue/:issueId', component: IssueComponent},
  {path: 'profile/:profileId', component: ProfileComponent},
  {path: 'err404', component: Err404Component},
  {path: 'err500', component: Err500Component},
  {path: '**', pathMatch: 'full', redirectTo: 'err404'}
];

// 路由配置
// const teamRouteConfig: Routes = [
//   {path: 'team/:teamId', component: TeamComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    ProductComponent,
    IssueComponent,
    HomeComponent,
    ProjectComponent,
    HeaderComponent,
    FooterComponent,
    Err404Component,
    Err500Component,
    TabNavComponent,
    TableListComponent,
    PaginationComponent,
    ProfileComponent,
    CreateComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routeConfig)
    /*RouterModule.forChild(teamRouteConfig)*/
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
