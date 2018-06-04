import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import {TopicsModule} from "./topics/topics.module";
import {TopicListComponent} from "./topics/topic-list/topic-list.component";
import {TopicCreateComponent} from "./topics/topic-create/topic-create.component";
import {TopicEditComponent} from "./topics/topic-edit/topic-edit.component";
import {TopicNewsListComponent} from "./topics/topicnews-list/topic-list.component";
import {TopicNewsCreateComponent} from "./topics/topicnews-create/topic-create.component";
import {TopicNewsEditComponent} from "./topics/topicnews-edit/topic-edit.component";

import {TopicManifestListComponent} from "./topics/manifest-list/topic-list.component";
import {TopicManifestCreateComponent} from "./topics/manifest-create/topic-create.component";
import {TopicManifestEditComponent} from "./topics/manifest-edit/topic-edit.component";

import {WorkListComponent} from "./topics/work-list/topic-list.component";
import {WorkCreateComponent} from "./topics/work-create/topic-create.component";
import {WorkEditComponent} from "./topics/work-edit/topic-edit.component";

import {ComplaintsListComponent} from "./topics/complaints-list/topic-list.component";
import {ComplaintsCreateComponent} from "./topics/complaints-create/topic-create.component";
import {ComplaintsEditComponent} from "./topics/complaints-edit/topic-edit.component";

import {FeedbackListComponent} from "./topics/feedback-list/topic-list.component";
import {FeedbackCreateComponent} from "./topics/feedback-create/topic-create.component";
import {FeedbackEditComponent} from "./topics/feedback-edit/topic-edit.component";

import {PolicyListComponent} from "./topics/policy-list/topic-list.component";
import {PolicyCreateComponent} from "./topics/policy-create/topic-create.component";
import {PolicyEditComponent} from "./topics/policy-edit/topic-edit.component";

import {PhoneNumbersListComponent} from "./topics/phonenumbers-list/topic-list.component";
import {PhoneNumbersCreateComponent} from "./topics/phonenumbers-create/topic-create.component";
import {PhoneNumbersEditComponent} from "./topics/phonenumbers-edit/topic-edit.component";

import {PhotosListComponent} from "./topics/photos-list/topic-list.component";
import {ShareListComponent} from "./topics/share-list/topic-list.component";

import {VideosListComponent} from "./topics/videos-list/topic-list.component";

import { MandalListComponent } from './topics/mandal-list/topic-list.component';
import { MandalCreateComponent } from './topics/mandal-create/topic-create.component';
import { MandalEditComponent } from './topics/mandal-edit/topic-edit.component';

import { Mandal1ListComponent } from './topics/mandal1-list/topic-list.component';
import { Mandal1CreateComponent } from './topics/mandal1-create/topic-create.component';
import { Mandal1EditComponent } from './topics/mandal1-edit/topic-edit.component';

import { Mandal2ListComponent } from './topics/mandal2-list/topic-list.component';
import { Mandal2CreateComponent } from './topics/mandal2-create/topic-create.component';
import { Mandal2EditComponent } from './topics/mandal2-edit/topic-edit.component';

import { Mandal3ListComponent } from './topics/mandal3-list/topic-list.component';
import { Mandal3CreateComponent } from './topics/mandal3-create/topic-create.component';
import { Mandal3EditComponent } from './topics/mandal3-edit/topic-edit.component';

import { Mandal4ListComponent } from './topics/mandal4-list/topic-list.component';
import { Mandal4CreateComponent } from './topics/mandal4-create/topic-create.component';
import { Mandal4EditComponent } from './topics/mandal4-edit/topic-edit.component';


import { Mandal5ListComponent } from './topics/mandal5-list/topic-list.component';
import { Mandal5CreateComponent } from './topics/mandal5-create/topic-create.component';
import { Mandal5EditComponent } from './topics/mandal5-edit/topic-edit.component';

import {WorkCategoryListComponent} from "./topics/workcategory-list/topic-list.component";
import {WorkCategoryCreateComponent} from "./topics/workcategory-create/topic-create.component";
import { WorkCategoryEditComponent } from './topics/workcategory-edit/topic-edit.component';


import {FormsModule} from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {UploadFileService} from './services/upload-file.service';


const appRoutes: Routes = [
  { path: '', component: TopicListComponent },
  { path: 'create', component: TopicCreateComponent },
  { path: 'edit/:id', component: TopicEditComponent },
  { path: 'edit1/:id', component: TopicEditComponent },
  { path: 'createnews/:id', component: TopicNewsCreateComponent },
  { path: 'editnews/:id', component: TopicNewsEditComponent },
  { path: 'news', component: TopicNewsListComponent },
  { path: 'createmanifest/:id', component: TopicManifestCreateComponent },
  { path: 'editmanifest/:id', component: TopicManifestEditComponent },
  { path: 'manifest/:id', component: TopicManifestListComponent },
  { path: 'workcategory/:id', component: WorkCategoryListComponent },
  { path: 'createworkcategory/:id', component: WorkCategoryCreateComponent },
  { path: 'editworkcategory/:id', component: WorkCategoryEditComponent },
  { path: 'work/:id', component: WorkListComponent },
  { path: 'works/:id', component: WorkListComponent },
  { path: 'creatework/:id', component: WorkCreateComponent },
  { path: 'editwork/:id', component: WorkEditComponent },
  { path: 'complaints/:id', component: ComplaintsListComponent },
  { path: 'createcomplaints/:id', component: ComplaintsCreateComponent },
  { path: 'editcomplaints/:id', component: ComplaintsEditComponent },
  { path: 'feedback/:id', component: FeedbackListComponent },
  { path: 'createfeedback/:id', component: FeedbackCreateComponent },
  { path: 'editfeedback/:id', component: FeedbackEditComponent },
  { path: 'policy/:id', component: PolicyListComponent },
  { path: 'createpolicy/:id', component: PolicyCreateComponent },
  { path: 'editpolicy/:id', component: PolicyEditComponent },
  { path: 'phonenumbers/:id', component: PhoneNumbersListComponent },
  { path: 'createphonenumbers/:id', component: PhoneNumbersCreateComponent },
  { path: 'editphonenumbers/:id', component: PhoneNumbersEditComponent },
  { path: 'photos/:id', component: PhotosListComponent },
  { path: 'videos/:id', component: VideosListComponent },
  { path: 'share/:id', component: ShareListComponent },
  { path: 'mandal/:id', component: MandalListComponent },
  { path: 'createmandal/:id', component: MandalCreateComponent },
  { path: 'editmandal/:id', component: MandalEditComponent },
  { path: 'mandal1/:id', component: Mandal1ListComponent },
  { path: 'createmandal1/:id', component: Mandal1CreateComponent },
  { path: 'editmandal1/:id', component: Mandal1EditComponent },
  { path: 'mandal2/:id', component: Mandal2ListComponent },
  { path: 'createmandal2/:id', component: Mandal2CreateComponent },
  { path: 'editmandal2/:id', component: Mandal2EditComponent },
  { path: 'mandal3/:id', component: Mandal3ListComponent },
  { path: 'createmandal3/:id', component: Mandal3CreateComponent },
  { path: 'editmandal3/:id', component: Mandal3EditComponent },
  { path: 'mandal4/:id', component: Mandal4ListComponent },
  { path: 'createmandal4/:id', component: Mandal4CreateComponent },
  { path: 'editmandal4/:id', component: Mandal4EditComponent },
  { path: 'mandal5/:id', component: Mandal5ListComponent },
  { path: 'createmandal5/:id', component: Mandal5CreateComponent },
  { path: 'editmandal5/:id', component: Mandal5EditComponent },
  { path: '**', component: AppComponent }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TopicsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [UploadFileService],
  bootstrap: [AppComponent]
})
export class AppModule { }
