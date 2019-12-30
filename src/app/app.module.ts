import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ViewChild } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { ChartComponent } from './chart/chart.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ElifeComponent } from './elife/elife.component';
import { UcaasComponent } from './ucaas/ucaas.component';
import { VsaasComponent } from './vsaas/vsaas.component';
import { CleanPipeComponent } from './clean-pipe/clean-pipe.component';
import { NtcpeComponent } from './ntcpe/ntcpe.component';
import { SignupComponent } from './signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth/login/auth.service';
import { HomeCardsComponent } from './home-cards/home-cards.component';

// Import ng-circle-progress
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProductService } from './home-cards/product.card.service';

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
    NtcpeComponent,
    SignupComponent,
    RegisterComponent,
    HomeCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot( appRoutes ),
    FormsModule, 
    ReactiveFormsModule,
    NgCircleProgressModule.forRoot({
      // set defaults here
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: "#78C000",
      innerStrokeColor: "#C7E596",
      animationDuration: 300,
    })
  ],
  providers: [AuthService, ProductService],
  bootstrap: [AppComponent],
})
export class AppModule {
}
