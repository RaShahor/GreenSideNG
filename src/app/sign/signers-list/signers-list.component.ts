import { Component, Inject, OnInit } from '@angular/core';

import { Signer } from 'crypto';
import { Person } from 'src/app/models/person';

import{MatTableModule}from '@angular/material/table/';

import { DataSource } from '@angular/cdk/table';
import { SignerService } from '../signers.service';

@Component({
  selector: 'app-signer-list',
  templateUrl: './signers-list.component.html',
  styleUrls: ['./signers-list.component.scss']
})
export class SignerListComponent implements OnInit {

  displayedColumns = ['id', 'fName', 'lName', 'mail'];
 
  dataSource!: DataSource<SignerService>;
  Signers!:Person[]
  
  constructor( private signerService: SignerService) { }

  ngOnInit(): void {
    this.signerService.getSigners(1).subscribe(res => {
      this.Signers = res.map<Person>(r => r.Person);
     
    })
  }

}