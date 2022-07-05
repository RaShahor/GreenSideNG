import { Routes } from "@angular/router";
import { FormListComponent } from "./form-list/form-list.component";
import { FormProcessingBarComponent } from "./form-processing-bar/form-processing-bar.component";
import { TemplateListComponent } from "./template-list/template-list.component";

export const formRoutes: Routes = [
    {
        path: 'form-list',
        component: FormListComponent
    },
    {
        path: 'form-proccing-bar',
        component: FormProcessingBarComponent
    },
    {
        path: 'template-list',
        component: TemplateListComponent
    }
    
]