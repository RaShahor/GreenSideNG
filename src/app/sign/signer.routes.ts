import { Component } from "@angular/core";
import { Routes } from "@angular/router";
import { NewSignerComponent } from "./new-signer/new-signer.component";
import { SignerListComponent } from "./signers-list/signers-list.component";

export const routes:Routes=[
    {
        path:'new',
        component:NewSignerComponent
    },
    {
        path:'signer-list',
        component:SignerListComponent
    }
]