import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CourseComponent } from './course/course.component';
import { EventComponent } from './event/event.component';
import { ForumsComponent } from './forums/forums.component';
import { MeanComponent } from './mean/mean.component';
import { BasicComponent } from './basic/basic.component';
import { IntermediateComponent } from './intermediate/intermediate.component';
import { AdvancedComponent } from './advanced/advanced.component';
import { AddComponent } from './add/add.component';
import { HotsComponent } from './hots/hots.component';
import { TestComponent } from './test/test.component';
import { SuggestionComponent } from './suggestion/suggestion.component';
import { ErrorComponent } from './error/error.component';
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { CoursesComponent } from './courses/courses.component';
import { ResumeComponent } from './resume/resume.component';
import { ReportComponent } from './report/report.component';
import { UserSuggestionComponent } from './user-suggestion/user-suggestion.component';
import { StudentQueryComponent } from './student-query/student-query.component';
import { StudentProjectComponent } from './student-project/student-project.component';
import { NumUserComponent } from './num-user/num-user.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    CourseComponent,
    EventComponent,
    ForumsComponent,
    MeanComponent,
    BasicComponent,
    IntermediateComponent,
    AdvancedComponent,
    AddComponent,
    HotsComponent,
    TestComponent,
    SuggestionComponent,
    ErrorComponent,
    UserComponent,
    CompanyComponent,
    CoursesComponent,
    ResumeComponent,
    ReportComponent,
    UserSuggestionComponent,
    StudentQueryComponent,
    StudentProjectComponent,
    NumUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
