    import { NgModule } from '@angular/core';
    import { RouterModule, Routes } from '@angular/router';
    import { LoginComponent } from './core/login/login.component'
    import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component'

    const routes: Routes = [
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: '',
            redirectTo: 'login',
            pathMatch: 'full'
        },
        {
            path: '**',
            component: PageNotFoundComponent,
        },
    ];

    @NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
