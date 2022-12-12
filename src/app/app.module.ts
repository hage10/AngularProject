import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MessageService} from 'primeng/api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {TabMenuModule} from 'primeng/tabmenu';
import { ManageComponent } from './components/admin/manage/manage.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {TabViewModule} from 'primeng/tabview';
import { ConfirmationService } from 'primeng/api';
import { InputTextModule } from 'primeng/inputtext';
import {DialogModule} from 'primeng/dialog';
import { AddPostComponent } from './components/admin/manage/add-post/add-post.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {ToastModule} from 'primeng/toast';
import { TagModule } from 'primeng/tag';
import {HeaderSecondComponent} from './components/admin/manage/header-second/header-second.component';
import { EvenBusService } from 'src/services/even-bus.service';

@NgModule({
  declarations: [
    AppComponent,
    ManageComponent,
    AddPostComponent,
    HeaderSecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    TableModule,
    ButtonModule,
    ConfirmDialogModule,
    TabViewModule,
    TagModule,
    InputTextModule,
    DialogModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ToastModule
  ],
  providers: [ConfirmDialogModule, ConfirmationService,MessageService,EvenBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }

