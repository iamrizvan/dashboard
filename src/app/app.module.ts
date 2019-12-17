import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ChartComponent } from './chart/chart.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElifeComponent } from './elife/elife.component';
import { UcaasComponent } from './ucaas/ucaas.component';
import { VsaasComponent } from './vsaas/vsaas.component';
import { CleanPipeComponent } from './clean-pipe/clean-pipe.component';
import { NtcpeComponent } from './ntcpe/ntcpe.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent  },
  { path: 'elife', component: ElifeComponent  },
  { path: 'ucaas', component: UcaasComponent  },
  { path: 'vsaas', component: VsaasComponent  },
  { path: 'clean_pipe', component: CleanPipeComponent  },
  { path: 'ntcpe', component: NtcpeComponent  }
  
];


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ChartComponent,
    SideMenuComponent,
    MainComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    ElifeComponent,
    UcaasComponent,
    VsaasComponent,
    CleanPipeComponent,
    NtcpeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
