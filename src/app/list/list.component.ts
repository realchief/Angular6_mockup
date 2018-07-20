import { Component, OnInit } from '@angular/core';
import { EntityService } from '../services/entity.service'
import { Entity } from '../models/entity';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class EntityComponent implements OnInit { 

  entities: Entity[];

  constructor(private entityService : EntityService) { }

  ngOnInit() {
    this.entityService.getEntities().subscribe(entities => {
      this.entities = entities;
    });

    const body = document.getElementsByTagName('body')[0];
    body.classList.add('list');
  }

  ngOnDestroy(): void {
    const body = document.getElementsByTagName('body')[0];
    body.classList.remove('list');
  }

  // selectEntity(entity: Entity) {
  //   console.log(entity);
  //   this.entityService.selectEntity(entity);
  // }

}   