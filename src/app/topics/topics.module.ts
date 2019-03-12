import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopicListComponent } from './topic-list/topic-list.component';
import { TopicCreateComponent } from './topic-create/topic-create.component';
import { TopicEditComponent } from './topic-edit/topic-edit.component';
import { TopicNewsListComponent } from './topicnews-list/topic-list.component';
import { TopicNewsCreateComponent } from './topicnews-create/topic-create.component';
import { TopicNewsEditComponent } from './topicnews-edit/topic-edit.component';

import { TopicManifestListComponent } from './manifest-list/topic-list.component';
import { TopicManifestCreateComponent } from './manifest-create/topic-create.component';
import { TopicManifestEditComponent } from './manifest-edit/topic-edit.component';

import { WorkListComponent } from './work-list/topic-list.component';
import { WorkCreateComponent } from './work-create/topic-create.component';
import { WorkEditComponent } from './work-edit/topic-edit.component';

import { ComplaintsListComponent } from './complaints-list/topic-list.component';
import { ComplaintsCreateComponent } from './complaints-create/topic-create.component';
import { ComplaintsEditComponent } from './complaints-edit/topic-edit.component';

import { FeedbackListComponent } from './feedback-list/topic-list.component';
import { FeedbackCreateComponent } from './feedback-create/topic-create.component';
import { FeedbackEditComponent } from './feedback-edit/topic-edit.component';

import { PolicyListComponent } from './policy-list/topic-list.component';
import { PolicyCreateComponent } from './policy-create/topic-create.component';
import { PolicyEditComponent } from './policy-edit/topic-edit.component';

import { PhoneNumbersListComponent } from './phonenumbers-list/topic-list.component';
import { PhoneNumbersCreateComponent } from './phonenumbers-create/topic-create.component';
import { PhoneNumbersEditComponent } from './phonenumbers-edit/topic-edit.component';

import { PhotosListComponent } from './photos-list/topic-list.component';
import { VideosListComponent } from './videos-list/topic-list.component';
import { AudiosListComponent } from './audios-list/topic-list.component';

import { ShareListComponent } from './share-list/topic-list.component';


import { MandalListComponent } from './mandal-list/topic-list.component';
import { MandalCreateComponent } from './mandal-create/topic-create.component';
import { MandalEditComponent } from './mandal-edit/topic-edit.component';

import { Mandal1ListComponent } from './mandal1-list/topic-list.component';
import { Mandal1CreateComponent } from './mandal1-create/topic-create.component';
import { Mandal1EditComponent } from './mandal1-edit/topic-edit.component';

import { Mandal2ListComponent } from './mandal2-list/topic-list.component';
import { Mandal2CreateComponent } from './mandal2-create/topic-create.component';
import { Mandal2EditComponent } from './mandal2-edit/topic-edit.component';

import { Mandal3ListComponent } from './mandal3-list/topic-list.component';
import { Mandal3CreateComponent } from './mandal3-create/topic-create.component';
import { Mandal3EditComponent } from './mandal3-edit/topic-edit.component';

import { Mandal4ListComponent } from './mandal4-list/topic-list.component';
import { Mandal4CreateComponent } from './mandal4-create/topic-create.component';
import { Mandal4EditComponent } from './mandal4-edit/topic-edit.component';

import { Mandal5ListComponent } from './mandal5-list/topic-list.component';
import { Mandal5CreateComponent } from './mandal5-create/topic-create.component';
import { Mandal5EditComponent } from './mandal5-edit/topic-edit.component';

import { WorkCategoryListComponent } from './workcategory-list/topic-list.component';
import { WorkCategoryCreateComponent } from './workcategory-create/topic-create.component';
import { WorkCategoryEditComponent } from './workcategory-edit/topic-edit.component';

import {ServicesModule} from "../services/services.module";
import {FormsModule} from "@angular/forms";
import "froala-editor/js/froala_editor.pkgd.min.js";
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import {RouterModule} from "@angular/router";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    ServicesModule,
    FormsModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  providers:[],
  declarations: [ TopicListComponent, TopicCreateComponent, TopicEditComponent,TopicNewsListComponent,
    TopicNewsCreateComponent,TopicNewsEditComponent,TopicManifestListComponent,TopicManifestCreateComponent,
    TopicManifestEditComponent,WorkListComponent,WorkCreateComponent,WorkEditComponent,ComplaintsListComponent,
    ComplaintsCreateComponent,ComplaintsEditComponent,FeedbackListComponent,FeedbackCreateComponent,
    FeedbackEditComponent,PolicyListComponent,PolicyCreateComponent,PolicyEditComponent,PhoneNumbersListComponent,
    PhoneNumbersCreateComponent,PhoneNumbersEditComponent,PhotosListComponent,VideosListComponent,
    MandalListComponent,MandalCreateComponent,MandalEditComponent,Mandal1ListComponent,Mandal1EditComponent,
    Mandal1CreateComponent,Mandal2ListComponent,Mandal2EditComponent,
    Mandal2CreateComponent,Mandal3ListComponent,Mandal3EditComponent,
    Mandal3CreateComponent,Mandal4ListComponent,Mandal4EditComponent,
    Mandal4CreateComponent,Mandal5ListComponent,Mandal5EditComponent,
    Mandal5CreateComponent,WorkCategoryListComponent,WorkCategoryCreateComponent,WorkCategoryEditComponent,ShareListComponent,AudiosListComponent
  ]
})
export class TopicsModule { }
